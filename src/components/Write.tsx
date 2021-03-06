import React, { useContext } from "react";
import { TextField, Rating, Switch, FormControlLabel, Button, InputAdornment } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { useParams, useNavigate } from "react-router-dom"
import { observer } from "mobx-react-lite";

import StoreContext from "../context/StoreContext";
import UIContext from "../context/UIContext";

import { insertDiaryOne } from "../utils/graphqlBuilder"
const useStyles = makeStyles({
  focused: {
    "& legend": {
      visibility: "visible",
      color: "primary"
    }
  }
});

const Write = () => {
  const classes = useStyles();
  const params = useParams();
  const { writeDiary, siteInfo } = useContext(StoreContext);
  const { alert } = useContext(UIContext);
  const navigate = useNavigate();

  const submitDiary = async () => {
    // FIXME: 마지막 , 추가되는거 없애야함
    const keywordString = [...Array.from(writeDiary.writeForm.keywords), writeDiary.writeForm.keywordString].join(",");

    const resultIdx = await insertDiaryOne({
      title: writeDiary.writeForm.title,
      content: writeDiary.writeForm.content,
      link: writeDiary.writeForm.link,
      siteIdx: siteInfo.currentSiteInfo.idx,
      userId: 1,
      keywords: keywordString || null,
    })
    if (resultIdx) {
      alert({
        message: "작성 완료",
        action: () => navigate(`/${siteInfo.currentSiteInfo.siteId}/${resultIdx}`)
      })
    } else {
      alert({
        message: "작성에 실패했습니다."
      })
    }

  };

  return (<div style={{ padding: "16px" }}>
    <TextField
      label="제목"
      name="title"
      style={{ width: "100%", marginBottom: "12px" }}
      value={writeDiary.writeForm["title"]}
      onChange={(e) => writeDiary.handleChange(e.target.name, e.target.value)} />

    <TextField
      label="링크"
      name="link"
      style={{ width: "100%", marginBottom: "12px" }}
      value={writeDiary.writeForm["link"]}
      onChange={(e) => writeDiary.handleChange(e.target.name, e.target.value)} />

    <TextField
      label="내용"
      name="content"
      style={{ width: "100%", marginBottom: "12px" }}
      multiline
      rows={8}
      value={writeDiary.writeForm["content"]}
      onChange={(e) => writeDiary.handleChange(e.target.name, e.target.value)} />

    <TextField
      label="키워드"
      name="keywordString"
      style={{ width: "100%", marginBottom: "12px" }}
      multiline
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" >
            {Array.from(writeDiary.writeForm.keywords).map((keyword: string) => (
              <span key={keyword}>
                <Button
                  variant="outlined"
                  style={{ marginRight: "4px" }}
                  onClick={() => writeDiary.deleteKeyword(keyword)}>{keyword}</Button>
              </span>
            ))}
          </InputAdornment>
        )
      }}
      value={writeDiary.writeForm["keywordString"]}
      onKeyPress={(e) => {
        if (e.key === ",") {
          writeDiary.addKeyword(writeDiary.writeForm["keywordString"]);
          writeDiary.handleChange("keywordString", "");
        }
      }}
      onChange={(e) => e.target.value !== "," && writeDiary.handleChange(e.target.name, e.target.value)} />
    {/* TODO: DB에 관련 컬럼 추가부터 해야함
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
    */}
    <div style={{ textAlign: "center", marginTop: "12px" }}>
      <Button variant="contained" onClick={async () => await submitDiary()}>작성</Button>
    </div>
  </div >)
}

export default observer(Write);