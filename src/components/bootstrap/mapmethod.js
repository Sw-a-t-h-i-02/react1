
import mmm  from "./layout"






const MapMethod=()=>{

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
        {profiles.map((details)=><profile-details L={details}/>)}
        </>
    )
}
export default MapMethod