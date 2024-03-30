import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './Landing';
import AdminLogin from './admin/Login';

const App = () =>{
    return (
        <>
            <Routes>
                <Route exact path="/" element={ <Landing /> }/>
                <Route exact path="/about" element={ <Landing /> }/>
                <Route exact path="/support" element={ <Landing /> }/>
                <Route exact path="/privacy" element={ <Landing /> }/>
                <Route exact path="/terms-condition" element={ <Landing /> }/>

                <Route exact path="/admin" element={ <AdminLogin /> }/>
            </Routes>
        </>
    );
}

export default App;