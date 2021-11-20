
import React from "react";
import { useObserver } from "mobx-react"

import { Tabs, Tab } from "@mui/material"

import useStore from "../useStore";

const NavigationMenu = () => {
    const { tab } = useStore();

    return useObserver(() => <Tabs
        style={{ position: "fixed", width: "100%", bottom: 0 }}
        value={tab.currentTab}
        onChange={(_, value) => tab.setCurrentTab(value)}
        variant="fullWidth"
        aria-label="full width tabs example">
        <Tab label="내 다이어리" value={0} />
        <Tab label="글쓰기" value={1} />
        <Tab label="설정" value={2} />
    </Tabs>)
}

export default NavigationMenu