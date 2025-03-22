import React from 'react';
import { Link } from 'react-router-dom';
import pietubelogo from '../assets/pietubelogo.png';

const Logoheader = () => {
    return (
      <div>
        <Link to="/" >
            <img src={pietubelogo} class="mb-5" style={{maxHeight: "40px"}}/> 
        </Link>
      </div>
    );
  };
  
  export default Logoheader;