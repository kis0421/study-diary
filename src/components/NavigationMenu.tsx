
import React from "react";
import { useObserver } from "mobx-react"
import { useNavigate } from "react-router-dom"

import { Tabs, Tab, } from "@mui/material"

import useStore from "../useStore";

const NavigationMenu = () => {
  const { tab, siteInfo } = useStore();
  const navigate = useNavigate();
  console.log(siteInfo);
  return useObserver(() =>
    <Tabs
      style={{ position: "fixed", width: "100%", bottom: 0 }}
      value={tab.currentTab}
      onChange={(_, value) => {
        tab.setCurrentTab(value);
        navigate(`/${value}`);
      }}
      variant="fullWidth"
      aria-label="full width tabs example">

      <Tab label="내 다이어리" value={""} />
      <Tab label="글쓰기" value={"write"} />
      <Tab label="설정" value={"setting"} />

    </Tabs>)
}

export default NavigationMenu