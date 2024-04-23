import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../admin/Navbar";
import DashboardContent from "./DashboardContent";
import BASE_URL from './server/endpoint';

const AdminDashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const verifyAdmin = async () => {
            try {
                const token = localStorage.getItem('adminToken');
                if (!token) {
                    // If token is not available, redirect to login page
                    navigate('/admin');
                    return;
                }

                const response = await fetch(`${BASE_URL}api/verify-token`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-auth-token': token,
                    },
                });

                if (!response.ok) {
                    // If verification fails, redirect to login page
                    navigate('/admin');
                }
            } catch (error) {
                // console.error('Error verifying admin:', error);
                // If an error occurs, redirect to login page
                navigate('/admin');
            }
        };

        verifyAdmin();
    }, [navigate]);

    return (
        <>
            <NavBar />
            <DashboardContent />
        </>
    );
}

export default AdminDashboard;
