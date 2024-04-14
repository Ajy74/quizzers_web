import React from "react";
import '../css/about.css';
const team1 = require("../assets/team/ajay.jpg");

const AboutUs = () => {
    return (
        <>
            <div className="about-us-container">
                <div className="content">
                    <h1>About Quizzers</h1>
                    <p>Welcome to Quizzers, the ultimate destination for quiz enthusiasts! Our mission is to provide a fun and engaging platform where users can test their knowledge, challenge themselves, and learn new things.</p>
                    <p>Quizzers was founded by a passionate team of developers who believe in the power of education and entertainment. We are dedicated to creating an app that not only entertains but also inspires curiosity and learning.</p>
                    <p>With a wide range of quiz categories, practice quizzes, and exciting contests, Quizzers offers something for everyone. Join our community today and embark on a journey of knowledge and fun!</p>
                </div>
                <div className="team">
                    <h2>Meet the Team</h2>
                    <div className="team-member">
                        <img src={team1} alt="Team Member 1" />
                        <h3>Ajay Mourya</h3>
                        <p>Founder & CEO</p>
                    </div>
                    <div className="team-member">
                        <img src={team1} alt="Team Member 2" />
                        <h3>Ajay Mourya</h3>
                        <p>Founder & CEO</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutUs ;