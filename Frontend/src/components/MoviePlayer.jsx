import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Ratio } from 'react-bootstrap';

const MoviePlayer = () => {
    // Navigation hook
    const navigate = useNavigate(); 

    return (
        <div className='d-flex flex-column w-50'> 
            <Ratio id='MoviePlayer' aspectRatio={"16x9"}>
                <iframe
                        title="Movie Player"
                        allowFullScreen={true}
                        src="https://vidsrc.dev/embed/movie/tt29623480"
                        style={{ width: '100%', height: '800px', border: 'none' }}
                    ></iframe>
            </Ratio>
            <div id='MoviePlayerDescription'>

            </div>
        </div>
    );
};

export default MoviePlayer;