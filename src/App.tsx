import React from "react";
import { useObserver } from "mobx-react"
import useStore from "./useStore"

export default () => {
	const { diary } = useStore();

	return useObserver(() => <>
		<div>{diary.count}</div>
		<button onClick={() => diary.addCount()}>ㅎㅎ</button>
	</>)

}	