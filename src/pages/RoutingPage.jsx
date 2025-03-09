import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Navbar from '../components/client/NavBar';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import CartPage from './CartPage';
import RestaurantMenuPage from './RestaurantMenuPage';
const RoutingPage = () => {
  return (
   <Router>
    <div>
        <Navbar />
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/restaurantmenu" element={<RestaurantMenuPage />} />
        </Routes>
    </div>
   </Router>
  )
}

export default RoutingPage
