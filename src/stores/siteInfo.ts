import { observable } from "mobx"

const siteInfo = observable({
    currenSiteInfo: undefined,
    setCurrenSiteInfo(siteInfo: any) {
        this.currenSiteInfo = siteInfo;
    },
})

export default siteInfo