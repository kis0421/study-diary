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
  type: "text" | "password"
  helperText?: string
  InputProps?: (status: CreateSiteInterface["form"]["siteIdCheckStatus"]) => {
    endAdornment: JSX.Element;
  }
}
const textFields: TextFiledsInterface[] = [
  {
    name: "siteName",
    label: "다이어리 이름",
    type: "text"
  },
  {
    name: "siteId",
    label: "아이디",
    type: "text",
    helperText: "다이어리(사이트) 아이디를 입력해주세요.",
    InputProps: (status) => ({
      endAdornment: < InputAdornment position="start" > {
        status === "done"
          ? <CheckIcon style={{ color: "green" }} />
          : status === "sending"
            ? <CircularProgress size={22} />
            : status === "error"
              ? <ErrorOutlineIcon color="primary" />
              : ""}
      </InputAdornment >,
    }),
  },
  {
    name: "sitePassword",
    label: "비밀번호",
    type: "password"
  },
  {
    name: "sitePasswordConfirm",
    label: "비밀번호 확인",
    type: "password"
  },
];


const Main = () => {
  const { siteInfoForm } = useStore();
  const checkSiteId = useCallback(debounce(async () => {
    if (siteInfoForm.form["siteId"].trim()) {
      siteInfoForm.handleChange("siteIdCheckStatus", "sending");
      const isRegisterdSiteId = await getSiteInfo(siteInfoForm.form["siteId"]);
      siteInfoForm.handleChange("siteIdCheckStatus", isRegisterdSiteId.length ? "error" : "done");
    } else {
      siteInfoForm.handleChange("siteIdCheckStatus", "wait");
    }
  }, 1000), []);

  return (
    <section style={{ position: "fixed", width: "100%", height: "100%", }}>
      <h1 style={{ textAlign: "center", margin: "1.5em 0" }}>다이어리 만들기</h1>

      <article style={{ textAlign: "center" }}>
        {textFields.map((field) => {
          const fieldName = field.name;
          return <TextField
            key={field.label}
            name={field.name}
            label={field.label}
            helperText={field.helperText}
            type={field.type}
            InputProps={field.InputProps && field.InputProps(siteInfoForm.form["siteIdCheckStatus"])}
            value={siteInfoForm.form[fieldName]}
            onChange={(e) => {
              siteInfoForm.handleChange(e.target.name, e.target.value)
              if (e.target.name === "siteId") {
                checkSiteId();
              }
            }}
            style={{ width: "80%", marginBottom: !field.helperText ? "20px" : 0 }} />
        })}

        <Button
          variant="contained"
          style={{ width: "80%", height: "48px" }}
          onClick={() => console.log("dd")}>생성</Button>

      </article>
    </section>
  )
}

export default observer(Main);