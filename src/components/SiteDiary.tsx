import React, { useEffect, useContext } from "react"
import { observer } from "mobx-react-lite";
import { Backdrop, CircularProgress } from "@mui/material"

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
      <header style={{ fontWeight: "bold", fontSize: "1.5em", marginBottom: "8px" }}>{siteInfo.currentSiteInfo?.siteName}</header>
      <article>
        {(diaryInfo?.diaryList || []).map((i) => i.link)}
      </article>
    </section>
    {siteInfo.currentSiteInfo === undefined &&
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={siteInfo.currentSiteInfo === undefined}>
        <CircularProgress color="inherit" />
      </Backdrop>}
  </>
  )
}

export default observer(SiteDiary);