import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaLock } from "react-icons/fa"; 
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';
import { loginAdmin } from '../services/loginService';
import  Constants  from '../utilities/constants';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const { adminloggedIn } = Constants.getTokens();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    try {

      if (!email) {
        alert('Email is required');
        return; 
      }

      if (!password) {
        alert('Password is required');
        return; 
      }
  
      const response = await loginAdmin({ email, password });
      console.log(response);

      if (response && response.data) {
        const { token } = response.data;
        localStorage.setItem('adminToken', token);
        navigate('/AdminPanel');
        window.location.reload();

      } else {
        alert('Email or Password is incorrect.'); 
      }

    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  if(adminloggedIn){
    return <Navigate to={"/Work"} />
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        {/* <form onSubmit={handleSubmit} className="login-form"> */}
          <div className="form-group">
            <label htmlFor="email">
              <FaEnvelope className="form-icon" /> Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <FaLock className="form-icon" /> Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="submit-button" onClick={(e) => handleLogin(e)}>
            Login
          </button>
          <div className="additional-links">
            <a href="#forgot-password">Forgot Password?</a>
            <a href="#signup">Sign Up</a>
          </div>
        {/* </form> */}
      </div>
    </div>
  );
};

export default LoginPage;
