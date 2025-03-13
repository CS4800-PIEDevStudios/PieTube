import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import pietubelogo from '../assets/pietubelogo.png';
import Signup from './Signup';
import Login from './Login';

const Header = () => {
    return (
      <Navbar bg="light" data-bs-theme="light" className='w-100 shadow-lg mb-5'>
        <Navbar.Brand>
          <Link to="/PieTube" >
              <img src={pietubelogo} className='mr-3' style={{maxHeight: "30px"}}/> 
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Nav className=''>
						<Nav.Link> <Link to="/PieTube"> Home </Link> </Nav.Link>
            <Nav.Link> <Link to="/Login"> Trending </Link> </Nav.Link>
            <Nav.Link> <Link to="/Signup"> Watch List </Link> </Nav.Link>
					</Nav>
      </Navbar>
    );
  };
  
  export default Header;