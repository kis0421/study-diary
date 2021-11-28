import React from "react";
import { Routes as Switch, Route, Outlet } from "react-router-dom";
import useStore from "./useStore";

import NavigationMenu from "./components/NavigationMenu";
import Setting from "./components/Setting";
import Write from "./components/Write";
import Main from "./components/Main";

const Routes = () => {
  const { siteInfo } = useStore();
  // TODO: 페이지 key 값에 따른 default router prefix 추가해야함
  return (
    <section>
      {window.location.hash === ""
        ? <Main />
        : <>
          <Switch>
            <Route path={`:siteId`} element={<><NavigationMenu /><Outlet /></>}>
              <Route path={`home`} element={<>home</>} />
              <Route path={`write`} element={<Write />} />
              <Route path={`setting`} element={<Setting />} />
            </Route>
            <Route path={`/*`} element={<>페이지를 찾을 수 없습니다.</>} />
          </Switch>

        </>}
    </section>)
}
//     <NavigationMenu />
export default Routes;