import React, { useEffect, useContext } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import { observer } from "mobx-react-lite";
import { Backdrop, CircularProgress, Paper } from "@mui/material"

import { getDiaryDetail } from "../utils/graphqlBuilder"
import StoreContext from "../context/StoreContext";


const SiteDiaryView = () => {
  const { siteInfo, diaryInfo } = useContext(StoreContext);
  const { diaryIdx } = useParams();

  useEffect(() => {
    if (siteInfo.currentSiteInfo) {
      (async () => {
        diaryInfo.setDiaryDetail((await getDiaryDetail(siteInfo.currentSiteInfo.idx, parseInt(diaryIdx, 10)))[0])
      })()
    }
    return (() => diaryInfo.setDiaryDetail(undefined));
  }, [siteInfo.currentSiteInfo])

  return (<>
    {siteInfo.currentSiteInfo === undefined || diaryInfo.diaryDetail === undefined
      ? <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={siteInfo.currentSiteInfo === undefined || diaryInfo.diaryDetail === undefined}>
        <CircularProgress color="inherit" />
      </Backdrop>
      : <section style={{ position: "fixed", width: "100%", height: "calc(100% - 48px)", padding: "8px" }}>
        <header style={{
          fontWeight: "bold",
          fontSize: "1.5em",
          paddingBottom: "8px",
          marginBottom: "4px",
          borderBottom: "1px solid #efefef"
        }}>{diaryInfo.diaryDetail?.title}</header>
        <article style={{
          height: "calc(100vh - 98px)",
          overflowY: "auto"
        }}>
          <div style={{ marginBottom: "8px" }}>
            <Link
              to={diaryInfo.diaryDetail.link}> {diaryInfo.diaryDetail.link} </Link>
          </div>
          <div>{diaryInfo.diaryDetail.content}</div>
        </article>
      </section>
    }
  </>)
}

export default observer(SiteDiaryView);