import React from "react";
import { TextField, Rating } from "@mui/material";


const Write = () => {
  return (<div style={{ padding: "16px" }}>
    <TextField
      label="링크"
      style={{ width: "100%", marginBottom: "12px" }}
      defaultValue="http://naver.com"
    />

    <TextField
      label="내용"
      style={{ width: "100%", marginBottom: "12px" }}
      multiline
      rows={8}
      defaultValue="내용을 작성해주세요" />

    <Rating
      size="large"
      style={{ float: "right" }}
      defaultValue={2.5}
      precision={0.5} />
  </div>)
}

export default Write;