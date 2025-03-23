import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MovieDescription = () => {
    // Navigation hook
    const navigate = useNavigate(); 

    return (
        <div>
            <h1>Movie Description page</h1>
            <button className='custom-btn' onClick={() => navigate("/MoviePlayer")}> Watch Now </button>
        </div>
    );
};

export default MovieDescription;