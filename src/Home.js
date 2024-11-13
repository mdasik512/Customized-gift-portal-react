import React from 'react';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import ProductCategories from './Components/Product';
import FeaturedProducts from './Components/Customize';


const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProductCategories />
      <FeaturedProducts />
    </div>
  );
};

export default HomePage;
