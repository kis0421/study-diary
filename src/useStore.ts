import { tab } from "./stores/tab";
import siteInfo from "./stores/siteInfo";
import writeDiary from "./stores/writeDiary";
import universalUI from "./stores/universalUI";

const useStore = () => ({ tab, siteInfo, writeDiary, universalUI });

export default useStore;