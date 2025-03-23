import React, { useState, useRef, useEffect } from 'react';
import { Row } from 'react-bootstrap';

const MoviePlayer = () => {

    return (
        <div className='d-flex flex-column w-100'> 
            <div id='MoviePlayer' className='align-self-center w-50'>
                <iframe
                    title="MoviePlayer"
                    allowFullScreen={true}
                    className='movie-player'
                    src="https://vidsrc.dev/embed/movie/tt9362722"
                    style={{boxShadow: "0px 0px 80px rgba(0, 0, 0, 1)"}}
                ></iframe>
            </div>

            <hr/>

            <div id='MoviePlayerDescription' className='d-flex my-5 bg-secondary w-100 justify-content-between p-5'>
                <div className='d-flex flex-column align-items-start'>
                    <h1 id='Title'> Spider-Man: Across the Spider-Verse </h1>
                    <div id='Genres' className='d-flex flex-wrap'>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <div key={index} className='movie-player-genre-blob'>
                                Genre
                            </div>
                        ))} 
                    </div>
                    <div className='hr'/>
                    <div id='Contributors'>
                        <div id='Directors' className='d-flex m-3 justify-content-between align-text-bottom gap-3'> 
                            <h3>Directors</h3>
                            <div className='d-flex align-text-bottom'>
                                {Array.from({ length: 3 }).map((_, index) => (
                                    <p className='mx-3'>name</p>
                                ))}
                            </div>

                        </div>
                        <div id='Writers'></div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default MoviePlayer;