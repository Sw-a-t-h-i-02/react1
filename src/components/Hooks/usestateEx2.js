import { useState } from "react"












const UsExample2=()=>{

    const [currentValue,upadteFunction]=useState(20)

    const handleTimer=()=>{

        setInterval(() => {


            if(currentValue===0){

                alert("time up")
            }
            else{
                upadteFunction(currentValue=>currentValue-1)
            }
        },1000)
            
        }
    
            
    
    return(
        <>
        <h1>Timer{currentValue}</h1>
        <button onClick={handleTimer}>timer starts</button>
        </>
    )
}
export default UsExample2