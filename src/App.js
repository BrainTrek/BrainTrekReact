import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import './assets/style.css';
import './assets/header.css';
import './assets/SignInForm.css';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/" element={<SignInForm />} />
          <Route path="/SignUpForm" element={<SignUpForm />} />
      </Routes>
      <SignInForm/>
    </div>
  );
}

export default App;
