
import React, { useState } from 'react';
import Logo from "../../assets/logo.png";
import './login.css'; 


const Login = ({ onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmit = () => {
    // Handle submission of phone number, you can add your logic here
    console.log('Phone number submitted:', phoneNumber);
  };

  return (
    <div className="log-cont">
      <div className="login-content">
        <img src={Logo} alt="Logo" className="login-logo" />
        <p>Enter your phone number to sign in</p>
        <div className="mob">
          <p>Mobile Number</p>
        </div>
        <div className="phone-input">
  <input
    type="tel" // Change the input type to "tel"
    value={phoneNumber}
    onChange={handlePhoneNumberChange}
    placeholder="+91"
  />
</div>
        <button className="submit-button" onClick={handleSubmit}>Submit</button>
        <p className="signup-link">Don't have an account? <a href="/signup" target="_blank" rel="noopener noreferrer">Sign up</a></p>
       
      </div>
    </div>
  );
};

export default Login;
