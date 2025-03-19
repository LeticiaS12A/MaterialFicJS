import { useState } from "react"
import './index.css'

export default function Count() {
    const [ count, setCount ] = useState(0)
    
    function HendleIncrement(){
        setCount(count + 10)
    }

    function resetCount(){
        setCount(0)
    }

    function HandleDecrement(){
        setCount(count - 1)
    }

    return (
        <div>
            <h1>Count:  {count}</h1>
            <button onClick={HendleIncrement}>+</button>
            <button onClick={resetCount}>reset</button>  
            <button onClick={HandleDecrement}>-</button>  
        </div>
    )
}