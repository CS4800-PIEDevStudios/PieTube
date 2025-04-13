import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Nav, Navbar, Image, Form, InputGroup, Button } from 'react-bootstrap';
import mepic from '../assets/me.png';
import pietubelogo from '../assets/pietubelogo.png';
import { Filter, EmojiSunglasses, Search } from 'react-bootstrap-icons';
import GenreFilter from './GenreFilter';

const Header = () => {
  // Navigation hook
  const navigate = useNavigate(); 

  const [LoggedIn, setIsLoggedIn] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [inputText, setInputText] = useState('');
  
  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn') === 'false';
    setIsLoggedIn(loggedInStatus); 
  },[]);

  const handleSearchBar = () => {
    if (inputText.trim()) { // Only search if there's actual text
      localStorage.setItem('isFromFilter', false);
      localStorage.setItem('HeaderName', 'searchResults');
      navigate("/SearchResults", {
        state: { savedText: inputText }
      });
      window.location.reload();
    }
  };

  const handleTrending = () => {
    localStorage.setItem('HeaderName', 'trending');
    if (location.pathname === '/SearchResults') {
      window.location.reload();
    }
  }

  const handleWatchList = () => {
    localStorage.setItem('HeaderName', 'watchList');
    if (location.pathname === '/SearchResults') {
      window.location.reload();
    }
  }

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      handleSearchBar();
    }
  }

    return (
      <Navbar bg="light" data-bs-theme="light" className='d-flex w-100 shadow px-5 justify-content-between' style={{zIndex:2}}>
        {/* Logo */}
        <Navbar.Brand>
          <Link to="/" className='flex-fill' >
              <img src={pietubelogo} className='logo mr-3'/> 
          </Link>
        </Navbar.Brand>
        {/* Links */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Nav className='d-flex text-nowrap flex-fill flex-grow-1'>
              <Link to="/" className='headerbar flex-fill'> Home </Link>
              <Link to="/SearchResults" className='headerbar flex-fill' onClick={handleTrending}> Trending </Link>
              <Link to="/SearchResults" className='headerbar flex-fill' onClick={handleWatchList}> Watch List </Link>					
					</Nav>
          {/* Search bar */}
          <InputGroup className="ml-5 w-25 flex-fill">
            <Form.Control
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon2"
              value={ inputText }
              onChange= {(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyPress}
              style={{backgroundColor:'#E1E1E1', borderRadius:'10px 0 0 10px', border:'none', height:'50px', maxWidth:'1000px'}}
            />
            {/* Search button */}
            <Button variant="outline-secondary" style={{borderRadius:'0 10px 10px 0', width: '60px'}} onClick={ handleSearchBar }> <Search/></Button>
            {/* Filter */}
            <button className="mx-3" style={{border:"none", backgroundColor:"transparent"}}
              onClick={() => setShowFilter(true)}>
              <Filter width="40" height="40"></Filter>
            </button>
            <GenreFilter 
              show={showFilter} 
              onHide={() => setShowFilter(false)} 
            />
          </InputGroup>

          {/* Chooses whether to have the sign up button or the profile pic if user is logged in */}
          {LoggedIn ? (
            <Link to="/Signup">
            <button className='rounded-pill custom-btn px-3 d-flex align-items-center'>
              <EmojiSunglasses width="20" height="30" className='mr-2'/>
              Sign Up
            </button>
          </Link> 
          ) : (
          <div className='mx-5 rounded-circle profile-pic'>
            <Link to="/Profile" >
                <Image src={mepic} style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
            </Link>
          </div>
          )}
      </Navbar>
    );
  };
  
  export default Header;