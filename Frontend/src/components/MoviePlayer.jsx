import React, { useState, useEffect } from 'react';
import { Clock, CheckLg, InfoCircle } from 'react-bootstrap-icons';
import { useNavigate, useParams } from 'react-router-dom';
import CommentSection from './CommentSection.jsx'
import MoviePlayerDescription from './MoviePlayerDescription.jsx'
import axiosInstance from '../axiosConfig.js';

const MoviePlayer = () => {
    //Use states
    const [isWatchListed, setIsWatchListed] = useState(true);
    const [movieData, setMovieData] = useState([]);
    const [genreData, setGenreData] = useState([]);
    const [actorData, setActorData] = useState([]);

    // Filler...
    const { id } = useParams();

    // Navigation hook
    const navigate = useNavigate();

    //Fetching movie data
    useEffect(() => {
        GetMovieData()
      }, []);

    async function GetMovieData()
    {
        const response = await axiosInstance.post('api/get-movie-by-id', {
            id: id
          });

        setMovieData(response.data[0]);
        console.log(response.data[0]);

        const genres = await axiosInstance.post('api/get-movie-genres-by-id', {
            id: id
        });
        setGenreData(genres.data);
        console.log(genres.data);

        const actors = await axiosInstance.post('api/get-movie-actors-by-id', {
            id: id
        });
        setActorData(actors.data);
        console.log(actors.data);
    }

    // Function for Watch List button
    function toggleIsWatchListed () {
        setIsWatchListed(!isWatchListed);
    }

    return (
        <div className='d-flex flex-column w-100 pt-5'> 
            {/* Movie player iframe */}
            <div id='MoviePlayer' className='d-flex flex-column align-self-center w-50'>
                <iframe
                    allowFullScreen={true}
                    className='movie-player'
                    // filler
                    src={movieData.EmbedLink}
                ></iframe>
            </div>

            {/*Button*/}
            <div className='d-flex align-self-end mr-5' style={{ columnGap: "20px" }}>
                <button 
                    className='d-flex custom-btn align-items-center justify-content-center' 
                    style={{fontSize:"1.5rem", width:"200px", columnGap:"10px"}}
                    onClick={() => navigate(`/MovieDescription/${movieData.MovieID}`)}>
                        <InfoCircle/> Movie Info
                </button>
                <button 
                    className='d-flex custom-btn align-items-center justify-content-center' 
                    style={{fontSize:"1.5rem", width:"200px", columnGap:"10px"}} 
                    onClick={toggleIsWatchListed}
                    >{isWatchListed ? <Clock/> : <CheckLg/>} Watch List
                </button>
            </div>

            <MoviePlayerDescription 
                movieData={movieData}
                genreData={genreData}
                actorData={actorData}
            />

            {/* Comment Section */}
            <CommentSection
                movie={movieData} 
            />
        </div>
    );
};

export default MoviePlayer;