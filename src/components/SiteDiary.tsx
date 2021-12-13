import React, { useEffect, useContext } from "react"
import { observer } from "mobx-react-lite";
import { Backdrop, CircularProgress, Paper } from "@mui/material"

import { getDiaryList } from "../utils/graphqlBuilder"
import StoreContext from "../context/StoreContext";


const SiteDiary = () => {
  const { siteInfo, diaryInfo } = useContext(StoreContext);

  useEffect(() => {
    if (siteInfo.currentSiteInfo) {
      (async () => {
        const diaryList = await getDiaryList(siteInfo.currentSiteInfo.idx);
        diaryInfo.setDiaryList(diaryList);
      })()
    }

  }, [siteInfo.currentSiteInfo])

  return (<>
    <section style={{ position: "fixed", width: "100%", height: "calc(100% - 48px)", padding: "8px" }}>
      <header style={{
        fontWeight: "bold",
        fontSize: "1.5em",
        paddingBottom: "8px",
        borderBottom: "1px solid #efefef"
      }}>{siteInfo.currentSiteInfo?.siteName}</header>
      <article style={{
        height: "calc(100vh - 98px)",
        overflowY: "auto"
      }}>
        {(diaryInfo?.diaryList || []).map((i, index) => (
          <div
            key={i.idx}
            style={{
              float: "left",
              display: "inline-block",
              width: "calc(50% - 18px)",
              marginRight: index % 2 === 0 ? "22px" : "0",
            }}>
            <Paper
              style={{
                minHeight: "250px",
                marginBottom: "8px",
                wordBreak: "break-all",
                padding: "6px",
                fontSize: "0.75em"
              }}
              elevation={3}>{i.link}</Paper>
            <div style={{ marginBottom: "42px", textAlign: "center" }}>
              <div>{i.title}</div>
              <div style={{ fontSize: "0.8em", color: "#999" }}>{i.registerDate.substring(0, 10)}</div>
            </div>
          </div>

        ))}
      </article>
    </section>
    {
      siteInfo.currentSiteInfo === undefined || diaryInfo.diaryList === undefined &&
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={siteInfo.currentSiteInfo === undefined || diaryInfo.diaryList === undefined}>
        <CircularProgress color="inherit" />
      </Backdrop>
    }
  </>
  )
}

export default observer(SiteDiary);