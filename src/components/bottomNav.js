import React from 'react';
import '../css/bottomNav.css';

const BottomNav = () => {
  return (
    <nav className="bottom-nav">
      <span>Privacy</span>
      <span className="separator">|</span>
      <span>Terms & Conditions</span>
    </nav>
  );
};

export default BottomNav;