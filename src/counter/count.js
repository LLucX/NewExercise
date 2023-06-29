import { useState } from "react"
import Count from "./component"


const Counter = () => {

    const [num, setNum] = useState(0)

    const addNum = () => {
        setNum(prevNum => prevNum + 1)
    }

    const subtractNum = () => {
        setNum(prevNum => prevNum - 1)
    }

    return (
        <div className="container">
            <h3 className="minus" onClick={addNum}>+</h3>
            <h3 className="add" onClick={subtractNum}>-</h3>
            <Count cacca={num}/>
        </div>
    )
}


export default Counter