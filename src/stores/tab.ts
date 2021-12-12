import { observable } from "mobx"

type tabType = "" | "write" | "setting";
export interface tabInterface {
  currentTab: tabType;
  setCurrentTab: (tab: tabType) => void

}
// TODO: currentTab 초기화 하는 과정 개선 필요
const tab = observable(<tabInterface>{
  currentTab: (window.location.href.split("/#/")?.[1] || "").split("/")?.[1] || "",
  setCurrentTab(tab: tabType) {
    this.currentTab = tab
  },
})
export default tab