import React from "react";
import { Routes as Switch, Route } from "react-router-dom"

import NavigationMenu from "./components/NavigationMenu"

import Setting from "./components/Setting"

const Routes = () => {
  return (
    <section>
      <Switch>
        <Route path={`/`} element={<>메인</>} />
        <Route path={`/write`} element={<>gggg</>} />
        <Route path={`/setting`} element={<Setting />} />
      </Switch>
      <NavigationMenu />
    </section>)
}
//     <NavigationMenu />
export default Routes;