import React, { useEffect, useContext } from "react";
import { Routes as Switch, Route, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { getSiteInfo } from "./utils/graphqlBuilder"

import StoreContext from "./context/StoreContext";
import UIContext from "./context/UIContext";

import NavigationMenu from "./components/NavigationMenu";
import Setting from "./components/Setting";
import Write from "./components/Write";
import Main from "./components/Main";

const Routes = () => {
  const { siteInfo } = useContext(StoreContext);
  const { alert } = useContext(UIContext);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      // TODO: siteIdFromLocationHref 구하는 방식에 사이드이펙트가 있는지 고려
      const siteIdFromLocationHref = window.location.href.split("/#/")?.[1].split("/")?.[0] || "";
      const currentSiteInfo = await getSiteInfo(siteIdFromLocationHref);
      // TODO: 뒤로가기시 alert가 안뜨는 문제 useEffect의 deps 넣어야함
      if (currentSiteInfo.length) {
        siteInfo.setCurrentSiteInfo(currentSiteInfo[0]);
      } else {
        alert({ message: "존재하지 않는 다이어리 입니다.", action: () => navigate("/") })
      }
    })()

  }, []);

  return (
    <section>
      {window.location.hash === ""
        ? <Main />
        : <>
          <Switch>
            <Route path={`:siteId`} element={<NavigationMenu />}>
              <Route path={`home`} element={<>home</>} />
              <Route path={`write`} element={<Write />} />
              <Route path={`setting`} element={<Setting />} />
            </Route>
            <Route path={`/*`} element={<>페이지를 찾을 수 없습니다.</>} />
          </Switch>

        </>}
    </section>)
}
export default observer(Routes);