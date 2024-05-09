import React, { useState } from 'react';
import SocialIcon from './SocialIcon';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignInForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });

      if (response.status === 200) {
        // Extract the JWT token from the response
        const token = response.data.token;

        // Store the token securely (e.g., in local storage or cookies)
        // For simplicity, we'll just log the token here
        console.log('JWT Token:', token);

        // Redirect to the protected route or perform other actions
        navigate('/Main');
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="right-partition">
      <h1 className="signin-heading">Sign In</h1>
      <form className="signin-form" onSubmit={handleLogin}>
        <input
          type="email"
          className="form-input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          className="form-input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button type="submit" className="signin-button">SIGN IN</button>
        <br />
        <h4>OR</h4>
        <h4 className="signuse">Sign In with your...</h4>
        <div className="social-icons">
          <SocialIcon iconClass="fa-brands fa-google" text="Google" />
          <SocialIcon iconClass="fa-solid fa-envelope" text="Gmail" />
          <SocialIcon iconClass="fab fa-windows" text="Microsoft" />
        </div>
      </form>
    </div>
  );
};

export default SignInForm;