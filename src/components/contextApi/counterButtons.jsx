import { useContext } from "react"
import { CounterContext } from "./counterProvider"

export const CounterButtons = () => {

    const { increment, decrement } = useContext(CounterContext)

    return (
        <>
            <button onClick={increment}>Increase</button>
            <button onClick={decrement}>Decrease</button>
        </>
    )
}