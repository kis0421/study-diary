import { observable } from "mobx"
interface siteInfoInterface {
  idx: number;
  siteId: string;
  siteName: string;
}

const siteInfo = observable<{
  currentSiteInfo?: siteInfoInterface,
  setCurrentSiteInfo: (siteInfo: siteInfoInterface) => void
}>({
  currentSiteInfo: undefined,
  setCurrentSiteInfo(siteInfo: siteInfoInterface) {
    this.currentSiteInfo = siteInfo;
  },
})

export default siteInfo