import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, InputGroup } from 'react-bootstrap';

const Login = () => {
  const api = axios.create({
    baseURL: "https://23.20.205.143",  // Adjust for your backend URL
    withCredentials: true,  // Required to send cookies with requests
  });
  const host = "https://23.20.205.143";
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
      // Send the input data to the Django backend
      const response = await api.post(host + '/login-api/loginAccount', {
        username: username,
        password: password,
      });
      setDisplayMessage('Account Login Successful')
      console.log('Response from Django:', response.data);

      
      // const response2 = await axios.get(host + '/login-api/checkAuth');
      // console.log('User is authenticated:', response2.data.username);
      if (response.data.status === 'success') {
        window.location.href = '/PieTube/';  // Redirect to the homepage
      }
    } catch (error) {
      setDisplayMessage('Something went wrong.')
      console.error('Error sending data to Django:', error);
    }
    
    // api.get(host + '/login-api/checkAuth')
    //         .then(response => {
    //             console.log(response.data)
    //         })
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
                type = "text"
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