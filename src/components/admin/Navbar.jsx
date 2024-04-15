import React, { useState } from 'react';
import profileImage from '../../assets/team/ajay.jpg'; 
// import notificationIcon from '../../assets/icon/notif.png'; 
import '../../css/admin/navbar.css';

const NavBar = () => {
    
    return (
        <nav className="navbar">
            <div className="logo-container">
                <span className="logo-text">Quizzers</span>
            </div>
            <div className="user-profile">
                <img src={profileImage} alt="Profile" className="profile-image" />
                {/* <img src={notificationIcon} alt="Notifications" className="notification-icon" /> */}
            </div>
        </nav>
    );
};

export default NavBar;
