import React, { createContext, ReactNode } from "react";
import useStore from "../useStore";
interface Value {
  // export value Interface
  // any type 타이핑 필요
  siteInfo: {
    currenSiteId: any;
    setCurrentId(id: string): void;
  },
  tab: {
    currentTab: string;
    setCurrentTab(tab: "" | "write" | "setting"): void;
  },
  writeDiary: {
    writeForm: {
      link: string;
      contents: string;
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
  const { siteInfo, tab, writeDiary } = useStore();
  return <context.Provider
    value={{
      siteInfo,
      tab,
      writeDiary,
      log: (data) => global.console.log(data),
    }}>
    {props.children}
  </context.Provider>;
}
export const Consumer = context.Consumer;
