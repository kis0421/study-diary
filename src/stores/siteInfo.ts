import { observable } from "mobx"

const siteInfo = observable({
    currenSiteInfo: undefined,
    setCurrenSiteInfo(id: string) {
        this.currenSiteId = id;
    },
})

export default siteInfo