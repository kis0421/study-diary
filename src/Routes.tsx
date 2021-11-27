import React from "react";
import { Routes as Switch, Route, useLocation } from "react-router-dom";

import NavigationMenu from "./components/NavigationMenu";

import Setting from "./components/Setting";
import Write from "./components/Write";
import Main from "./components/Main";

const Routes = () => {
  // TODO: 페이지 key 값에 따른 default router prefix 추가해야함
  return (
    <section>
      {window.location.hash === ""
        ? <Main />
        : <>
          <Switch>
            <Route path={`/:siteId`} element={<>메인</>} />
            <Route path={`/:siteId/write`} element={<Write />} />
            <Route path={`/:siteId/setting`} element={<Setting />} />
          </Switch>
          <NavigationMenu />
        </>}
    </section>)
}
//     <NavigationMenu />
export default Routes;