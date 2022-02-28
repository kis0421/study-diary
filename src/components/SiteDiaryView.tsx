import React, { useEffect, useContext } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import { observer } from "mobx-react-lite";
import { Backdrop, CircularProgress, Button } from "@mui/material"

import { getDiaryDetail } from "../utils/graphqlBuilder"
import UIContext from "../context/UIContext";
import StoreContext from "../context/StoreContext";


const SiteDiaryView = () => {
  const { siteInfo, diaryInfo } = useContext(StoreContext);
  const { confirm } = useContext(UIContext);

  const { diaryIdx } = useParams();
  const navigate = useNavigate();

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
      : <section style={{ position: "fixed", width: "calc(100% - 16px)", height: "calc(100% - 64px)", padding: "8px" }}>
        <header style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "1.5em",
          paddingBottom: "8px",
          marginBottom: "4px",
          borderBottom: "1px solid #efefef"
        }}>
          <Button
            onClick={() => navigate(`/${siteInfo.currentSiteInfo.siteId}/`)}
            style={{ position: "absolute", left: "0" }}>뒤로</Button>
          <span>{diaryInfo.diaryDetail?.title}</span>
          <Button
            onClick={() => confirm({ title: "알림", message: "삭제 하시겠습니까?"})}
            style={{ position: "absolute", right: "0" }}>삭제</Button>
        </header>
        <article style={{
          height: "calc(100vh - 98px)",
          wordBreak: "break-all"
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