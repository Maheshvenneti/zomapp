import React from "react";
import Home from './components/pages/home/Home';
import ListingApi from './components/pages/Listing/ListingApi';
import Details from './components/pages/Details/RestDetails';
import PlaceOrder from "./components/pages/booking/PlaceOrder";

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import './App.css';

function App() {
  return (

    <Router>
      
    
    <div>

      
      

       <Routes>

       <Route path='/' element={<Home/>} />
       <Route path='/listing/:mealId' element={<ListingApi/>} />
       <Route path='/details' element={<Details/>} />
       <Route path='/placeOrder/:restName' element={<PlaceOrder/>} />
       

       
       
       
       </Routes>
       

       
      
    </div>

    </Router>
  );
}

export default App;
