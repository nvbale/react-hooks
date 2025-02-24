import {useCallback, useEffect, useState} from "react";
import {ShowIncrement} from "./ShowIncrement.jsx";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10)
  
  // const increment = () => {
  //   setCounter(counter + 1)
  // }
  
  const increment = useCallback(value => {
    setCounter(c => c + value)
  }, []);
  
  // useEffect(() => {
  //   increment()
  // }, [increment]);
  
  return (
    <>
      <h1>useCallback Hook: {counter}</h1>
      <hr/>
      <ShowIncrement increment={increment}/>
    </>
  )
}
