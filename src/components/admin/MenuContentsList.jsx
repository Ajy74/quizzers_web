
import React from "react";
import DashboardMenu from "./menu/DashboardMenu";
import QuizMenu from "./menu/QuizzesMenu";
import ContestMenu from "./menu/ContestMenu";
import SubjectCategoryMenu from "./menu/SubjectCategoryMenu";
import EngageCategoryMenu from "./menu/EngageCategoryMenu";
import TransactionMenu from "./menu/TransactionMenu";
import BannerMenu from "./menu/BannerMenu";
import UsersMenu from "./menu/UsersMenu";
import NotificationMenu from "./menu/NotificationMenu";


const MenuContents = ({ activeMenu }) => {
    
    const renderContent = () => {
        switch (activeMenu) {
            case 'Dashboard':
                return <DashboardMenu />;
            case 'Quiz':
                return <QuizMenu />;
            case 'Contests':
                return <ContestMenu />;
            case 'Subject Category':
                return <SubjectCategoryMenu />;
            case 'Engage Category':
                return <EngageCategoryMenu />;
            case 'Transactions':
                return <TransactionMenu />;
            case 'Banner':
                return <BannerMenu />;
            case 'Users':
                return <UsersMenu />;
            case 'Notification':
                return <NotificationMenu />;
            default:
                return null;
        }
    };

    return renderContent();
}

export default MenuContents;
