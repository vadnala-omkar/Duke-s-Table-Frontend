import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/NavBar';
import Jumbotron from '../components/Jumbotron';
import RestaurantsList from '../components/RestaurantsList';
import RegistrationPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import Footer from '../components/Footer';
import VendorAddFirm from '../components/vendor/VendorAddFirm';
import VendorAddProduct from '../components/vendor/VendorAddProduct';
import VendorRegister from '../components/vendor/VendorRegister';
import VendorLogin from '../components/vendor/VendorLogin';
import VendorAllProducts from '../components/vendor/VendorAllProducts';
import VendorNavBar from '../components/vendor/VendorNavBar';
import VendorSlidBar from '../components/vendor/VendorSlidBar';
import VendorDashboardPage from './VendorDashboardPage';
import FirstPage from  '../pages/All'
const HomePage = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<FirstPage />} /> 
           <Route path='/restaurants' element={<RestaurantsList />} /> 
          <Route path='/register' element={<RegistrationPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/footer' element={<Footer />} />
          <Route path='/vendor/add-firm' element={<VendorAddFirm />} />
          <Route path='/vendor/add-product' element={<VendorAddProduct />} />
          <Route path='/vendor/register' element={<VendorRegister />} />
          <Route path='/vendor/login' element={<VendorLogin />} />
          <Route path='/vendor/products' element={<VendorAllProducts />} />
          <Route path='/vendor/navbar' element={<VendorNavBar />} />
          <Route path='/vendor/sidebar' element={<VendorSlidBar />} />
          <Route path='/vendor/dashboard' element={<VendorDashboardPage />}/>
        </Routes>
      </div>
    </Router>
  );
};

export default HomePage;
