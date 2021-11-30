import React from "react";
import { TextField, Rating, Switch, FormControlLabel, Button, InputAdornment, IconButton, cardClasses } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { useParams } from "react-router-dom"
import { observer } from "mobx-react-lite";
import useStore from "../useStore";

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
  const { writeDiary } = useStore();



  return (<div style={{ padding: "16px" }}>
    <TextField
      label="링크"
      name="link"
      style={{ width: "100%", marginBottom: "12px" }}
      value={writeDiary.writeForm["link"]}
      onChange={(e) => writeDiary.handleChange(e.target.name, e.target.value)} />

    <TextField
      label="내용"
      name="contents"
      style={{ width: "100%", marginBottom: "12px" }}
      multiline
      rows={8}
      value={writeDiary.writeForm["contents"]}
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
                <Button variant="outlined" style={{ marginRight: "4px" }}>{keyword}</Button>
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
  </div >)
}

export default observer(Write);
