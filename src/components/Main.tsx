import React, { useEffect } from "react"
import useStore from "../useStore";
import { getSiteInfo } from "../utils/graphqlBuilder"
import { TextField, InputAdornment, Button } from "@mui/material"


const Main = () => {
  const { siteInfoForm } = useStore();
  console.log(Button === Button)
  const check = async (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const isRegisterdSiteId = await getSiteInfo(e.target.value);
  }

  const textFields = [
    { label: "다이어리 이름", type: "text" },
    {
      label: "아이디", helperText: "다이어리(사이트) 아이디를 입력해주세요.", type: "text",
      InputProps: {
        endAdornment: <InputAdornment position="start">kg</InputAdornment>,
      },
    },
    { label: "비밀번호", type: "password" },
    { label: "비밀번호 확인", type: "password" },
  ]

  return (
    <section style={{ position: "fixed", width: "100%", height: "100%", }}>
      <h1 style={{ textAlign: "center", margin: "1.5em 0" }}>다이어리 만들기</h1>

      <article style={{ textAlign: "center" }}>
        {textFields.map((field) => <TextField
          key={field.label}
          label={field.label}
          helperText={field.helperText}
          type={field.type}
          InputProps={field.InputProps}
          style={{ width: "80%", marginBottom: "20px" }} />)}

        <Button
          variant="contained"
          style={{ width: "80%", height: "48px" }}
          onClick={() => console.log("dd")}>생성</Button>

      </article>
    </section>
  )
}

export default Main;