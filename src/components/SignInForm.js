import React from 'react';
import SocialIcon from './SocialIcon';

const SignInForm = () => {
  return (
    <div className="right-partition">
      <h1 className="signin-heading">Sign In</h1>
      <form className="signin-form">
        <input type="email" className="form-input" placeholder="Email" />
        <br />
        <input type="password" className="form-input" placeholder="Password" />
        <br />
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