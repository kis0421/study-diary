import { observable } from "mobx"

interface diaryInterFace {
  idx: number;
  siteIdx: number;
  userId: number;
  keywords?: string;
  link?: string;
  registerDate?: string;
  modifyDate?: string;
  content?: string;
}

interface diaryInfoInterFace {
  list: diaryInterFace[]
}

const diaryList = observable<{
  diaryList?: diaryInfoInterFace["list"],
  setDiaryList: (diaryList: diaryInfoInterFace["list"]) => void
}>({
  diaryList: undefined,
  setDiaryList(diaryList: diaryInfoInterFace["list"]) {
    this.diaryList = diaryList;
  },
})

export default diaryList