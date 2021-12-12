import { observable } from "mobx"
interface currentSiteInfoInterface {
  idx: number;
  siteId: string;
  siteName: string;
}
export interface siteInfoInterface {
  currentSiteInfo?: currentSiteInfoInterface
  setCurrentSiteInfo: (siteInfo: currentSiteInfoInterface) => void
}

const siteInfo = observable<siteInfoInterface>({
  currentSiteInfo: undefined,
  setCurrentSiteInfo(siteInfo) {
    this.currentSiteInfo = siteInfo;
  },
})

export default siteInfo