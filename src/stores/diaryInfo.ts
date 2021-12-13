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
  diaryList?: diaryInterface[];
  diaryDetail?: diaryInterface;
  setDiaryList: (diaryList: diaryInterface[]) => void
  setDiaryDetail: (diary: diaryInterface) => void
}

const diaryList = observable<diaryInfoInterFace>({
  diaryList: undefined,
  diaryDetail: undefined,
  setDiaryList(diaryList) {
    this.diaryList = diaryList;
  },
  setDiaryDetail(diary) {
    this.diaryDetail = diary
  }
})

export default diaryList