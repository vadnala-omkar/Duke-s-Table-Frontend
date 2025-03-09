import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from '../components/client/NavBar'
import Jumbotron from '../components/client/Jumbotron'
import Blog from '../components/client/Blog'
import Footor from '../components/client/Footor'
import About from '../components/client/About'
import RestaurantsList from '../components/client/RestaurantsList'
const LandingPage = () => {
  return (
    <div>
        <Jumbotron />
        <RestaurantsList />
        <Blog />
        <About />
        <Footor />
    </div>
  )
}

export default LandingPage
