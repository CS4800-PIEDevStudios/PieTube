import React, {useState, useEffect} from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Nav, Navbar, Image, Form, InputGroup, Button } from 'react-bootstrap';
import { Filter, EmojiSunglasses, Search } from 'react-bootstrap-icons';
import default_pfp from '../assets/Default_pfp.png';
import pietubelogo from '../assets/pietubelogo.png';
import GenreFilter from './GenreFilter';
import axiosInstance from '../axiosConfig.js'

const Header = () => {
  // Use states
  const [LoggedIn, setIsLoggedIn] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [inputText, setInputText] = useState('');
  const [profilePicUrl, setProfilePicUrl] = useState(default_pfp);
  
  // Navigation hook
  const navigate = useNavigate(); 
  const location = useLocation();
  useEffect(() => {
    /// FIX THIS
    const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedInStatus);
    fetchProfileData();
  },[location]);

  function fetchProfileData()
    {
      console.log("fetching profile")
        // Fetches profile data
        axiosInstance.get('login-api/getProfileData')
        .then(response => {
                if (response.data[0].profilePic) {
                    setProfilePicUrl(response.data[0].profilePic);
                }
            })
            .catch(error => {
                console.error('Error fetching profile data:', error);
            })
    }
  //Changes headerName variable and saves inputted text
  const handleSearchBar = () => {
    if (inputText.trim()) { // Only search if there's actual text
      localStorage.setItem('isFromFilter', false);
      localStorage.setItem('HeaderName', 'searchResults');
      navigate("/SearchResults", {
        state: { savedText: inputText }
      });
      // window.location.reload();
    } 
  };

  //Submits searchbar input when pressing enter key
  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      handleSearchBar();
    }
  }

  //Changes headerName variable
  const handleTrending = () => {
    localStorage.setItem('HeaderName', 'trending');
    if (location.pathname === '/SearchResults') { //Reloads page if user is already on search results page to change header
      window.location.reload();
    }
  }
  
  //Changes headerName variable
  const handleWatchList = () => {
    localStorage.setItem('HeaderName', 'watchList');
  }

    return (
      <Navbar bg="light" data-bs-theme="light" className='navbar-header d-flex w-100 px-5 justify-content-between' style={{zIndex:2}}>
        {/* Logo */}
        <Navbar.Brand>
          <Link to="/" className='flex-fill' >
              <img src={pietubelogo} className='logo mr-3'/> 
          </Link>
        </Navbar.Brand>
        {/* Links */}
        <Nav className='d-flex text-nowrap flex-fill flex-grow-1'>
            <Link to="/" className='headerbar flex-fill'> Home </Link>
            <Link to="/SearchResults" className='headerbar flex-fill' onClick={handleTrending}> Trending </Link>
            {LoggedIn ? (
                <Link to="/Login" className='headerbar flex-fill'> Watch List </Link>
              ) : (
                <Link to="/WatchList" className='headerbar flex-fill' onClick={handleWatchList}> Watch List </Link>
              )}					
        </Nav>
        {/* Search bar */}
        <InputGroup className="ml-5 w-25 flex-fill">
          <Form.Control
            placeholder="Search"
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
          <div className='mx-5 rounded-circle profile-pic'>
          <Link to="/Profile" >
              <Image src={profilePicUrl} style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
          </Link>
        </div>
        ) : (
          <Link to="/Login">
          <button className='rounded-pill custom-btn px-3 d-flex align-items-center'>
            <EmojiSunglasses width="20" height="30" className='mr-2'/>
            Sign In
          </button>
        </Link> 
        )}
      </Navbar>
    );
  };
  
  export default Header;