import { observable } from "mobx"

interface UIInfo {
  open: boolean;
  type?: "alert" | "confirm";
  title?: string | React.ReactElement;
  message?: string | React.ReactElement;
  action?: () => void;
}


const userInterfaceInfo = observable<{ info: UIInfo, setUIInfo: (info: any) => void }>({
  info: {
    open: false,
    title: undefined,
    type: undefined,
    message: undefined,
    action: undefined
  },
  setUIInfo: (info) => {
    console.log(info);
  },
})

export default userInterfaceInfo
