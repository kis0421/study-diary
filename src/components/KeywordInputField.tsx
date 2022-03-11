
import React, { useEffect } from "react";

const KeywordInputField = (props: { setter: any }) => {
  const [keywords, setKeywords] = React.useState(["키워드"]);
  const [keyword, setKeyword] = React.useState("");

  return <div
    id="keywordInput">
    {keywords.map((currentKeyword) => <div>{currentKeyword} {"✖️"}</div>)}
    <input
      type="text"
      placeholder="키워드를 입력하세요"
      onKeyPress={(e) => {
        if (e.key === "Enter" && keyword.trim() !== "") {
          setKeywords([...keywords, keyword])
          setKeyword("")
        }
      }}
      onChange={(e) => {
        setKeyword(e.target.value)
      }}
      value={keyword}
    />
  </div >
}

export default KeywordInputField