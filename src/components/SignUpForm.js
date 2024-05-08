import React, { useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUpForm = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const msg = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password')
    };
    console.log(msg)
    if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      try {
        axios.post("http://localhost:5000/", msg)
        .then(response => {
          console.log(response.data);
           navigate('/login');
        })
        .catch(error => {
          console.error('Error:', error);
        });

      } catch (error) {
        console.error('Error:', error);
      }
    }
  };
  return (
    <div className="container">
      <div className="left-partition">
        <h1>CREATE ACCOUNT</h1>
        <br />
        <form onSubmit={handleSubmit} className='signup-form'>
        <input type="name" className="form-input" placeholder="Name" name="name" required/>
        <br />
        <input type="email" className="form-input" placeholder="Email" name="email" required/>
        <br />
        <input type="password" className="form-input" placeholder="Password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} required/>
        <br />
        <input type="confirm-password" className="form-input" placeholder="Confirm - Password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} required/>
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
          <h2>Let's dive into another round of <br/> learning and discovery...</h2>
          <br />
        </form>
      <Link to="/Main"> <button className="signin-button">SIGN IN</button></Link>
      </div>
    </div>
  );
}

export default SignUpForm;
