import { observable } from "mobx"

// TODO: currentTab 초기화 하는 과정 개선 필요

export const tab = observable({
  currentTab: window.location.href.split("/#/")?.[1].split("/")?.[1] || "",
  setCurrentTab(tab: "" | "write" | "setting") {
    this.currentTab = tab
  },
})
