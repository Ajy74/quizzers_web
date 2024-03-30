import React from 'react';
import Carousel from './Carausel';
import NavBar from './Navbar';
import BottomNav from './BottomNav';
import AboutUs from './AboutUs';
import Support from './Support';
import Privacy from './Privacy';
import TermsAndCondition from './TermsAndCondition';
import '../index.css';
import { useLocation } from 'react-router-dom';


const Landing = ()=>{

    const Location = useLocation();
    console.log(Location);

    const DownLoadSection = () =>{
        return (
            <>
                <div className="download-container">
                    <p className="download-text">Download Quizzers Mobile Application</p>
                    <div className="button-container">
                    <button className="app-button android">Android App</button>
                    <button className="app-button ios">IOS App</button>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <NavBar />
            {Location.pathname === '/'? <Carousel /> : null}
            {Location.pathname === '/'? <DownLoadSection /> : null}
            {Location.pathname === '/'? <BottomNav /> : null}

            {Location.pathname === '/about'? <AboutUs /> : null}
            {Location.pathname === '/support'? <Support /> : null}
            {Location.pathname === '/privacy'? <Privacy /> : null}
            {Location.pathname === '/terms-condition'? <TermsAndCondition /> : null}
        </>
    );
}

export default Landing;