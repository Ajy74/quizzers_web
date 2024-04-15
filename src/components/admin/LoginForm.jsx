import React, { useState } from 'react';
import { useHistory, useNavigate } from 'react-router-dom';
import '../../css/admin/login.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    navigate('/admin/dashboard', { replace: true });
    // const response = await fetch('YOUR_BACKEND_LOGIN_ENDPOINT', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ username, password }),
    // });

    // if (response.ok) {
    //   // Store authentication token or session identifier
    //   localStorage.setItem('adminToken', 'YOUR_AUTH_TOKEN_OR_SESSION_ID');
    //   // Redirect to admin dashboard
    //   history.push('/admin/dashboard');
    // } else {
    //   // Handle login failure (display error message, etc.)
    //   console.error('Login failed');
    // }
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
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
          className="input-field"
        />
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
