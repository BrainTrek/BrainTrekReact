import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate passwords
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const formData = new FormData(e.target);
      const msg = {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password')
      };

      const response = await axios.post('http://localhost:5000/signup', msg);

      if (response.status === 201) {
        // Redirect to login page or perform other actions
        console.log('User registered successfully');
        // You can use react-router-dom to navigate to the login page
        // import { useNavigate } from 'react-router-dom';
        // const navigate = useNavigate();
        navigate('/login');
      } else {
        setError(response.data.error);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to register user');
    }
  };

  return (
    <div className="container">
      <div className="left-partition">
        <h1>CREATE ACCOUNT</h1>
        <br />
        <form onSubmit={handleSubmit} className='signup-form'>
          <input
            type="text"
            className="form-input"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br />
          <input
            type="email"
            className="form-input"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <input
            type="password"
            className="form-input"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <input
            type="password"
            className="form-input"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <br />
          {error && <div className="text-red-500 mb-2">{error}</div>}
          <button className="signup-button" type='submit'>SIGN UP</button>
          <br />
        </form>
        Or
        <h3>Sign Up using</h3>
      </div>
      <div className="right-partition">
        <h1 className="h11">WELCOME BACK!!!</h1>
        <form className="signin-form">
          <h2>Let's dive into another round of <br /> learning and discovery...</h2>
          <br />
          {/* You can add a Sign In button here */}
          { <button className="signin-button">SIGN IN</button> }
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;