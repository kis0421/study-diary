
import React from "react";
import { observer } from "mobx-react-lite";
import { useNavigate, useParams } from "react-router-dom";

import { Tabs, Tab, } from "@mui/material";

import useStore from "../useStore";

const NavigationMenu = () => {
  const { tab, siteInfo } = useStore();
  const param = useParams();
  const navigate = useNavigate();

  return (<Tabs
    style={{ position: "fixed", width: "100%", bottom: 0 }}
    value={tab.currentTab}
    onChange={(_, value) => {
      tab.setCurrentTab(value);
      navigate(`/${param.siteId}/${value}`);
    }}
    variant="fullWidth">

    <Tab label="내 다이어리" value={""} />
    <Tab label="글쓰기" value={"write"} />
    <Tab label="설정" value={"setting"} />

  </Tabs>)
}

export default observer(NavigationMenu)