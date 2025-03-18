import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Image, Form, InputGroup } from 'react-bootstrap';
import mepic from '../assets/me.png';
import pietubelogo from '../assets/pietubelogo.png';
import { Filter, EmojiSunglasses } from 'react-bootstrap-icons';

const Header = () => {
    return (
      <Navbar bg="light" data-bs-theme="light" className='d-flex w-100 shadow mb-5 px-5 justify-content-between'>
        <Navbar.Brand>
          <Link to="/PieTube" className='flex-fill' >
              <img src={pietubelogo} className='mr-3' style={{maxHeight: "40px"}}/> 
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Nav className='d-flex text-nowrap flex-fill flex-grow-1'>
              <Nav.Link className='flex-fill'> <Link to="/PieTube" style={{color:'#000000', fontSize:'1.5rem'}}> Home </Link> </Nav.Link>
              <Nav.Link className='flex-fill'> <Link to="/Profile" style={{color:'#000000', fontSize:'1.5rem'}}> Trending </Link> </Nav.Link>
              <Nav.Link className='flex-fill'> <Link to="/Signup" style={{color:'#000000', fontSize:'1.5rem'}}> Watch List </Link> </Nav.Link>						
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
          {/* <div className='mx-5 rounded-circle 'style={{ minWidth:'80px', height:'80px', overflow:'hidden'}}>
            <Link to="/Profile" >
                <div src={mepic} style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
            </Link>
          </div> */}
          <Link to="/Signup">
            <button className='rounded-pill custom-btn px-3 d-flex align-items-center'>
              <EmojiSunglasses width="20" height="30" className='mr-2'></EmojiSunglasses>
              Sign Up
            </button>
          </Link>

      </Navbar>
    );
  };
  
  export default Header;