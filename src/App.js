import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import Lander from './components/Lander';
import Main from './components/Main';
import './assets/style.css';
import './assets/header.css';
import './assets/SignInForm.css';
import './assets/SignUpForm.css';
import './assets/Lander.css';
import './assets/Main.css';

function App() {
  return (
   
      <Routes>
        <Route path="/" element={<Lander/>}/>
        <Route path="/SignInForm" element={
        <div className="container">
        <Header />
        <SignInForm />
        </div>
        } />
        <Route path="/SignUpForm" element={<SignUpForm />} />
        <Route path="/Main" element={<Main/>}/>
      </Routes>
  
     
  );
}

export default App;
