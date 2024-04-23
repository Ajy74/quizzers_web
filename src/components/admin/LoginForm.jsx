import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/admin/login.css';
import BASE_URL from './server/endpoint';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`${BASE_URL}api/admin-login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // Store authentication token or session identifier
        localStorage.setItem('adminToken', data.token);
        // Redirect to admin dashboard
        navigate('/admin/dashboard', { replace: true });
      } else {
        // Handle login failure (display error message, etc.)
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      console.error('Login failed:', error.message);
      // Display an alert for wrong credentials
      alert('Wrong username or password, Please try again !!');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2 className="login-title">Admin Login</h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter Username"
          className="input-field"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
          className="input-field"
          required
        />
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
