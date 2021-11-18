import { observable } from "mobx"

export const diary = observable({
    data: [],
    count: 0,
    addCount() {
        this.count++;
    }
})
