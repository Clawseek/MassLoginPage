// src/components/LoginForm.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthService from '../services/AuthService';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const token = await AuthService.login(username, password);
      login(token);
      navigate('/home');
    } catch (error) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="text-center mb-4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Maruti_Suzuki_logo.svg/1200px-Maruti_Suzuki_logo.svg.png" alt="Maruti Suzuki" style={{ width: '150px' }} />
        </div>
        <h3 className="text-center mb-4">Log In</h3>
        <form onSubmit={handleLogin}>
          <div className="form-group mb-3">
            <label htmlFor="username">User name *</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password">Password *</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          <button type="submit" className="btn btn-primary w-100">LOGIN</button>
        </form>
        <div className="text-center mt-3">
          <small>The privacy policy can be viewed at <a href="#" className="text-decoration-none">[link]</a></small>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
