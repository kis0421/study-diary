import { observable } from "mobx"

interface UIInfo {
  open: boolean;
  type?: "alert" | "confirm";
  title?: string | React.ReactElement;
  message?: string | React.ReactElement;
  action?: () => void;
}
export interface UIInfoInterface {
  info: UIInfo,
  setUIInfo: (info: UIInfo) => void
}
const userInterfaceInfo = observable(<UIInfoInterface>{
  info: {
    open: false,
    title: undefined,
    type: undefined,
    message: undefined,
    action: undefined
  },
  setUIInfo(info) {
    this.info = info
  },
})

export default userInterfaceInfo
