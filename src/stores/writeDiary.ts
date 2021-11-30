import { observable } from "mobx"

const writeDiary = observable({
  writeForm: {
    link: "",
    contents: "",
  },
  changeHandle(name: string, value: any) {
    this.writeForm[name] = value;
  },
})

export default writeDiary