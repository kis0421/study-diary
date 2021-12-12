import tab from "./stores/tab";
import siteInfo from "./stores/siteInfo";
import writeDiary from "./stores/writeDiary";
import universalUI from "./stores/universalUI";
import diaryInfo from "./stores/diaryInfo"

const useStore = () => ({ tab, siteInfo, writeDiary, universalUI, diaryInfo });

export default useStore;