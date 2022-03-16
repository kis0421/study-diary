import React, { createContext, ReactNode } from "react";
import useStore from "../useStore";

import { TabInterface } from "../stores/tab";
import { SiteInfoInterface } from "../stores/siteInfo";
import { WriteDiaryInterface } from "../stores/writeDiary";
import { DiaryInfoInterFace } from "../stores/diaryInfo"
import { CreateSiteInterface } from "../stores/siteInfoForm"


interface Value {
  siteInfo: SiteInfoInterface,
  diaryInfo: DiaryInfoInterFace
  tab: TabInterface,
  writeDiary: WriteDiaryInterface,
  siteInfoForm: CreateSiteInterface,
}

const context = createContext<Value>({} as any);
export default context;
export function Provider(props: { children: ReactNode }) {
  const { siteInfo, tab, writeDiary, diaryInfo, siteInfoForm } = useStore();
  return <context.Provider
    value={{
      siteInfo,
      tab,
      writeDiary,
      diaryInfo,
      siteInfoForm
    }}>
    {props.children}
  </context.Provider>;
}
export const Consumer = context.Consumer;
