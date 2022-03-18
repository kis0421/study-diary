import React, { useEffect, useCallback } from "react"
import { observer } from "mobx-react-lite";
import { TextField, InputAdornment, Button, CircularProgress } from "@mui/material"
import {
  Check as CheckIcon,
  ErrorOutline as ErrorOutlineIcon
} from "@mui/icons-material";
import { debounce } from "lodash";

import useStore from "../useStore";
import { getSiteInfo } from "../utils/graphqlBuilder"
import { CreateSiteInterface } from "../stores/siteInfoForm"

interface TextFiledsInterface {
  name: keyof CreateSiteInterface["form"];
  label: string;
  type: "text" | "password";
  helperText?: string
  InputProps?: {
    endAdornment: JSX.Element;
  }
  error?: boolean
}
const getTextFields: (form: CreateSiteInterface["form"]) => TextFiledsInterface[] = (form) => {
  return [
    {
      name: "siteName",
      label: "다이어리 이름",
      type: "text"
    },
    {
      name: "siteId",
      label: "아이디",
      type: "text",
      error: form["siteIdCheckStatus"] === "error",
      helperText: "다이어리(사이트) 아이디를 입력해주세요.",
      InputProps: {
        endAdornment: < InputAdornment position="start" > {
          form["siteIdCheckStatus"] === "done"
            ? <CheckIcon style={{ color: "green" }} />
            : form["siteIdCheckStatus"] === "sending"
              ? <CircularProgress size={22} />
              : form["siteIdCheckStatus"] === "error"
                ? <ErrorOutlineIcon color="primary" />
                : ""}
        </InputAdornment >,
      }
    },
    {
      name: "sitePassword",
      label: "비밀번호",
      type: "password"
    },
    {
      name: "sitePasswordConfirm",
      label: "비밀번호 확인",
      type: "password",
      helperText: Boolean(form["sitePasswordConfirm"]) && (form["sitePassword"] !== form["sitePasswordConfirm"])
        && "비밀번호가 일치하지 않습니다.",
      error: Boolean(form["sitePasswordConfirm"]) && (form["sitePassword"] !== form["sitePasswordConfirm"])
    },
  ]
};


const Main = () => {
  const { siteInfoForm } = useStore();
  const checkSiteId = useCallback(debounce(async () => {
    if (siteInfoForm.form["siteId"].trim()) {
      const isRegisterdSiteId = await getSiteInfo(siteInfoForm.form["siteId"]);
      siteInfoForm.handleChange("siteIdCheckStatus", isRegisterdSiteId.length ? "error" : "done");
    } else {
      siteInfoForm.handleChange("siteIdCheckStatus", "wait");
    }
  }, 1000), []);

  return (
    <section className="mainWrap" style={{ position: "fixed", width: "100%", height: "100%", }}>
      <h1 style={{ textAlign: "center", margin: "1.5em 0" }}>다이어리 만들기</h1>

      <article style={{ textAlign: "center" }}>
        {getTextFields(siteInfoForm.form).map((field) => {
          const fieldName = field.name;
          return <TextField
            key={field.label}
            name={field.name}
            label={field.label}
            helperText={field.helperText}
            type={field.type}
            error={field.error}
            InputProps={field.InputProps}
            value={siteInfoForm.form[fieldName]}
            onChange={(e) => {
              siteInfoForm.handleChange(e.target.name, e.target.value)
              if (e.target.name === "siteId") {
                siteInfoForm.handleChange("siteIdCheckStatus", "sending");
                checkSiteId();
              }
            }}
            style={{ width: "80%", marginBottom: !field.helperText ? "20px" : 0 }} />
        })}

        <Button
          variant="contained"
          style={{ width: "80%", height: "48px" }}
          disabled={
            !siteInfoForm.form["siteId"].trim()
            || !siteInfoForm.form["siteName"].trim()
            || !siteInfoForm.form["sitePassword"].trim()
            || !siteInfoForm.form["sitePasswordConfirm"].trim()
            || siteInfoForm.form["sitePasswordConfirm"] !== siteInfoForm.form["sitePassword"]
            || siteInfoForm.form["siteIdCheckStatus"] !== "done"
          }
          onClick={() => {
            console.log("dd")
          }}>생성</Button>

      </article>
    </section >
  )
}

export default observer(Main);