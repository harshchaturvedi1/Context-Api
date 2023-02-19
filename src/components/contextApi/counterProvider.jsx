import { createContext, useState } from "react";

export const CounterContext = createContext()

export const CounterContextProvider = ({ children }) => {

  const [count,setCounter] = useState(0)

  const increment = ()=>setCounter(count + 1)
  const decrement = ()=>setCounter(count - 1)

  const value={count,increment,decrement}

  return <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
}