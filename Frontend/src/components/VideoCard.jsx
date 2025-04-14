import React, { useState, useRef, useEffect } from 'react';
import { StarFill } from 'react-bootstrap-icons';
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../axiosConfig.js';

const VideoCard = ({ movie }) => {
    // Use states
    const [movieData, setMovieData] = useState([]);
    // Navigation hook
    const navigate = useNavigate();

    // Filler...
    const { id } = useParams();
    
    //Fetching movie data
    useEffect(() => {
        GetMovieData()
        }, []);

    async function GetMovieData()
    {
        console.log("Trying to get movie ID: " + movie.MovieID)
        const response = await axiosInstance.post('api/get-movie-by-id', {
            id: movie.MovieID
            });
        setMovieData(response.data[0]);
        console.log(response.data[0]);
    }
    return (
        <div className="search-results d-flex" style={{gap:"30px"}} onClick={() => navigate(`/MovieDescription/${movie.MovieID}`)}>
        {/* Thumbnail */}
        <div className='video-card-thumbnail'>
            <img src={movie.Poster}/>
        </div>
        {/* Description */}
        <div className='d-flex flex-column w-100'>
            {/* Header */}
            <div className='d-flex justify-content-between mt-3'>
                {/* Title */}
                <div className='d-flex flex-column'>
                    <h1 className="video-card-movie-title">{movie.Title}</h1>
                    <div className='video-card-stats'>
                        <div id='Date'>{movieData.ReleaseDate}</div> 
                        |
                        <div id='AgeRating'>{movieData.AgeRating}</div> 
                        |
                        <div id='Duration'>{movieData.Duration} min</div>
                    </div>
                </div>
                {/* Title end */}
                {/* Rating */}
                <div className='video-card-rating d-flex flex-column align-items-end'>
                    <h1><StarFill /> {movieData.Rating} </h1>
                </div>
                {/* Rating end */}
            </div>
            {/* Header end */}
                    {/* Genres */}
                    <div id='Genres' className='d-flex flex-wrap' style={{ gap: "10px" }}>
                        {movie.Genres?.map((genre, index) => (
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