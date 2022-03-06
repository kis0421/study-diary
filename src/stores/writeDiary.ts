import { observable } from "mobx"

interface WriteFromInterface {
  title: string;
  link: string;
  content: string;
  keywordString: string;
  keywords: Set<string>
}
export interface WriteDiaryInterface {
  writeForm: WriteFromInterface;
  addKeyword: (keywrod: string) => void;
  deleteKeyword: (keywrod: string) => void;
  handleChange: (name: string, value: any) => void;
}

const writeDiary = observable(<WriteDiaryInterface>{
  writeForm: {
    title: "",
    link: "",
    content: "",
    keywordString: "",
    keywords: new Set()
  },
  addKeyword(keyword) {
    this.writeForm.keywords.add(keyword);
  },
  deleteKeyword(keyword) {
    this.writeForm.keywords.delete(keyword);
  },
  handleChange(name, value) {
    this.writeForm[name] = value;
  },
})

export default writeDiary