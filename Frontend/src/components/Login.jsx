import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, InputGroup, Alert } from 'react-bootstrap';
import axiosInstance from '../axiosConfig.js'

const Login = () => {
  //Use states
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [displayMessage, setDisplayMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('success');

  // Navigation hook
  const navigate = useNavigate(); 

  useEffect(() => {
    console.log(localStorage.getItem('isLoggedIn'))
    // Checks if user is logged in and sends to profile page
    if(localStorage.getItem('isLoggedIn') === 'true')
    {
      navigate("/Profile");
    }
  },[]);

  
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      // Cookies
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
      // Authenticate user
      if (response.data.status === 'success') {
        axiosInstance.get('login-api/checkAuth').then(res => {
          console.log('CSRF Token Set, Authenticated:', res.data);
        });
        localStorage.setItem("isLoggedIn", true);
        window.location.href = '/';
      }
    } catch (error) {
      setDisplayMessage('Incorrect username or password. Please try again.');
      console.error('Error sending data to Django:', error);
    }
  };
  
  return (
    <form onSubmit = {handleSubmit}>
      <div class="p-5 bg-light mb-5" style={{borderRadius: "20px", boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.25)", minWidth:"500px", minHeight:"500px"}}>
        {/* Header */}
        <h1>Sign in</h1>
        {/* Input forms  */}
        <div class="d-flex flex-column align-items-start">
          {/* Username */}
          <Form.Label>Enter Username</Form.Label>
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
          {/* Password */}
          <Form.Label>Enter Password</Form.Label>
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
          {/* Buttons */}
          <Button variant="link" onClick={() => navigate("/Changepassword")}> Forgot password? </Button>
          {displayMessage && (
            <Alert className='mt-3' variant='danger'>
              {displayMessage}
            </Alert>
          )}    
          <button class="custom-btn mt-4" type="submit">Submit</button>
          <Button variant="link" onClick={() => navigate("/Signup")}> Don't have an account? </Button>
        </div>        
      </div>
    </form>
  );
};

export default Login;