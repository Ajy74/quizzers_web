import React from 'react';
import '../css/bottomNav.css';
import { NavLink } from 'react-router-dom';

const BottomNav = () => {
  return (
    <nav className="bottom-nav">
      <span><NavLink exact className="bottom-menu"  to="/privacy" >Privacy</NavLink></span>
      <span className="separator">|</span>
      <span><NavLink exact className="bottom-menu" to="/terms-condition" >Terms & Conditions</NavLink></span> 
    </nav>
  );
};

export default BottomNav;