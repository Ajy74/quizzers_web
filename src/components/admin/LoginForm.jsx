import React, { useState } from 'react';
import { useHistory, useNavigate } from 'react-router-dom';

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
    <form onSubmit={handleLogin}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter Username"
      />
      <input
        type=" Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
