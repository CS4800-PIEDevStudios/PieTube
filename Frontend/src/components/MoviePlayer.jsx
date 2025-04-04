import React, { useState, useRef, useEffect } from 'react';
import { HandThumbsDown, HandThumbsUp, HandThumbsDownFill, HandThumbsUpFill, StarFill, Clock, CheckLg, InfoCircle } from 'react-bootstrap-icons';
import { useNavigate, useParams } from 'react-router-dom';
import spiderman from '../assets/spiderman.jpg';
import axiosInstance from '../axiosConfig.js'

const MoviePlayer = () => {
    const navigate = useNavigate();
    
    // filler..
    const { id } = useParams();
    
    const [isClickedThumbsUp, setIsClickedThumbsUp] = useState(true);
    const [isClickedThumbsDown, setIsClickedThumbsDown] = useState(true);
    const [isWatchListed, setIsWatchListed] = useState(true);
    
    const [movieData, setMovieData] = useState([]);
    const [genreData, setGenreData] = useState([]);
    const [actorData, setActorData] = useState([]);

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

    function handleMovieInfoClick() {
        navigate('/MovieDescription');
    }

    return (
        <div className='d-flex flex-column w-100 pt-5' style={{backgroundColor:"#E1E1E1"}}> 
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
                    onClick={handleMovieInfoClick}>
                        <InfoCircle/> Movie Info
                </button>

            <button 
                    className='d-flex custom-btn align-items-center justify-content-center' 
                    style={{fontSize:"1.5rem", width:"200px", columnGap:"10px"}} 
                    onClick={toggleIsWatchListed}
                    >{isWatchListed ? <Clock/> : <CheckLg/>} Watch List
                </button>

            </div>

            <div id='MoviePlayerDescription' className='d-flex my-5 w-100 justify-content-between position-relative'>
                {/* Background image */}
                {/* filler background */}
                <img src={movieData.Poster} className='movie-player-background-thumbnail'></img>
                {/* Left side */}
                <div className='d-flex flex-column align-items-start flex-wrap mx-5 position-relative' style={{width:"1200px", zIndex:"2"}}>
                    <p id='Title' className='title'> {movieData.Title} </p>
                    {/* Genre start */}
                    <div id='Genres' className='d-flex flex-wrap'>
                        {genreData.map((genre, index) => (
                            <React.Fragment key={index}>
                                <div className='movie-player-genre-blob'>
                                {genre}
                                </div>
                            </React.Fragment>
                        ))} 
                    </div>
                    {/* Genre end */}
                    {/* Line break */}
                    <div className='hr'/>
                    {/* Contributors start */}
                    <div id='Contributors'>
                        <div id='Directors' className='d-flex'> 
                            <h3 className='mr-3'> Directors </h3>
                            <div className='d-flex align-text-bottom'>
                                <p className='mx-2 mt-2'>{movieData.Name}</p>
                            </div>
                        </div>
                        <div id='Writers' className='d-flex'>
                            <h3 className='mr-3'> Actors </h3>
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
                    {/* Description start */}
                    <div id='Description' style={{textAlign:'start'}}>
                        {/* filler description */}
                        {movieData.Summary}
                    </div> 
                    {/* Description end */}
                </div>
                {/* Left Side end */}
                {/* Right side */}
                <div className='d-flex mx-5 align-items-end position-relative' style={{zIndex:"2", gap:"30px"}}>
                    {/* Stats Start*/}
                    <div className='d-flex flex-column align-items-end' style={{rowGap:"5px"}}>
                        <div id='LikeButtons' className='d-flex mb-3' style={{columnGap:"10px"}}>
                            {isClickedThumbsUp ? (
                                <HandThumbsUp onClick={toggleIsClickedThumbsUp} width="50" height="50" style={{cursor:"pointer"}}/>
                                ) : (
                                <HandThumbsUpFill onClick={toggleIsClickedThumbsUp} width="50" height="50" style={{cursor:"pointer"}}/>
                                )}
                            {isClickedThumbsDown ? (
                                <HandThumbsDown onClick={toggleIsClickedThumbsDown} width="50" height="50" style={{cursor:"pointer"}}/>
                                ) : (
                                <HandThumbsDownFill onClick={toggleIsClickedThumbsDown} width="50" height="50" style={{cursor:"pointer"}}/>
                                )}
                        </div>
                        <div className='stats'>
                            <div id='Date'> {movieData.ReleaseDate} </div>
                            |
                            <div id='AgeRating'> {movieData.AgeRating} </div>
                            |
                            <div id='Duration'> {movieData.Duration} min</div>
                        </div>
                        <h3> Rating </h3>
                        <h1> <StarFill/> {movieData.Rating}</h1>
                        {/* <h3> 437k </h3> */}
                    </div>
                    {/* Stats end */}
                    {/* MoviePoster start */}
                    <div id='MoviePoster' className='movie-player-thumbnail img-fluid '>
                        <img src={movieData.Poster}></img>
                    </div>
                    {/* MoviePoster end */}
                </div>
                {/* Right side end */}
            </div>
        </div>
    );
};

export default MoviePlayer;