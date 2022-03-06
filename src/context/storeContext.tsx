import React, { createContext, ReactNode } from "react";
import useStore from "../useStore";

import { TabInterface } from "../stores/tab";
import { SiteInfoInterface } from "../stores/siteInfo";
import { WriteDiaryInterface } from "../stores/writeDiary";
import { DiaryInfoInterFace } from "../stores/diaryInfo"


interface Value {
  siteInfo: SiteInfoInterface,
  diaryInfo: DiaryInfoInterFace
  tab: TabInterface,
  writeDiary: WriteDiaryInterface,
  log: (data: any) => void;
}

const context = createContext<Value>({} as any);
export default context;
export function Provider(props: { children: ReactNode }) {
  const { siteInfo, tab, writeDiary, diaryInfo } = useStore();
  return <context.Provider
    value={{
      siteInfo,
      tab,
      writeDiary,
      diaryInfo,
      log: (data) => global.console.log(data),
    }}>
    {props.children}
  </context.Provider>;
}
export const Consumer = context.Consumer;
