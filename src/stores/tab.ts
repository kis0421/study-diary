import { observable } from "mobx"

export const tab = observable({
    currentTab: "",
    setCurrentTab(tab: "" | "write" | "setting") {
        this.currentTab = tab
    },
})
