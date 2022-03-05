import { observable } from "mobx"

type tabType = "" | "write" | "setting";
export interface tabInterface {
  currentTab: tabType;
  setCurrentTab: (tab: tabType) => void

}
const tab = observable(<tabInterface>{
  currentTab: window.location.pathname.split("/")[2] || "",
  setCurrentTab(tab: tabType) {
    this.currentTab = tab
  },
})
export default tab