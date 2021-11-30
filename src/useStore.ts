import { tab } from "./stores/tab";
import siteInfo from "./stores/siteInfo";
import writeDiary from "./stores/writeDiary";

const useStore = () => ({ tab, siteInfo, writeDiary });

export default useStore;