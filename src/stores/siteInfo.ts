import { observable } from "mobx"
interface CurrentSiteInfoInterface {
  idx: number;
  siteId: string;
  siteName: string;
}
export interface SiteInfoInterface {
  currentSiteInfo?: CurrentSiteInfoInterface
  setCurrentSiteInfo: (siteInfo: CurrentSiteInfoInterface) => void
}

const siteInfo = observable<SiteInfoInterface>({
  currentSiteInfo: undefined,
  setCurrentSiteInfo(siteInfo) {
    this.currentSiteInfo = siteInfo;
  },
})

export default siteInfo