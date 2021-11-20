import { observable } from "mobx"

export const tab = observable({
    currentTab: 2,
    setCurrentTab(tab: number) {
        this.currentTab = tab
    },
})
