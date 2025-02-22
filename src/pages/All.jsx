import React from 'react'
import Jumbotron from '../components/Jumbotron'
import RestaurantsList from '../components/RestaurantsList';
import Footer from '../components/Footer';

const FirstPage = () => {
  return (
    <div>
      <Jumbotron />
      <RestaurantsList />
      <Footer />
    </div>
  )
}

export default FirstPage;
