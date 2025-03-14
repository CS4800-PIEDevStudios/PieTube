import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import mepic from '../assets/me.png';
import pietubelogo from '../assets/pietubelogo.png';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Header = () => {
    return (
      <Navbar bg="light" data-bs-theme="light" className='w-100 shadow-lg mb-5 px-5 justify-content-between'>
        <Navbar.Brand>
          <Link to="/PieTube" >
              <img src={pietubelogo} className='mr-3' style={{maxHeight: "40px"}}/> 
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Nav>
            <div className='d-flex text-nowrap' style={{gap:"50px"}}> 
              <Nav.Link> <Link to="/PieTube" style={{color:'#000000', fontSize:'1.5rem'}}> Home </Link> </Nav.Link>
              <Nav.Link> <Link to="/Login" style={{color:'#000000', fontSize:'1.5rem'}}> Trending </Link> </Nav.Link>
              <Nav.Link> <Link to="/Signup" style={{color:'#000000', fontSize:'1.5rem'}}> Watch List </Link> </Nav.Link>
            </div>
						
					</Nav>
          <InputGroup className="ml-5 w-25">
            <Form.Control
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon2"
              style={{backgroundColor:'#E1E1E1', borderRadius:'10px', border:'none', height:'50px'}}
            />
          </InputGroup>
          <div className='mx-5 rounded-circle'style={{ width:'80px', height:'80px', overflow:'hidden'}}>
            <Link to="/Profile" >
                <Image src={mepic} style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
            </Link>
          </div>
      </Navbar>
    );
  };
  
  export default Header;