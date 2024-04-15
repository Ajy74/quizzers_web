import React, { useState } from "react";
import MenuContents from "./MenuContentsList";
import '../../css/admin/DashboardContent.css';

const DashboardContent = () => {
    const [activeMenu, setActiveMenu] = useState('Dashboard'); 

    // Function to handle menu click
    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
    };

    return (
        <>
            <div className="admin-dashboard-container">
                <div className="admin-dashboard-sidebar">
                    <ul>
                        <li className={activeMenu === 'Dashboard' ? 'active' : ''} onClick={() => handleMenuClick('Dashboard')}>Dashboard</li>
                        <li className={activeMenu === 'Quizzes' ? 'active' : ''} onClick={() => handleMenuClick('Quiz')}>Quiz</li>
                        <li className={activeMenu === 'Contests' ? 'active' : ''} onClick={() => handleMenuClick('Contests')}>Contests</li>
                        <li className={activeMenu === 'Subject Category' ? 'active' : ''} onClick={() => handleMenuClick('Subject Category')}>Subject Category</li>
                        <li className={activeMenu === 'Engage Category' ? 'active' : ''} onClick={() => handleMenuClick('Engage Category')}>Engage Category</li>
                        <li className={activeMenu === 'Transactions' ? 'active' : ''} onClick={() => handleMenuClick('Transactions')}>Transactions</li>
                        <li className={activeMenu === 'Banner' ? 'active' : ''} onClick={() => handleMenuClick('Banner')}>Banner</li>
                        <li className={activeMenu === 'Users' ? 'active' : ''} onClick={() => handleMenuClick('Users')}>Users</li>
                        <li className={activeMenu === 'Notification' ? 'active' : ''} onClick={() => handleMenuClick('Notification')}>Notification</li>
                    </ul>
                </div>
                <div className="admin-dashboard-content">
                    <MenuContents activeMenu={activeMenu} />
                </div>
            </div>
        </>
    );
}

export default DashboardContent;
