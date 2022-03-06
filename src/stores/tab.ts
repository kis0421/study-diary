import { observable } from "mobx"

type TabType = "" | "write" | "setting";
export interface TabInterface {
  currentTab: TabType;
  setCurrentTab: (tab: TabType) => void

}
const tab = observable(<TabInterface>{
  currentTab: window.location.pathname.split("/")[2] || "",
  setCurrentTab(tab: TabType) {
    this.currentTab = tab
  },
})
export default tab