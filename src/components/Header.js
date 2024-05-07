import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="left-partition">
      <h1 className="heading">HELLO FRIEND !!</h1>
      <h3>WE HELP YOU TO UNLEASH <br></br>YOUR KNOWLEDGE...</h3>
      <Link to="/SignUpForm"><button className="signup-button">SIGN UP</button></Link>
    </div>
  );
}

export default Header;