import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Page1 = () => {
  return (
    <div>
        <Link to="/PieTube">
          <Button variant="primary"> Home </Button>
      </Link>
      <div>
        <h1>Sign in</h1>
        <div >
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
        </div>        
      </div>
    </div>
  );

};

export default Page1;