
import React, { CSSProperties, useState } from "react";

const keywordInputStyle = {
  wrap: {
    display: "flex",
    flexWrap: "wrap"
  } as CSSProperties,
  input: {
    fontSize: "15px",
    color: "rgb(85, 85, 85)",
    height: "18px",
    border: "none",
    outline: "none",
    paddingTop: "5px"
  } as CSSProperties,
  keyword: {
    border: "1px solid black",
    borderRadius: "12px",
    padding: "4px 10px",
    fontSize: "15px",
    display: "inline-flex",
    cursor: "pointer",
    marginRight: "4px"
  } as CSSProperties
}


const KeywordInputField = (props: {
  setter: (keywords: string[]) => void
}) => {
  const { setter } = props;
  const [keywords, setKeywords] = useState(new Set() as Set<string>);
  const [keyword, setKeyword] = useState("");

  const removeKeyword = (removeTarget: string) => {
    setKeywords(new Set(Array.from(keywords).filter((i) => i !== removeTarget)))
  }

  return <div
    id="keywordInput"
    style={{ ...keywordInputStyle.wrap }}>

    {Array.from(keywords).map((currentKeyword, index) => <div
      style={{ ...keywordInputStyle.keyword }}
      key={index}
      onClick={() => removeKeyword(currentKeyword)}>{currentKeyword} {"✖️"}</div>)}

    <input
      type="text"
      placeholder="키워드를 입력하세요"
      style={{ ...keywordInputStyle.input }}
      onKeyPress={(e) => {
        if (e.key === "Enter" && keyword.trim() !== "") {
          setter([...Array.from(keywords), keyword])
          setKeywords(new Set(keywords.add(keyword)))
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