import React, { useState, useRef, useEffect } from 'react';
import spiderman from '../assets/spiderman.jpg';
import { StarFill } from 'react-bootstrap-icons';
import { useNavigate, useParams } from 'react-router-dom';

const VideoCard = () => {
    // Navigation hook
    const navigate = useNavigate(); 
    const genres = [
        "Action", "Adventure", "Animation", "Comedy", "Crime", 
        "Documentary", "Drama", "Family", "Fantasy", "Historical", 
        "Horror", "Musical", "Mystery", "Romance", "Science Fiction", 
        "Thriller", "War", "Western", "Biography", "Sports", 
        "Superhero", "Noir", "Satire", "Teen", "Disaster"
    ];

    return (
        <div className="search-results d-flex" style={{gap:"30px"}} onClick={() => navigate("/MoviePlayer")}>
        {/* Thumbnail */}
        <div className='video-card-thumbnail'>
            <img src={spiderman}/>
        </div>
        {/* Description */}
        <div className='d-flex flex-column'>
            {/* Header */}
            <div className='d-flex justify-content-between mt-3'>
                {/* Title */}
                <div className='d-flex flex-column'>
                    <h1 className="video-card-movie-title">Spider-Man: Across the Spider-Verse</h1>
                    <div className='video-card-stats'>
                        <div id='Date'>2023</div> 
                        -
                        <div id='AgeRating'>PG</div> 
                        -
                        <div id='Duration'>2h 20m</div>
                    </div>
                </div>
                {/* Title end */}
                {/* Rating */}
                <div className='video-card-rating d-flex flex-column align-items-end'>
                    <h1><StarFill /> 8.5/10</h1>
                    <h3 className='text-muted' >437k</h3>
                </div>
                {/* Rating end */}
            </div>
            {/* Header end */}
                    {/* Genres */}
                    <div id='Genres' className='d-flex flex-wrap' style={{ gap: "10px" }}>
                        {genres.map((genre, index) => (
                            <div key={index} className='video-card-genre-blob'>
                                {genre}
                            </div>
                        ))}
                    </div>
            {/* Genre end */}
        </div>
        {/* Description end */}
    </div>
    );
};

export default VideoCard;