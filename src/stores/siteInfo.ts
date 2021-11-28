import { observable } from "mobx"

const siteInfo = observable({
    currenSiteId: undefined,
    setCurrentId(id: string){
        this.currenSiteId = id;
    },
})

export default siteInfo