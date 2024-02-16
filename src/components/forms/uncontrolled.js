import { useRef } from "react"








const UnControlled=()=>{


const emailRef=useRef()
const passwordRef=useRef()

const handlesubmit=(event)=>{

event.preventDefault()

console.log(emailRef.current.value)
console.log(passwordRef.current.value)




if(passwordRef.current.value.length<3){

    alert("please enetr more than 3 characters")
}
else{

    const userInfo={
        username:emailRef.current.value,
        password:passwordRef.current.value
    }


    

    hitServer(userInfo)
}
}

const hitServer=(data)=>{

    fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
})
      .then(res => res.json())
      .then(res=>console.log(res))
      .catch(err=>console.log(err))
}

    return(
<>
<div className="container mt-3">
  <h2>Stacked form</h2>
  <form onSubmit={handlesubmit}>
    <div className="mb-3 mt-3">
      <label >Email:</label>
      <input type="text" className="form-control" id="email" placeholder="Enter email" name="email" ref={emailRef}/>
    </div>
    <div className="mb-3">
      <label>Password:</label>
      <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" ref={passwordRef}/>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
</div>



</>
    )
}
export default UnControlled