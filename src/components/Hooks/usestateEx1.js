import { useState } from "react"











const UseStateExample1=()=>{

const [currentvalue,UpdaterFunction]=useState(0)

 const handleIncrement=()=>{
    UpdaterFunction(currentvalue+1)
}

    return(
        <>
        <h1>UseState Example {currentvalue}</h1>
        <button onClick={handleIncrement}>Incrementation</button>
        </>
    )
}
export default UseStateExample1