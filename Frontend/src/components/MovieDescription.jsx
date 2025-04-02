import React, { useState, useEffect } from 'react';
import { HandThumbsDown, HandThumbsUp, HandThumbsDownFill, HandThumbsUpFill, StarFill, Clock, CheckLg } from 'react-bootstrap-icons';
import spiderman from '../assets/spiderman.jpg';
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../axiosConfig.js'

const MovieDescription = () => {
    const writers = ["Phil Lord", "Christopher Miller", "Dave Callaham"];
    const [movieData, setMovieData] = useState([]);
    const [genreData, setGenreData] = useState([]);
    const [actorData, setActorData] = useState([]);
    const [isClickedThumbsUp, setIsClickedThumbsUp] = useState(true);
    const [isClickedThumbsDown, setIsClickedThumbsDown] = useState(true);
    const [isWatchListed, setIsWatchListed] = useState(true);
    const { id } = useParams();
    const navigate = useNavigate();

    function toggleIsClickedThumbsUp () {
        if (!isClickedThumbsDown) {
            setIsClickedThumbsDown(true)
        }
        setIsClickedThumbsUp(!isClickedThumbsUp);
    }
    function toggleIsClickedThumbsDown () {
        if (!isClickedThumbsUp) {
            setIsClickedThumbsUp(true)
        }
        setIsClickedThumbsDown(!isClickedThumbsDown);
    }

    function toggleIsWatchListed () {
        setIsWatchListed(!isWatchListed);
    }

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
                            <div id='LikeButtons' className='d-flex' style={{ gap: "10px" }}>
                                {isClickedThumbsUp ? (
                                    <HandThumbsUp onClick={toggleIsClickedThumbsUp} width="50" height="50" />
                                ) : (
                                    <HandThumbsUpFill onClick={toggleIsClickedThumbsUp} width="50" height="50" />
                                )}
                                {isClickedThumbsDown ? (
                                    <HandThumbsDown onClick={toggleIsClickedThumbsDown} width="50" height="50" />
                                ) : (
                                    <HandThumbsDownFill onClick={toggleIsClickedThumbsDown} width="50" height="50" />
                                )}
                            </div>
                            {/* End like buttons */}

                        </div>
                    </div>
                    {/* End title details */}

                    {/* Poster and Ratings */}
                    <div className='d-flex align-items-end' style={{gap:"20px", whiteSpace:'nowrap'}}>
                        <div id='Rating' className='d-flex flex-column align-items-end'>
                            <h1><StarFill /> {movieData.Rating}</h1>
                            {/* <h3>437k</h3> */}
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
                                <h3 className='mr-3'>Actors</h3>
                                <div className='d-flex align-text-bottom'>
                                    {actorData.map((actor, index) => (
                                        <React.Fragment key={index}>
                                            <p className='mx-2 mt-2'>{actor}</p>
                                            {index < writers.length - 1 && <span className='mt-2'>-</span>}
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
                {/* Bottom Description */}
            </div>
        </div>
    );
};
export default MovieDescription;