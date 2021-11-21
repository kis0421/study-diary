import React, { useEffect } from "react"
import { checkIsRegisterdSiteId } from "../utils/graphqlBuilder"


const Main = () => {
  
  useEffect(() => {

  }, [])

  const check = async () => {
    const isRegisterdSiteId = await checkIsRegisterdSiteId("kimminkyud");
    console.log(isRegisterdSiteId);
  }
  return (
    <section style={{ position: "fixed", width: "100%", height: "100%" }}>
      <div>
        <button onClick={async () => await check()}>체크</button>
      </div>
    </section>
  )
}

export default Main;