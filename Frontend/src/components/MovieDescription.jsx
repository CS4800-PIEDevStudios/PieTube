import React, { useState, useEffect } from 'react';
import { StarFill, Clock, CheckLg } from 'react-bootstrap-icons';
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../axiosConfig.js'
import LikeButtons from './LikeButtons.jsx'

const MovieDescription = () => {
    // Use states
    const [movieData, setMovieData] = useState([]);
    const [genreData, setGenreData] = useState([]);
    const [actorData, setActorData] = useState([]);
    const [isWatchListed, setIsWatchListed] = useState(true);
    
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
        addToWatchlist();
        setIsWatchListed(!isWatchListed);
    }

    async function addToWatchlist()
    {
        await axiosInstance.post("api/add-watchlist",
            {
                MovieID: id,
            }
        )
    }

    return (
        <div id="MovieDescription" className='d-flex flex-column w-100 position-relative justify-content-center'>
            <img src={movieData.Poster} className='movie-description-background-thumbnail'></img>
            {/* Movie Details Section */}
            <div className='d-flex flex-column p-5' style={{ zIndex: 2 }}>
                {/* Title details and Poster */}
                <div className='d-flex align-items-start'>
                    {/* Title and stats */}
                    <div className='d-flex flex-column align-items-start align-self-end' style={{ flex: 1}}>
                        <p className='title'>{movieData.Title}</p>
                        <div className='movie-stats'>
                            <div className='stats'>
                                <div id='Date'>{movieData.ReleaseDate}</div> 
                                |
                                <div id='AgeRating'>{movieData.AgeRating}</div> 
                                |
                                <div id='Duration'>{movieData.Duration} min</div>
                            </div>
                            <button className='description-page-button' onClick={() => navigate(`/MoviePlayer/${id}`)}> Watch Now </button>
                            <button className='description-page-button' onClick={toggleIsWatchListed}> {isWatchListed ? <Clock /> : <CheckLg />} Watch List
                            </button>
                            {/* Like/Dislike Buttons */}
                            <LikeButtons size={50} id={id}/>
                            {/* End like buttons */}
                        </div>
                    </div>
                    {/* End title details */}

                    {/* Poster and Ratings */}
                    <div className='d-flex align-items-end' style={{gap:"20px", whiteSpace:'nowrap'}}>
                        <div id='Rating' className='d-flex flex-column align-items-end'>
                            <h1><StarFill /> {movieData.Rating}</h1>
                        </div>
                        <div id='MoviePoster' className='movie-description-thumbnail'>
                            <img src={movieData.Poster}/>
                        </div>
                    </div>
                    {/* Poster and Rating end */}
                </div>
                {/* Title details and Poster end*/}

                {/* Bottom Description */}
                <div className='d-flex' style={{gap:'100px'}}>
                    {/* Description */}
                    <div className='d-flex flex-column flex-fill' style={{maxWidth:'1500px'}}>
                        {/* Genres */}
                        <div id='Genres' className='d-flex flex-wrap' 
                        style={{ gap: "15px", position: 'relative'}}>
                            {genreData.map((genre, index) => (
                                <div key={index} className='movie-description-genre-blob'>
                                    {genre}
                                </div>
                            ))}
                        </div>
                        {/* Line break */}
                        <div className='hr'/>
                        {/* Contributors start */}
                        <div id='Contributors' className='mt-3'>
                            <div id='Directors' className='d-flex'>
                                <h3 className='mr-3'>Director</h3>
                                <div className='d-flex align-text-bottom'>
                                    <p className='mx-2 mt-2'>{movieData.Name}</p>
                                </div>
                            </div>
                            <div id='Writers' className='d-flex'>
                                <h3 className='mr-3'>Cast</h3>
                                <div className='d-flex align-text-bottom'>
                                    {actorData.map((actor, index) => (
                                        <React.Fragment key={index}>
                                            <p className='mx-2 mt-2'>{actor}</p>
                                            {index < actorData.length - 1 && <span className='mt-2'>-</span>}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* Contributors end */}

                        {/* Line break */}
                        <div className='hr'/>

                        {/* Description */}
                        <div id='Description' style={{ textAlign: 'start'}}>
                            {/* filler description */}
                            {movieData.Summary}
                        </div>
                        {/* Description end */}
                    </div>

                    {/* Trailer Section */}
                    <div id='MovieDescriptionTrailer' className='d-flex flex-column align-items-end flex-fill'>
                        <h2 className='mt-3 align-self-start'>Trailer</h2>
                        <iframe
                            className='embed-responsive-item'
                            src={movieData.Trailer}
                        />
                    </div>
                </div>
                {/* Bottom Description end*/}
            </div>
        </div>
    );
};
export default MovieDescription;