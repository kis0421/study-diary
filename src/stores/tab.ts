import { observable } from "mobx"

export const tab = observable({
  currentTab: window.location.href.split("/#/")?.[1] || "",
  setCurrentTab(tab: "" | "write" | "setting") {
    this.currentTab = tab
  },
})
