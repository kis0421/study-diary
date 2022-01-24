import React, { useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { observer } from "mobx-react-lite";
import { Backdrop, CircularProgress, Paper } from "@mui/material"

import { getDiaryList } from "../utils/graphqlBuilder"
import StoreContext from "../context/StoreContext";


const SiteDiary = () => {
  const { siteInfo, diaryInfo } = useContext(StoreContext);
  const navigate = useNavigate();
  const pathName = (useLocation()).pathname;
  
  useEffect(() => {
    if (siteInfo.currentSiteInfo) {
      (async () => {
        const diaryList = await getDiaryList(siteInfo.currentSiteInfo.idx);
        diaryInfo.setDiaryList(diaryList);
      })()
    }

  }, [siteInfo.currentSiteInfo])

  return (<>
    {siteInfo.currentSiteInfo === undefined || diaryInfo.diaryList === undefined
      ? <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={siteInfo.currentSiteInfo === undefined || diaryInfo.diaryList === undefined}>
        <CircularProgress color="inherit" />
      </Backdrop>
      : <section style={{ position: "fixed", width: "calc(100% - 16px)", height: "calc(100% - 64px)", padding: "8px" }}>
        <header style={{
          textAlign:"center",
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
                onClick={() => navigate(`${pathName}${pathName[pathName.length - 1] !== "/" ? "/" : ""}${i.idx}`)}
                style={{
                  minHeight: "250px",
                  marginBottom: "8px",
                  wordBreak: "break-all",
                  padding: "6px",
                  fontSize: "0.75em"
                }}
                elevation={3}>{i.content}</Paper>
              <div style={{ marginBottom: "42px", textAlign: "center" }}>
                <div>{i.title}</div>
                <div style={{ fontSize: "0.8em", color: "#999" }}>{i.registerDate.substring(0, 10)}</div>
              </div>
            </div>

          ))}
        </article>
      </section>}
  </>
  )
}

export default observer(SiteDiary);