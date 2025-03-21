import React, {useState, useEffect} from 'react';
import { Link, redirect } from 'react-router-dom';
import { Button, Form, InputGroup } from 'react-bootstrap';
import axiosInstance from '../axiosConfig.js'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [displayMessage, setDisplayMessage] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {

      await axiosInstance.get('login-api/checkAuth').then(res => {
        console.log('CSRF Token Set, Authenticated:', res.data);
        console.log('COOKIE', res);
      });
  
      // Now, send the login POST request
      const response = await axiosInstance.post('login-api/loginAccount', {
        withCredentials: true,
        username: username,
        password: password,
      });
  
      setDisplayMessage('Account Login Successful');
      console.log('Response from Django:', response.data);
  
      

      if (response.data.status === 'success') {
        axiosInstance.get('login-api/checkAuth').then(res => {
          console.log('CSRF Token Set, Authenticated:', res.data);
        });
        localStorage.setItem("isLoggedIn", true);
        window.location.href = '/PieTube/';
      }
    } catch (error) {
      setDisplayMessage('Something went wrong.');
      console.error('Error sending data to Django:', error);
    }
  };
  

  return (
    <form onSubmit = {handleSubmit}>
      <div>
        <div class="p-5 bg-light" style={{borderRadius: "20px", boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.25)", minWidth:"500px", minHeight:"500px"}}>
          <h1>Sign in</h1>
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
            <p>Enter Password</p>
            <InputGroup >
              <Form.Control
                type = "password"
                value = {password}
                onChange = {handlePasswordChange}
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon2"
              />
            </InputGroup>
            <Link to="/Changepassword">
                  <Button variant="link"> Forgot password? </Button>
            </Link>
            <button class="custom-btn mt-4" type="submit">Submit</button>
            
            <Link to="/Signup">
                  <Button variant="link"> Don't have an account? </Button>
            </Link>
          </div>        
        </div>
        <div>{displayMessage}</div>
      </div>
    </form>
  );
};

export default Login;