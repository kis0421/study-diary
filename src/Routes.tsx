import React from "react";
import { Routes as Switch, Route, useLocation } from "react-router-dom"

import NavigationMenu from "./components/NavigationMenu"

import Setting from "./components/Setting"
import Main from "./components/Main"

const Routes = () => {
  const location = useLocation();
  console.log(location.pathname)
  return (
    <section>
      {location.pathname === "/"
        ? <Main />
        : <>
          <Switch>
            <Route path={`/`} element={<>메인</>} />
            <Route path={`/write`} element={<>gggg</>} />
            <Route path={`/setting`} element={<Setting />} />
          </Switch>
          <NavigationMenu />
        </>}
    </section>)
}
//     <NavigationMenu />
export default Routes;