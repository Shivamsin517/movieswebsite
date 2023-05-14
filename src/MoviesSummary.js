// ItemDetails.js
import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import { useParams } from 'react-router';
//import movie from "../src/data.json";

const MoviesSummary = () => {
  const [movie, setPosts] = useState([]);
  let { id } = useParams();
  const API_URL ='https://api.tvmaze.com/search/shows?q=all';
  
  useEffect(() => {
    fetch(API_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(json => {
        setPosts(json.filter(x => x.show.id == id));
        console.log(json)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  

  
  return (
    
    <div className="container">
        <Nav/>
      <h1>Movie Summary</h1>
      <p>Displaying details for item with ID: {movie[0]?.show?.id} </p>
       
     
            <div class="col col-lg-6">
              <img src={movie[0]?.show?.image?.medium} ></img>
            </div>
            <br/>
            
              <ul>
              <li>anguage : {movie[0]?.show?.language} </li>
              <li> rating: {movie[0]?.show?.rating.average} </li>
              <li> weight: {movie[0]?.show?.weight} </li>
             
              </ul>
              

            
           
            <p>
           
            <div className="content" dangerouslySetInnerHTML={{__html: movie[0]?.show?.summary}}></div>
            </p>
            <button type="button" class="btn btn-primary">Book ticket</button>
           
  
    </div>
  );
};

export default MoviesSummary;
