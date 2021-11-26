import React from "react";
import { TextField, Rating, Switch, FormControlLabel } from "@mui/material";


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

    <TextField
      label="태그"
      style={{ width: "100%", marginBottom: "12px" }}
      defaultValue="개발,GC,메모리"
    />
    <div style={{ textAlign: "right" }}>
      <FormControlLabel control={<Switch />} label="공개" />
    </div>

    <Rating
      size="large"
      style={{ float: "right" }}
      defaultValue={2.5}
      precision={0.5} />
  </div>)
}

export default Write;