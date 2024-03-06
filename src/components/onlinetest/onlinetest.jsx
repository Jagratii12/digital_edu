import React from 'react';
import './onlinetest.css';
import arrow from '../../assets/arrow.png';

const Onlinetest = () => {
  return (
    <div className="container-test">
        <div className='box-container'>
        <div className="content-test">
      <h3>Create your first online test,<br/> quiz or exam</h3>
        <p>Explore all of DigitalEduPark assessment software features and<br/> streamline your online assessments. It's on the house.<br/> You're welcome.</p>
        <button className="signup-button-test">Sign up for free <img src={arrow} alt="Arrow" className="arrow-icon" /></button>
      </div>
      </div>
 
    </div>
    
  );
}

export default Onlinetest;