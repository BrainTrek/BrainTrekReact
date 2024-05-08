import React, { useState } from 'react';
import SocialIcon from './SocialIcon';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignInForm = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  function handleLogin(e) {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const data = {
      email: formdata.get("email"),
      password: formdata.get("password")
    };

    

    try {
      axios.post("http://localhost:5000/login", data)
        .then(response => {
          console.log(response.data);
          if (response.status === 200) {
            navigate('/Main');
          } else {
            setErrorMessage(response.data.message);
          }
        })
        .catch(error => {
          console.error('Error:', error);
          setErrorMessage('An error occurred. Please try again later.');
        });
    } catch (err) {
      console.log(err.message);
      setErrorMessage('An error occurred. Please try again later.');
    }
  }
  return (
    <div className="right-partition">
      <h1 className="signin-heading">Sign In</h1>
      <form className="signin-form" onSubmit={handleLogin}>
        <input type="email" className="form-input" placeholder="Email" name='email' required/>
        <br />
        <input type="password" className="form-input" placeholder="Password" name='password' required/>
        <br />
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button type="submit" className="signin-button">SIGN IN</button>
        <br />
        <h4>OR</h4>
        <h4 className='signuse'>Sign In with your...</h4>
        <div className="social-icons">
          <SocialIcon iconClass="fa-brands fa-google" text="Google" />
          <SocialIcon iconClass="fa-solid fa-envelope" text="Gmail" />
          <SocialIcon iconClass="fab fa-windows" text="Microsoft" />
        </div>
      </form>
    </div>
  );
}

export default SignInForm;