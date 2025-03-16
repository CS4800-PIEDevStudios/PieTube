import React, {useState} from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import axios from 'axios';

const Signup = () => {
  const host = "http://127.0.0.1:8000";
  const [username, setUsername] = useState('');
  const [emailAddress, setEmailAddress] = useState('');

  const handleEmailChange = (event) => {
    setEmailAddress(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send the input data to the Django backend
      const response = await axios.post(host + '/login-api/createAccount', {
        data: {username: username, emailAddress: emailAddress},
      });

      console.log('Response from Django:', response.data);
    } catch (error) {
      console.error('Error sending data to Django:', error);
    }
  };

  return (
    <form onSubmit = {handleSubmit}>
        <div class="p-5 bg-light" style={{borderRadius: "20px", boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.25)", minWidth:"500px"}}>
        <h1>Sign up</h1>
        <div class="text-left">
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
          <p>Enter Password</p>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon2"
            />
          </InputGroup>
          <p>Confirm Password</p>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Confirm Password"
              aria-label="Confirm Password"
              aria-describedby="basic-addon2"
            />
          </InputGroup>
          <button class="custom-btn" type="submit">Submit</button>
        </div>        
      </div>
    </form>
  );
};

export default Signup;