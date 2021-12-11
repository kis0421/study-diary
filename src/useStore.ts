import { tab } from "./stores/tab";
import siteInfo from "./stores/siteInfo";
import writeDiary from "./stores/writeDiary";
import globalUI from "./stores/globalUI";

const useStore = () => ({ tab, siteInfo, writeDiary, globalUI });

export default useStore;