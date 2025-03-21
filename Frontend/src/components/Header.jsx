import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Image, Form, InputGroup } from 'react-bootstrap';
import mepic from '../assets/me.png';
import pietubelogo from '../assets/pietubelogo.png';
import { Filter, EmojiSunglasses } from 'react-bootstrap-icons';

const Header = () => {
  const [LoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log("test");
    const loggedInStatus = localStorage.getItem('isLoggedIn') === 'false';
    console.log(loggedInStatus);
    setIsLoggedIn(loggedInStatus);
  },[]);

    return (
      <Navbar bg="light" data-bs-theme="light" className='d-flex w-100 shadow mb-5 px-5 justify-content-between'>
        <Navbar.Brand>
          <Link to="/PieTube" className='flex-fill' >
              <img src={pietubelogo} className='mr-3' style={{maxHeight: "40px"}}/> 
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Nav className='d-flex text-nowrap flex-fill flex-grow-1'>
              <Link to="/" className='flex-fill' style={{color:'#000000', fontSize:'1.5rem'}}> Home </Link>
              <Link to="/Profile" className='flex-fill' style={{color:'#000000', fontSize:'1.5rem'}}> Profile </Link>
              <Link to="/Login" className='flex-fill' style={{color:'#000000', fontSize:'1.5rem'}}> Login </Link>					
					</Nav>
          <InputGroup className="ml-5 w-25 flex-fill">
            <Form.Control
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon2"
              style={{backgroundColor:'#E1E1E1', borderRadius:'10px', border:'none', height:'50px', maxWidth:'1000px'}}
            />
            <button className="mx-3" style={{border:"none", backgroundColor:"transparent"}}>
              <Filter width="40" height="40"></Filter>
            </button>
          </InputGroup>

          {/* Chooses whether to have the sign up button or the profile pic if user is logged in */}
          {LoggedIn ? (
            <Link to="/Signup">
            <button className='rounded-pill custom-btn px-3 d-flex align-items-center'>
              <EmojiSunglasses width="20" height="30" className='mr-2'></EmojiSunglasses>
              Sign Up
            </button>
          </Link> 
          ) : (
            <div className='mx-5 rounded-circle 'style={{ minWidth:'80px', height:'80px', overflow:'hidden'}}>
            <Link to="/Profile" >
                <Image src={mepic} style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
            </Link>
          </div>
          )}
      </Navbar>
    );
  };
  
  export default Header;