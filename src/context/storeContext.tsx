import React, { createContext, ReactNode } from "react";
import useStore from "../useStore";

import { tabInterface } from "../stores/tab";
import { siteInfoInterface } from "../stores/siteInfo";
import { writeDiaryInterface } from "../stores/writeDiary";
import { diaryInfoInterFace } from "../stores/diaryInfo"


interface Value {
  siteInfo: siteInfoInterface,
  diaryInfo: diaryInfoInterFace
  tab: tabInterface,
  writeDiary: writeDiaryInterface,
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
