import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, InputGroup, Button } from 'react-bootstrap';
import axios from 'axios';
import axiosInstance from '../axiosConfig.js'

const Signup = () => {
  // Use states
  const [username, setUsername] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [displayMessage, setDisplayMessage] = useState('');

  // Navigation hook
  const navigate = useNavigate(); 


  const handleEmailChange = (event) => {
    setEmailAddress(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send the input data to the Django backend
      const response = await axiosInstance.post('login-api/createAccount', {
        data: {username: username, emailAddress: emailAddress, password: password, confirmPassword: confirmPassword},
      });
      setDisplayMessage('Account created successfully!')
      console.log('Response from Django:', response.data);
      navigate("/Login");
      window.location.reload();
    } catch (error) {
      setDisplayMessage('Something went wrong.')
      console.error('Error sending data to Django:', error);
    }
  };

  return (
    <form onSubmit = {handleSubmit}>
        <div class="p-5 bg-light mb-5" style={{borderRadius: "20px", boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.25)", minWidth:"500px"}}>
          {/* Header */}
          <h1>Sign up</h1>
          {/* Input forms */}
          <div class="text-left">
            {/* Username */}
            <Form.Label htmlFor="basic-url">Enter Username</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                type = "text"
                value = {username}
                onChange = {handleUsernameChange}
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon2"
              />
            </InputGroup>
            {/* Email */}
            <p>Enter Email Address</p>
            <InputGroup className="mb-3">
              <Form.Control
                type = "text"
                value = {emailAddress}
                onChange = {handleEmailChange}
                placeholder="Email Address"
                aria-label="Email Address"
                aria-describedby="basic-addon2"
              />
            </InputGroup>
            {/* Password */}
            <p>Enter Password</p>
            <InputGroup className="mb-3">
              <Form.Control
                type = "password"
                value = {password}
                onChange = {handlePasswordChange}
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon2"
              />
            </InputGroup>
            {/* Confirm password */}
            <p>Confirm Password</p>
            <InputGroup className="mb-3">
              <Form.Control
                type = "password"
                value = {confirmPassword}
                onChange = {handleConfirmPasswordChange}
                placeholder="Confirm Password"
                aria-label="Confirm Password"
                aria-describedby="basic-addon2"
              />
            </InputGroup>
            {/* Buttons */}
            <button class="custom-btn" type="submit">Create Account</button>
            <Button variant="link" onClick={() => navigate("/Login")}> Back to Login </Button>
          </div>
        </div>
        <div>{displayMessage}</div>
    </form>
  );
};

export default Signup;