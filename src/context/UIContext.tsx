import React, { createContext, ReactNode } from "react";
import { observer } from "mobx-react-lite";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import useStore from "../useStore";

interface Value {
  confirm: ({ title, message, action }: {
    title: string | React.ReactElement,
    message: string | React.ReactElement,
    action?: () => void;
  }) => void;

  alert: ({ title, message, action }: {
    message: string | React.ReactElement,
    title?: string | React.ReactElement,
    action?: () => void;
  }) => void;
}

interface State {
  open: boolean;
  type?: "alert" | "confirm";
  title?: string | React.ReactElement;
  message?: string | React.ReactElement;
  action?: () => void;
}

const context = createContext<Value>({} as any);
export default context;
export function Provider(props: { children: ReactNode }) {
  const { universalUI } = useStore();

  const closeDialog = () => {
    if (universalUI.info.action) {
      universalUI.info.action();
    }
    universalUI.setUIInfo({
      open: false,
      type: undefined,
      title: undefined,
      message: undefined,
      action: undefined,
    });
  };
  const DialogUI = observer(() => {
    return (
      universalUI.info.open &&
      <Dialog
        fullWidth
        maxWidth={"lg"}
        open={universalUI.info.open}
        onClose={() => closeDialog()}>
        <DialogTitle id="alert-dialog-title">{universalUI.info.title || "알림"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {universalUI.info.message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {universalUI.info.type === "confirm" && <>
            <Button onClick={closeDialog} color="primary">확인</Button>
            <Button onClick={closeDialog} color="primary">취소</Button>
          </>}
          {universalUI.info.type === "alert" && <>
            <Button onClick={closeDialog} color="primary">확인</Button>
          </>}
        </DialogActions>
      </Dialog>
    )
  })


  return <context.Provider
    value={{
      confirm: ({ title, message, action }) => {
        universalUI.setUIInfo({
          open: true,
          type: "confirm",
          title,
          message,
          action,
        });
      },
      alert: ({ title, message, action }) => {
        universalUI.setUIInfo({
          open: true,
          type: "alert",
          title,
          message,
          action,
        });
      },
    }}>
    {props.children}
    {<DialogUI />}
  </context.Provider >;
}
export const Consumer = context.Consumer;
