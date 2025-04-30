import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, InputGroup, Button, Alert } from 'react-bootstrap';
import { Eye, EyeSlash } from "react-bootstrap-icons";
import axiosInstance from '../axiosConfig.js'

const Signup = () => {
  // Use states
  const [username, setUsername] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [displayMessage, setDisplayMessage] = useState('');
  const [emailAvailable, setEmailAvailable] = useState(null);
  const [usernameAvailable, setUsernameAvailable] = useState(null);
  const [showPasswords, setShowPasswords] = useState({password: false, confirmPassword: false});
  const [errors, setErrors] = useState({username: '', email: '', password: '', confirmPassword: ''});

  // Navigation hook
  const navigate = useNavigate(); 

  // Toggle password visibility
  const togglePasswordVisibility = (field) => {
    setShowPasswords(prevState => ({
      ...prevState,
      [field]: !prevState[field]
    }));
  };

  // Check username availability
  useEffect(() => {
    const checkUsernameAvailability = async () => {
      if (username) {
        try {
          const response = await axiosInstance.get(`login-api/check-username?username=${username}`);
          setUsernameAvailable(response.data.available);
          setErrors(prev => ({...prev, username: response.data.available ? '' : 'Username is already taken'}));
        } catch (error) {
          console.error('Error checking username:', error);
          setUsernameAvailable(null);
        }
      } else {
        setUsernameAvailable(null);
        setErrors(prev => ({...prev, username: ''}));
      }
    };
  
    const timer = setTimeout(() => {
      if (username) checkUsernameAvailability();
    }, 500);
  
    return () => clearTimeout(timer);
  }, [username]);
  
  // Check email availability
  useEffect(() => {
    const checkEmailAvailability = async () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailAddress && emailRegex.test(emailAddress)) {
        try {
          const response = await axiosInstance.get(`login-api/check-email?email=${emailAddress}`);
          setEmailAvailable(response.data.available);
          setErrors(prev => ({...prev, email: response.data.available ? '' : 'Email is already registered'}));
        } catch (error) {
          console.error('Error checking email:', error);
          setEmailAvailable(null);
        }
      } else if (emailAddress) {
        setErrors(prev => ({...prev, email: 'Please enter a valid email address'}));
      } else {
        setEmailAvailable(null);
        setErrors(prev => ({...prev, email: ''}));
      }
    };

    const timer = setTimeout(() => {
      if (emailAddress) checkEmailAvailability();
    }, 500);

    return () => clearTimeout(timer);
  }, [emailAddress]);

  //Password Match
  useEffect(() => {
    if (password && confirmPassword && password !== confirmPassword) {
      setErrors(prev => ({...prev, confirmPassword: 'Passwords do not match'}));
    } else if (confirmPassword) {
      setErrors(prev => ({...prev, confirmPassword: ''}));
    }
  }, [password, confirmPassword]);

  const validatePassword = (pass) => {
    const requirements = [
      { test: pass.length >= 8, message: 'at least 8 characters' },
      { test: pass.length <= 20, message: 'no more than 20 characters' },
      { test: /[A-Z]/.test(pass), message: 'one uppercase letter' },
      { test: /[a-z]/.test(pass), message: 'one lowercase letter' },
      { test: /[0-9]/.test(pass), message: 'one number' },
      { test: /[!@#$%^&*]/.test(pass), message: 'one special character' },
    ];
    
    return requirements.filter(req => !req.test).map(req => req.message);
  };

  const handlePasswordChange = (event) => {
    const pass = event.target.value;
    setPassword(pass);
    
    const passwordErrors = validatePassword(pass);
    if (passwordErrors.length > 0) {
      setErrors(prev => ({
        ...prev, 
        password: `Password must contain: ${passwordErrors.join(', ')}`
      }));
    } else {
      setErrors(prev => ({...prev, password: ''}));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Check for empty fields
    const newErrors = {...errors};
    if (!username) newErrors.username = 'Username is required';
    if (!emailAddress) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';
    if (!confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
    
    setErrors(newErrors);
    
    // Check if there are any errors
    if (Object.values(newErrors).some(error => error) || 
        !emailAvailable || 
        !usernameAvailable || 
        password !== confirmPassword) {
      setDisplayMessage('Please fix the errors before submitting.');
      return;
    }

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

  //Required field asterisk
  const RequiredField = ({ children }) => (
    <>
      {children} <span className="text-danger">*</span>
    </>
  );

  return (
    <form onSubmit = {handleSubmit}>
        <div className="signup-container bg-light mb-5 p-5" style={{borderRadius: "20px", boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.25)", minWidth:"500px"}}>
          {/* Header */}
          <h1>Sign up</h1> 

          {displayMessage && (
          <Alert variant={displayMessage.includes('successfully') ? 'success' : 'danger'}>
            {displayMessage}
          </Alert>
        )}

          {/* Input forms */}
          <div className="d-flex flex-column align-items-start">
            {/* Username */}
            <Form.Label htmlFor="username">
              <RequiredField>Enter Username</RequiredField>
            </Form.Label>
            <InputGroup className="mb-3">
            <Form.Control
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              aria-label="Username"
              isInvalid={!!errors.username}
              className={usernameAvailable === true ? 'is-valid' : ''}
            />
            {usernameAvailable === true && (
              <InputGroup.Text className="bg-success text-white">
                ✓ Available
              </InputGroup.Text>
            )}
            {usernameAvailable === false && (
              <InputGroup.Text className="bg-danger text-white">
                ✗ Taken
              </InputGroup.Text>
            )}
            <Form.Control.Feedback type="invalid">
              {errors.username}
            </Form.Control.Feedback>
          </InputGroup>

            {/* Email */}
            <Form.Label htmlFor="email">
              <RequiredField>Enter Email Address</RequiredField>
            </Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                id="email"
                type="email"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                placeholder="Email Address"
                aria-label="Email Address"
                isInvalid={!!errors.email}
                className={emailAvailable === true ? 'is-valid' : ''}
              />
              {emailAvailable === true && (
                <InputGroup.Text className="bg-success text-white">
                  ✓ Available
                </InputGroup.Text>
              )}
              {emailAvailable === false && (
                <InputGroup.Text className="bg-danger text-white">
                  ✗ Taken
                </InputGroup.Text>
              )}
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
          </InputGroup>

           {/* Password */}
          <Form.Label htmlFor="password">
              <RequiredField>Password</RequiredField>
            </Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                id="password"
                type={showPasswords.password ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                placeholder="Password (8-20 chars, special char)"
                aria-label="Password"
                isInvalid={!!errors.password}
              />
              <InputGroup.Text 
                as="button"
                type="button"
                onClick={() => togglePasswordVisibility('password')}
                style={{ 
                  cursor: "pointer",
                  background: "transparent",
                  borderLeft: "none"
                }}
              >
                {showPasswords.password ? <EyeSlash size={20} /> : <Eye size={20} />}
              </InputGroup.Text>
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </InputGroup>

            {/* Confirm password */}
            <Form.Label htmlFor="confirmPassword">
              <RequiredField>Confirm Password</RequiredField>
            </Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                id="confirmPassword"
                type={showPasswords.confirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                aria-label="Confirm Password"
                isInvalid={!!errors.confirmPassword}
              />
              <InputGroup.Text 
                as="button"
                type="button"
                onClick={() => togglePasswordVisibility('confirmPassword')}
                style={{ 
                  cursor: "pointer",
                  background: "transparent",
                  borderLeft: "none"
                }}
              >
                {showPasswords.confirmPassword ? <EyeSlash size={20} /> : <Eye size={20} />}
              </InputGroup.Text>
              <Form.Control.Feedback type="invalid">
                {errors.confirmPassword}
              </Form.Control.Feedback>
            </InputGroup>

            {/* Buttons */}
            <button class="custom-btn" type="submit">Create Account</button>
            <Button variant="link" onClick={() => navigate("/Login")}> Back to Login </Button>
          </div>
        </div>
    </form>
  );
};

export default Signup;