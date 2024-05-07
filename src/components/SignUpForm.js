import React from 'react';

const SignUpForm = () => {
  return (
    <div className="container">
      <div className="left-partition">
        <h1>CREATE ACCOUNT</h1>
        <br />
        <input type="name" className="form-input" placeholder="Name" />
        <br />
        <input type="email" className="form-input" placeholder="Email" />
        <br />
        <input type="password" className="form-input" placeholder="Password" />
        <br />
        <input type="confirm-password" className="form-input" placeholder="Confirm - Password" />
        <br />
        <button className="signup-button">SIGN UP</button>
        <br />
        Or
        <h3>Sign Up using</h3>
      </div>
      <div className="right-partition">
        <h1 className="h11">WELCOME BACK!!!</h1>
        <form className="signin-form">
          <h2>Let's dive into another round of <br/> learning and discovery...</h2>
          <br />
        </form>
        <button className="signin-button">SIGN IN</button>
      </div>
    </div>
  );
}

export default SignUpForm;
