import React from "react";
import { useObserver } from "mobx-react"
import useStore from "./useStore"

export default () => {
	const { diary } = useStore();

	// return useObserver(() => <>
	// 	<div>{diary.count}</div>
	// 	<button onClick={() => diary.addCount()}>ㅎㅎ</button>
	// </>)
	return <div className="app">
		<section style={{ height: "2000px" }}>
			ddddd
		</section>
	</div>

}	