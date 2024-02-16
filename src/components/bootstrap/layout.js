import Details from "./profile-details"









const BootstrapLayout =()=>{
    const profiles=[{

    name:"swathi",
    age:22,
    course:"front-end  developer"
    },

{
    name:"varshu",
    age:23,
    course:"full stack  developer"
    },

{
    name:"krishnaveni",
    age:22,
    course:"front-end  developer"
    },
]


    return(
        <>
        
  
<div className="container mt-5">
  <div className="row">
    <div className="col-sm-4">
      
      <Details  k={profiles[0]}/>
    </div> 
    

    <div className="col-sm-4">
     
      <Details  k={profiles[1]} />
    </div>
    <div className="col-sm-4">
      
      <Details   k={profiles[2]} />
    </div>
  </div>
</div>
          </>
    )
}
export default BootstrapLayout