import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import './assets/style.css';
import './assets/header.css';
import './assets/SignInForm.css';
import './assets/SignUpForm.css';

function App() {
  return (
   
      <Routes>
        <Route path="/" element={
        <div className="container">
        <Header />
        <SignInForm />
        </div>
        } />
        <Route path="/SignUpForm" element={<SignUpForm />} />
      </Routes>
    


    
  );
}

export default App;
