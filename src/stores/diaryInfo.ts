import { observable } from "mobx"

interface diaryInterface {
  idx: number;
  siteIdx: number;
  userId: number;
  keywords?: string;
  link?: string;
  registerDate?: string;
  modifyDate?: string;
  title?: string;
  content?: string;
}
export interface diaryInfoInterFace {
  diaryList?: diaryInterface[]
  setDiaryList: (diaryList: diaryInterface[]) => void
}

const diaryList = observable<diaryInfoInterFace>({
  diaryList: undefined,
  setDiaryList(diaryList) {
    this.diaryList = diaryList;
  },
})

export default diaryList