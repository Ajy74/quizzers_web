import React from 'react';
import profileImage from '../../assets/team/ajay.jpg'; 
import '../../css/admin/navbar.css';

const NavBar = () => {
    const handleLogout = () => {
        // Clear the admin token from localStorage
        localStorage.removeItem('adminToken');
        // Refresh the page
        window.location.reload();
    };

    return (
        <nav className="navbar">
            <div className="logo-container">
                <span className="logo-text">Quizzers</span>
            </div>
            <div className="user-profile">
                <img src={profileImage} alt="Profile" className="profile-image" />
                <span className="logout-text" onClick={handleLogout}>Logout</span>
            </div>
        </nav>
    );
};

export default NavBar;
