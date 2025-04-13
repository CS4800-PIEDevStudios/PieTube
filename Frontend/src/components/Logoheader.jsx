import React from 'react';
import { Link } from 'react-router-dom';
import pietubelogo from '../assets/pietubelogo.png';

// Pietube logo used in header
const Logoheader = () => {
    return (
      <div>
        <Link to="/" >
            <img src={pietubelogo} class="my-5" style={{maxHeight: "40px"}}/> 
        </Link>
      </div>
    );
  };
  
  export default Logoheader;