import React, { createContext, ReactNode } from "react";
import useStore from "../useStore";

interface Value {
  siteInfo: {
    currentSiteInfo?: {
      idx: number;
      siteId: string;
      siteName: string;
    };
    setCurrentSiteInfo: (siteInfo: {
      idx: number;
      siteId: string;
      siteName: string;
    }) => void;
  },
  diaryInfo: {
    diaryList?: Array<{
      idx: number;
      siteIdx: number;
      userId: number;
      keywords?: string;
      link?: string;
      registerDate?: string;
      modifyDate?: string;
      content?: string;
    }>,
    setDiaryList: (diaryList: Array<{
      idx: number;
      siteIdx: number;
      userId: number;
      keywords?: string;
      link?: string;
      registerDate?: string;
      modifyDate?: string;
      content?: string;
    }>) => void
  }
  tab: {
    currentTab: string;
    setCurrentTab(tab: "" | "write" | "setting"): void;
  },
  writeDiary: {
    writeForm: {
      title: string;
      link: string;
      content: string;
      keywordString: string;
      keywords: Set<unknown>;
    };
    addKeyword(keyword: string): void;
    deleteKeyword(keyword: string): void;
    handleChange(name: string, value: any): void;
  },
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
