import React, { useState, useEffect } from 'react';
import { StarFill, Trash } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosConfig.js';

const VideoCard = ({ movie, headerName, onDelete }) => {
    // Use states
    const [movieData, setMovieData] = useState([]);
    // Navigation hook
    const navigate = useNavigate();
    
    //Fetching movie data
    useEffect(() => {
        GetMovieData()
    }, []);

    async function removeFromWatchlist()
    {
        const response = await axiosInstance.post('api/remove-watchlist',
            {
                MovieID: movie.MovieID,
            }
        );
        console.log(response);
    }


    {/* CornerIcon has trash can if from watch list otherwise shows rating*/}
    const renderRatingsOrTrash = () => {
        if (headerName === 'watchList') {
            return (
                <button className='trash' onClick={handleButtonClick}><Trash width="40" height="40"/></button>
            )
        } else {
            return (
                <h1><StarFill /> {movieData.Rating} </h1>
            )
        }
    }

    const handleButtonClick = (event) => {
        event.stopPropagation(); // Stop the click from reaching the div
        removeFromWatchlist();
        onDelete(movie.MovieID);
        console.log('Button clicked');
    };

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
                {/* CornerIcon has trash can if from watch list otherwise shows rating*/}
                <div className='video-card-rating d-flex flex-column align-items-end'>
                    {renderRatingsOrTrash()}
                </div>
                {/* CornerIcon end */}
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