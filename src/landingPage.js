// src/LandingPage.js
import React from 'react';
import { useSelector } from 'react-redux';
import './LandingPage.css';

const LandingPage = () => {
  const exampleState = useSelector((state) => state.example);

  return (
    <div className="landing-page">
      <nav className="navbar">
        <ul className="menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="content">
        <h1>Welcome to Our Landing Page</h1>
        <p>{exampleState}</p>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default LandingPage;
