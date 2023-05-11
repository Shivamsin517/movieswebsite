import React from 'react'
import { Link } from 'react-router-dom'


const Film = ({showName,id,img,rating}) => {
 // console.log(props.movieData[0].show.name)
console.log(rating)
console.log(id)
  return (
    
    <div key={id}>
       
       <div class="card" style={{width: "18rem"}}>
       <img src={img}  class="card-img-top" alt="..."></img>     

      <div class="card-body">
        <h5 class="card-title"> {showName}</h5>
         <p>Rating {rating}</p>    
         <br/>
         <br/>
         <Link type="button"  to={`/summary/${id}`}
         class="btn btn-primary">View summary</Link> 
         
      </div>
    </div>
    </div>
  )
}

export default Film