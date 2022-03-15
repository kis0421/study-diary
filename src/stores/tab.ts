import { observable } from "mobx"

type TabType = "" | "write" | "setting";
export interface TabInterface {
  currentTab: TabType;
  setCurrentTab: (tab: TabType) => void

}
const tab = observable(<TabInterface>{
  currentTab: ["write", "setting"].includes(window.location.pathname.split("/")[2])
    ? window.location.pathname.split("/")[2]
    : "",
  setCurrentTab(tab: TabType) {
    this.currentTab = tab
  },
})
export default tab