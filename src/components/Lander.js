import React from 'react';
// import './styles.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const Lander = () => {
  return (
    <div>
      <header>
        <div>
          <span className="highlight"><b>Brain</b></span><span className="highlight-yellow"><b>Trek</b></span>
        </div>
        <nav className="about">
          <span>How it works?</span>
          <span>Features</span>
          <span>About Us</span>
        </nav>
      </header>
      <div className="content">
        <h1><span className="highlighted">Explore, Learn, and <br /><br />Have Fun with our<br /><br />General Knowledge Quizzes</span></h1>
        <p className="small">| We help you prepare for exams and quizzes.</p>
       <Link to="/SignInForm"> <button className="btn">Start Solving</button></Link>
      </div>
      <div className="image">
        <img className='imagein' src="https://st3.depositphotos.com/16959514/32686/v/600/depositphotos_326860374-stock-illustration-people-ask-question-confused-person.jpg" alt="main-img" />
      </div>
      <img className='design' src="https://i.pinimg.com/736x/01/b6/d2/01b6d278bdc2fb92452736ee6db4f89e.jpg" alt="design"/>
      <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>BrainTrek is a dedicated platform committed to providing you with high-quality educational resources and interactive quizzes. Our goal is to empower learners like you to excel in your learning journey by offering engaging content that enhances your knowledge and skills. Whether you're preparing for exams, expanding your general knowledge, or exploring new subjects, BrainTrek is here to support and guide you every step of the way.
</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/quizzes">Quizzes</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: contact@braintrek.com</p>
          <p>Phone: +1-123-456-7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 BrainTrek. All rights reserved.</p>
      </div>
    </footer>
    </div>
  );
}

export default Lander;
