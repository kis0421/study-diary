import { observable } from "mobx"

const writeDiary = observable({
  writeForm: {
    title: "",
    link: "",
    content: "",
    keywordString: "",
    keywords: new Set()
  },
  addKeyword(keyword: string) {
    this.writeForm.keywords.add(keyword);
  },
  deleteKeyword(keyword: string) {
    this.writeForm.keywords.delete(keyword);
  },
  handleChange(name: string, value: any) {
    this.writeForm[name] = value;
  },
})

export default writeDiary