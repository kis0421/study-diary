import React, { createContext, ReactNode } from "react";
interface Value {
  // export value Interface
  log: (data: any) => void;
}
interface State {
  // inside state Interface
  name: string;

}

const context = createContext<Value>({} as any);
export default context;
export function Provider(props: { children: ReactNode }) {
  return <context.Provider
    value={{
      log: (data) => global.console.log(data),
    }}>
    {props.children}
  </context.Provider>;
}
export const Consumer = context.Consumer;
