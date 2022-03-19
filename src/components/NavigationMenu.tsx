
import React from "react";
import { observer } from "mobx-react-lite";
import { useNavigate, useParams, Outlet } from "react-router-dom";

import { Tabs, Tab, } from "@mui/material";
import {
  Create as CreateIcon,
  Home as HomeIcon,
  MoreHoriz as MoreHorizIcon,
} from "@mui/icons-material";

import useStore from "../useStore";

const NavigationMenu = () => {
  const { tab, siteInfo } = useStore();
  const param = useParams();
  const navigate = useNavigate();

  return (<>
    <Tabs
      style={{ position: "fixed", width: "100%", borderTop: "1px solid #efefef", bottom: 0 }}
      value={tab.currentTab}
      onChange={(_, value) => {
        tab.setCurrentTab(value);
        navigate(`/${param.siteId}/${value}`);
      }}
      variant="fullWidth">

      <Tab label={<HomeIcon />} value={""} />
      <Tab label={<CreateIcon />} value={"write"} />
      <Tab label={<MoreHorizIcon />} value={"setting"} />

    </Tabs>
    <Outlet />
  </>)
}

export default observer(NavigationMenu)