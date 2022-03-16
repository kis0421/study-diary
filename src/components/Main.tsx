import React, { useEffect } from "react"
import { getSiteInfo } from "../utils/graphqlBuilder"
import { TextField, InputAdornment } from "@mui/material"
import KeywordInputField from "./KeywordInputField"
import { useSwipeable } from 'react-swipeable';

const Main = () => {

  const check = async (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const isRegisterdSiteId = await getSiteInfo(e.target.value);
    // console.log(isRegisterdSiteId);
  }

  return (
    <section style={{ position: "fixed", width: "100%", height: "100%", }}>
      <TextField
        onChange={check}
        InputProps={{
          endAdornment: <InputAdornment position="start">kg</InputAdornment>,
        }}
      />
    </section>
  )
}

export default Main;