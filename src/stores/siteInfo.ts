import { observable } from "mobx"
import { useParams } from "react-router-dom"

const params = useParams();
// TODO: currentTab 초기화 하는 과정 개선 필요
const siteInfo = observable(() => ({
    currenSiteId: params,
    setCurrentTab(tab: "" | "write" | "setting") {
        this.currentTab = tab
    },
}))

export default siteInfo