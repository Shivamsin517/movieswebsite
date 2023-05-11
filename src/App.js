import React from 'react';
import {  Routes, Route, BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

//import BookingForm from './BookingForm';
import Home from './Home';
import MoviesSummary from './MoviesSummary'

function App() {
  return (
    <BrowserRouter>
   
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/summary/:id"  exact Component={MoviesSummary} />
    
      </Routes>
    </BrowserRouter>

  );
}

export default App;
