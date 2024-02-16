

import cardimage from "./download.jpeg"







const Details=(props)=>{


    return(
              
         <div class="container mt-3">
        <h2>Card Image</h2>
        <p>Image at the top (card-img-top):</p>
        <div class="card" style={{width:500}}>
          <img class="card-img-top" src={cardimage} alt="Card image" style={{width:400}}/>
          <div class="card-body">
            <h4 class="card-title">{props.k.name}</h4>
            <p class="card-text">{props.k.age}</p>
            <p class="card-text">{props.k.course}</p>
            <a href="#" class="btn btn-primary">See Profile</a>
          </div>
        </div>
        </div>
       
    )
}
export default Details