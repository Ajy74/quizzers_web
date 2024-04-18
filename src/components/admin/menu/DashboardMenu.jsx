import React, { useState, useEffect } from "react";
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
// import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

import axios from 'axios';
import { CircularProgress } from "@mui/material";

const DashboardMenu = () =>{
    const [loading, setLoading] = useState(true);
    const [menuItems, setMenuItems] = useState([]);

    // useEffect(() => {
    //     // Simulating an API call delay
    //     const timeout = setTimeout(() => {
    //         // Sample data for services/features
    //         const data = [
    //             { title: "Total Users", count: "1", image: userIcon, link: "" },
    //             { title: "Active Users", count: "0", image: activeUserIcon, link: "" },
    //             { title: "Live Quiz", count: "5", image:liveIcon, link: "" },
    //             { title: "Live Contest", count: "5", image:liveIcon, link: "" },
    //             { title: "Upcoming Quiz", count: "0", image:upcomingIcon, link: "" },
    //             { title: "Current Affairs", count: "Pending", image:currentAffairIcon, link: "" },
    //             { title: "Daily Quiz", count: "Scheduled", image:quizIcon, link: "" },
    //             { title: "Daily Facts", count: "Pending", image:factsIcon, link: "" },
    //             { title: "Riddles", count: "Pending", image:riddleIcon, link: "" },
    //             { title: "Banners", count: "0", image: bannerIcon, link: "" },
    //             { title: "Today's Transaction", count: "0", image: transactionIcon, link: "" },
    //         ];
    //         setMenuItems(data);
    //         setLoading(false);
    //     }, 2000); 

    //     return () => clearTimeout(timeout);
    // }, []); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const totalUsersResponse = await axios.get('https://quizzers-api.onrender.com/api/userCount');
                const totalUsers = totalUsersResponse.data.totalUsers;
                                
                const activeUsersResponse = await axios.get('https://quizzers-api.onrender.com/api/activeUserCount');
                const activeUsers = activeUsersResponse.data.activeUsers;

                const quizResponse = await axios.get('https://quizzers-api.onrender.com/api/quizCounts');
                const liveQuizCount = quizResponse.data.liveCount;
                const upcomingQuizCount = quizResponse.data.upcomingCount;

                const contestResponse = await axios.get('https://quizzers-api.onrender.com/api/liveContestCount');
                const liveContestCount = contestResponse.data.liveContestCount;

                const todayTransactionResponse = await axios.get('https://quizzers-api.onrender.com/api/totalTransactionToday');
                const todaysTransaction = todayTransactionResponse.data.totalAmount;
                
                

                setMenuItems([
                    { title: "Total Users", count: totalUsers, image: userIcon, link: "" },
                    { title: "Active Users", count: activeUsers, image: activeUserIcon, link: "" },
                    { title: "Live Quiz", count: liveQuizCount, image:liveIcon, link: "" },
                    { title: "Live Contest", count: liveContestCount, image:liveIcon, link: "" },
                    { title: "Upcoming Quiz", count: upcomingQuizCount, image:upcomingIcon, link: "" },
                    { title: "Current Affairs", count: "Pending", image:currentAffairIcon, link: "" },
                    { title: "Daily Quiz", count: "Pending", image:quizIcon, link: "" },
                    { title: "Daily Facts", count: "Pending", image:factsIcon, link: "" },
                    { title: "Riddles", count: "Pending", image:riddleIcon, link: "" },
                    { title: "Banners", count: "0", image: bannerIcon, link: "" },
                    { title: "Today's Transaction", count: `\u20B9 ${todaysTransaction}`, image: transactionIcon, link: "" },
                ]);
                
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

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
            {loading ? (
                <div className="loader-container">
                    <CircularProgress style={{ color: "#ff9472" }}/>
                </div>
            ) : (
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
            )}
        </>
    );
}

export default DashboardMenu;
