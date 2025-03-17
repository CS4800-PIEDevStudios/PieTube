import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, InputGroup } from 'react-bootstrap';

const Login = () => {
  return (
    <div>
      <div class="p-5 bg-light" style={{borderRadius: "20px", boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.25)", minWidth:"500px", minHeight:"500px"}}>
        <h1>Sign in</h1>
        <div class="text-left">
          <Form.Label htmlFor="basic-url">Enter Username</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon2"
            />
          </InputGroup>
          <p>Enter Password</p>
          <InputGroup >
            <Form.Control
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon2"
              type='password'
            />
          </InputGroup>
          <Link to="/Changepassword">
                <Button variant="link"> Forgor password? </Button>
          </Link>
          <button class="custom-btn mt-4" type="submit">Submit</button>
          <Link to="/Signup">
                <Button variant="link"> Don't have an account? </Button>
          </Link>
        </div>        
      </div>
    </div>
  );
};

export default Login;