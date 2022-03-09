import React, { useEffect } from "react"
import { getSiteInfo } from "../utils/graphqlBuilder"

const KeywordInputField = (props: { setter: any }) => {
  const [keywords, setKeywords] = React.useState([]);
  const [keyword, setKeyword] = React.useState("");

  return <div
    style={{ display: "flex", flexWrap: "wrap" }}>
    <input
      type="text"
      placeholder="키워드를 입력하세요"
      style={{
        fontSize: "18px",
        color: "#555",
        height: "18px",
        border: "none",
        outline: "none"
      }}
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          setKeywords([...keywords, keyword])
          setKeyword("")
        }
      }}
      onChange={(e) => {
        setKeyword(e.target.value)
      }}
      value={keyword}
    />
  </div>
}


const Main = () => {

  useEffect(() => {

  }, [])

  const check = async () => {
    const isRegisterdSiteId = await getSiteInfo("kimminkyud");
    console.log(isRegisterdSiteId);
  }
  return (
    <section style={{ position: "fixed", width: "100%", height: "100%" }}>
      <div>
        <button onClick={async () => await check()}>체크</button>
      </div>
      <KeywordInputField setter="ss" />
    </section>
  )
}

export default Main;