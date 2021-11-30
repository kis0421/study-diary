import { observable } from "mobx"

const writeDiary = observable({
    currenSiteId: undefined,
    setCurrentId(id: string){
        this.currenSiteId = id;
    },
})

export default writeDiary