import { observable } from "mobx"

interface DiaryInterface {
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
export interface DiaryInfoInterFace {
  diaryList?: DiaryInterface[];
  diaryDetail?: DiaryInterface;
  setDiaryList: (diaryList: DiaryInterface[]) => void
  setDiaryDetail: (diary: DiaryInterface) => void
}

const diaryList = observable<DiaryInfoInterFace>({
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