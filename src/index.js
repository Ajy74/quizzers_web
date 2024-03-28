import React from 'react';
import ReactDOM from 'react-dom';

// import splashLogo from './assets/icon/splash_logo.png';
import Carousel from './components/carausel';
import NavBar from './components/navbar';
import BottomNav from './components/bottomNav';
import './index.css';

// import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <div class="main_div">
      <NavBar />
      <Carousel />

      {/* //~download section */}
      <div class="download-container">
        <p class="download-text">Download Quizzers Mobile Application</p>
        <div class="button-container">
          <button class="app-button android">Android App</button>
          <button class="app-button ios">IOS App</button>
        </div>
      </div>

     <BottomNav />
    </div>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals();
