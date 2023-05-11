// ItemDetails.js
import React from 'react';
import Nav from './Nav';
import { useParams } from 'react-router';
import movie from "../src/data.json";

const MoviesSummary = () => {

  let { id } = useParams();

  /*useEffect(() => {
    fetch(API_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(json => {
        setPosts(json);
        console.log(json)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  */
   
  let filterdMoviedetail =[]
   filterdMoviedetail = movie.filter(x => x.show.id == id)
  
  return (
    
    <div className="container">
        <Nav/>
      <h1>Movie Summary</h1>
      <p>Displaying details for item with ID: {filterdMoviedetail[0].show?.id} </p>
       
     
            <div class="col col-lg-6">
              <img src={filterdMoviedetail[0].show?.image?.medium} ></img>
            </div>
            <br/>
            
              <ul>
              <li>anguage : {filterdMoviedetail[0].show?.language} </li>
              <li> rating: {filterdMoviedetail[0].show?.rating.average} </li>
              <li> weight: {filterdMoviedetail[0].show?.weight} </li>
             
              </ul>
              

            
            <br/>
            <p>
           
            <div className="content" dangerouslySetInnerHTML={{__html: filterdMoviedetail[0].show?.summary}}></div>
            </p>
            <button type="button" class="btn btn-primary">Book ticket</button>
           
  
    </div>
  );
};

export default MoviesSummary;
