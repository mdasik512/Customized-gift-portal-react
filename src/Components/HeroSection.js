import React from 'react';
import './Home.css'; // Importing the common CSS file

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Personalized Gifts for Every Occasion</h1>
        <p>Make every moment special with our customized gifts.</p>
        <button onClick={()=>{window.location.href="/product"}}>Shop Now</button>
      </div>
    </section>
  );
};

export default HeroSection;
