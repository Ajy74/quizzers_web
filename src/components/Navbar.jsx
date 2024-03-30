import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import splashLogo from '../assets/icon/splash_logo.png';
import '../css/navbar.css'; 
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const [showLinks, setShowLinks] = useState(false);
  
    const toggleLinks = () => {
      setShowLinks(!showLinks);
    };
  
    return (
      <nav className="navbar">
        <div className="logo-container">
          {/* <img src="" alt="Logo" className="logo" /> */}
          <span className="logo-text">Quizzers</span>
        </div>
        <div className={`links-container ${showLinks ? 'show' : ''}`}>
          <NavLink exact className={(navData) => navData.isActive ? 'nav-link-active' : 'nav-link'}  to="/about" >About Us</NavLink>
          <NavLink exact className={(navData) => navData.isActive ? 'nav-link-active' : 'nav-link'}  to="/support" >Support</NavLink>
        </div>
        <div className="hamburger-icon" onClick={toggleLinks}>
          <div className={`bar ${showLinks ? 'change' : ''}`}></div>
          <div className={`bar ${showLinks ? 'change' : ''}`}></div>
          <div className={`bar ${showLinks ? 'change' : ''}`}></div>
        </div>
      </nav>
    );
  };

  export default NavBar;