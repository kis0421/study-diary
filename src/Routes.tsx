import React, { useEffect } from "react";
import { Routes as Switch, Route } from "react-router-dom";
import { observer } from "mobx-react-lite";
import useStore from "./useStore";
import { checkIsRegisterdSiteId } from "./utils/graphqlBuilder"

import NavigationMenu from "./components/NavigationMenu";
import Setting from "./components/Setting";
import Write from "./components/Write";
import Main from "./components/Main";

const Routes = () => {
  const { siteInfo } = useStore();
  
  useEffect(() => {
    (async () => {
      // TODO: siteIdFromLocationHref 구하는 방식에 사이드이펙트가 있는지 고려
      const siteIdFromLocationHref = window.location.href.split("/#/")?.[1].split("/")?.[0] || "";
      const isRegisterdSiteId = await checkIsRegisterdSiteId(siteIdFromLocationHref);
      if (isRegisterdSiteId) {
        siteInfo.setCurrentId(siteIdFromLocationHref);
      }
    })()

  }, [siteInfo.currenSiteId]);

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