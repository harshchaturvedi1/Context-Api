import { useContext } from "react"
import { CounterContext } from "./counterProvider"

export const Counter=()=>{

  const {count} = useContext(CounterContext)

  return (
    <h1>Counter - {count}</h1>
  )
}