import React from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Signup = () => {
  return (
    <div>
      <div class="p-5 bg-light" style={{borderRadius: "20px", boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.25)", minWidth:"500px"}}>
        <h1>Sign up</h1>
        <div class="text-left">
          <Form.Label htmlFor="basic-url">Enter Username</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon2"
            />
          </InputGroup>
          <p>Enter Email Address</p>
          <InputGroup className="mb-3">
            <Form.Control
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
    </div>
  );
};

export default Signup;