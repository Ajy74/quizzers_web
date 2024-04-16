import React from "react";
import '../../../css/admin/menu/dashboardMenu.css';
import factsIcon from  '../../../assets/icon/idea.png';
import userIcon from  '../../../assets/icon/team.png';
import activeUserIcon from  '../../../assets/icon/active_user.png';
import liveIcon from  '../../../assets/icon/live_quiz.png';
import upcomingIcon from  '../../../assets/icon/upcoming_quiz.png';
import currentAffairIcon from  '../../../assets/icon/current_affair.png';
import quizIcon from  '../../../assets/icon/quiz.png';
import riddleIcon from  '../../../assets/icon/riddle.png';
import bannerIcon from  '../../../assets/icon/banner.png';
import transactionIcon from  '../../../assets/icon/transaction.png';

const DashboardMenu = () =>{
    // Sample data for services/features
    const menuItems = [
        { title: "Total Users", count: "1000", image: userIcon, link: "" },
        { title: "Active Users", count: "0", image: activeUserIcon, link: "" },
        { title: "Live Quiz", count: "5", image:liveIcon, link: "" },
        { title: "Live Contest", count: "5", image:liveIcon, link: "" },
        { title: "Upcoming Quiz", count: "0", image:upcomingIcon, link: "" },
        { title: "Current Affairs", count: "Pending", image:currentAffairIcon, link: "" },
        { title: "Daily Quiz", count: "Scheduled", image:quizIcon, link: "" },
        { title: "Daily Facts", count: "Pending", image:factsIcon, link: "" },
        { title: "Riddles", count: "Pending", image:riddleIcon, link: "" },
        { title: "Banners", count: "0", image: bannerIcon, link: "" },
        { title: "Today's Transaction", count: "0", image: transactionIcon, link: "" },
    ];

    const DashboardMenuItem = ({ title, count, image, link }) => {
        return (
            <a href="#" className="dashboard-menu-item">
                <div className="dashboard-menu-content">
                    <h3 className="title">{title}</h3>
                    <span className="count">{count}</span>
                </div>
                <div className="corner"></div>
                <img src={image} alt={title} className="content-icon" />
            </a>
        );
    }
    

    return (
        <>
            <div className="dashboard-menu-container">
                <div className="dashboard-menu-items">
                    {menuItems.map((menuItem, index) => (
                        <DashboardMenuItem
                            key={index}
                            title={menuItem.title}
                            count={menuItem.count}
                            image={menuItem.image}
                            link={menuItem.link}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default DashboardMenu;