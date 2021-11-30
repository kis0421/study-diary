import React from "react";
import { TextField, Rating, Switch, FormControlLabel, Button } from "@mui/material";
import { useParams } from "react-router-dom"
import useStore from "../useStore";

const Write = () => {
  const params = useParams();
  const { writeDiary } = useStore();

  return (<div style={{ padding: "16px" }}>
    <TextField
      label="링크"
      name="link"
      style={{ width: "100%", marginBottom: "12px" }}
      defaultValue="http://naver.com"
    />

    <TextField
      label="내용"
      name="contents"
      style={{ width: "100%", marginBottom: "12px" }}
      multiline
      rows={8}
      defaultValue="내용을 작성해주세요" />
    {
      // TODO: 태그는 text가 아니라 iconButton으로 변경해야함
    }
    <TextField
      label="태그"
      style={{ width: "100%", marginBottom: "12px" }}
      defaultValue="개발,GC,메모리"
    />
    <div style={{ textAlign: "right" }}>
      <FormControlLabel control={<Switch />} label="공개" />
    </div>

    <div style={{ overflowY: "auto" }}>
      <Rating
        size="large"
        style={{ float: "right" }}
        defaultValue={2.5}
        precision={0.5} />
    </div>
    <div style={{ textAlign: "center", marginTop: "12px" }}>
      <Button variant="contained">작성</Button>
    </div>
  </div>)
}

export default Write;
