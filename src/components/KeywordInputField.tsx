
import React, { useState } from "react";


const KeywordInputField = (props: {
  setter: (keywords: string[]) => void
}) => {
  const { setter } = props;
  const [keywords, setKeywords] = useState(new Set() as Set<string>);
  const [keyword, setKeyword] = useState("");

  const removeKeyword = (removeTarget: string) => {
    setKeywords(new Set(Array.from(keywords).filter((i) => i !== removeTarget)))
  }

  return <div id="keywordInput" >
    {Array.from(keywords).map((currentKeyword, index) => <div
      key={index}
      onClick={() => removeKeyword(currentKeyword)}>{currentKeyword} {"✖️"}</div>)}

    <input
      type="text"
      placeholder="키워드를 입력하세요"
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