import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import pietubelogo from '../assets/pietubelogo.png';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Header = () => {
    return (
      <Navbar bg="light" data-bs-theme="light" className='w-100 shadow-lg mb-5 p-4 justify-content-between'>
        <Navbar.Brand>
          <Link to="/PieTube" >
              <img src={pietubelogo} className='mr-3' style={{maxHeight: "40px"}}/> 
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Nav>
						<Nav.Link className='mx-5 text-nowrap text-decoration-none'> <Link to="/PieTube" style={{color:'#000000', fontSize:'1.5rem'}}> Home </Link> </Nav.Link>
            <Nav.Link className='mx-5 text-nowrap text-decoration-none'> <Link to="/Login" style={{color:'#000000', fontSize:'1.5rem'}}> Trending </Link> </Nav.Link>
            <Nav.Link className='mx-5 text-nowrap text-decoration-none'> <Link to="/Signup" style={{color:'#000000', fontSize:'1.5rem'}}> Watch List </Link> </Nav.Link>
					</Nav>
          <InputGroup className="ml-5 w-50">
            <Form.Control
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon2"
              style={{backgroundColor:'#E1E1E1', borderRadius:'10px'}}
            />
          </InputGroup>
          <div className='mx-5'>
            <Image className='rounded-circle object-fit-scale' src={pietubelogo} width="50" height="50"/>
            {/* <div>Change Profile Photo</div> */}
          </div>
      </Navbar>
    );
  };
  
  export default Header;