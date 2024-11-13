import React from 'react';
import './Home.css'; // Importing the common CSS file

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Customize your Gifts</div>
      <nav className="nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#shop">Shop</a></li>
          <li><a href="#shop">Orders</a></li>
          <li><a href="#shop">Shop</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search gifts..." />
        <button>Search</button>
      </div>
    </header>
  );
};

export default Header;
