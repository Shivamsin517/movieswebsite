import React, { useEffect, useState } from 'react';
import Film from './Film';
import mypost from "../src/data.json";
import Nav from './Nav';
const Home = () => {
  const [posts, setPosts] = useState([]);
   //let mypost=[]
  const API_URL ='https://api.tvmaze.com/search/shows?q=all';
  
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
  
  
  return (
    <div className="container">
      <Nav/>
        <div className="row">
          <br/>
          <br/>
          <h2>Popular Movies</h2>
        
          {mypost && mypost.map(res => (
            <div className="col col-lg-3 mt-3 m-2" key={res.show.id}>
            
              <Film
                showName={res.show.name}
                id={res.show.id}
                img={res.show.image?.medium}
                rating={res.show.rating?.average}
              />
            </div>
          ))
            
          }
        </div>
    </div>
  );
};

export default Home;
