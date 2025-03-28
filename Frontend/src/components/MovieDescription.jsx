import React, { useState } from 'react';
import { HandThumbsDown, HandThumbsUp, HandThumbsDownFill, HandThumbsUpFill, StarFill, Clock } from 'react-bootstrap-icons';
import spiderman from '../assets/spiderman.jpg';
import { useNavigate } from 'react-router-dom';

const MovieDescription = () => {
    const genres = ["Action", "Adventure", "Animation", "Sci-Fi", "Fantasy"];
    const directors = ["Joaquim Dos Santos", "Kemp Powers", "Justin K. Thompson"];
    const writers = ["Phil Lord", "Christopher Miller", "Dave Callaham"];

    const [isClickedThumbsUp, setIsClickedThumbsUp] = useState(true);
    const [isClickedThumbsDown, setIsClickedThumbsDown] = useState(true);
    const navigate = useNavigate();

    const toggleIsClickedThumbsUp = () => {
        if (!isClickedThumbsDown) {
            setIsClickedThumbsDown(true);
        }
        setIsClickedThumbsUp(!isClickedThumbsUp);
    };

    const toggleIsClickedThumbsDown = () => {
        if (!isClickedThumbsUp) {
            setIsClickedThumbsUp(true);
        }
        setIsClickedThumbsDown(!isClickedThumbsDown);
    };

    return (
        <div id="MovieDescription" className='d-flex flex-column w-100 position-relative'>
            <img src={spiderman} className='movie-description-background-thumbnail'></img>
            {/* Movie Details Section */}
            <div className='d-flex flex-column p-5' style={{ zIndex: 2 }}>
                {/* Title details and Poster */}
                <div className='d-flex align-items-start'>
                    {/* Title and stats */}
                    <div className='d-flex flex-column align-items-start' style={{ flex: 1 }}>
                        <p className='title'>Spider-Man: Across the Spider-Verse</p>
                        <div className='movie-stats'>
                            <div className='stats'>
                                <div id='Date'>2023</div> 
                                -
                                <div id='AgeRating'>PG</div> 
                                -
                                <div id='Duration'>2h 20m</div>
                            </div>
                            <button className='description-page-button' onClick={() => navigate("/MoviePlayer")}> Watch Now </button>
                            <button className='description-page-button'> <Clock /> Watch List </button>
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
                    <div className='d-flex flex-column align-items-center ms-3 text-white'>
                        <div id='MoviePoster' className='movie-player-thumbnail img-fluid'>
                            <img src={spiderman} alt='Spider-Man: Across the Spider-Verse Movie Poster' style={{ width: '200px', borderRadius: '10px' }} />
                        </div>
                        <div className='d-flex flex-column align-items-center mt-3 text-white'>
                            <h1><StarFill /> 8.5/10</h1>
                            <h3>437k</h3>
                        </div>
                    </div>
                    {/* Poster and Rating end */}
                </div>
                {/* Title details and Poster end*/}
                {/* Bottom Description */}
                <div className='d-flex'>
                    <div className='d-flex flex-column'>
                        {/* Genres */}
                        <div id='Genres' className='d-flex flex-wrap' style={{ gap: "10px" }}>
                            {genres.map((genre, index) => (
                                <div key={index} className='movie-player-genre-blob'>
                                    {genre}
                                </div>
                            ))}
                        </div>
                        {/* Line break */}
                        <div className='hr'/>
                        {/* Contributors start */}
                        <div id='Contributors' className='mt-3'>
                            <div id='Directors' className='d-flex'>
                                <h3 className='mr-3'>Directors</h3>
                                <div className='d-flex align-text-bottom'>
                                    {directors.map((director, index) => (
                                        <React.Fragment key={index}>
                                            <p className='mx-2 mt-2' style={{ lineHeight: "1.5" }}>{director}</p>
                                            {index < directors.length - 1 && <span className='mt-2'>-</span>}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                            <div id='Writers' className='d-flex'>
                                <h3 className='mr-3'>Writers</h3>
                                <div className='d-flex align-text-bottom'>
                                    {writers.map((writer, index) => (
                                        <React.Fragment key={index}>
                                            <p className='mx-2 mt-2' style={{ lineHeight: "1.5" }}>{writer}</p>
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
                            Traveling across the multiverse, Miles Morales meets a new team of Spider-People, made up of heroes from different dimensions.
                            But when the heroes clash over how to deal with a new threat, Miles finds himself at a crossroads.
                        </div>
                        {/* Description end */}
                    </div>
                    {/* Trailer Section */}
                    <div className='d-flex flex-column justify-content-center'>
                        <h2 className='mb-3'>Trailer</h2>
                        <div className='d-flex align-self-end w-100'>
                            <iframe
                                className='embed-responsive-item'
                                src="https://www.youtube.com/embed/shW9i6k8cB0"
                                style={{ 
                                    height: '400px', 
                                    borderRadius: '10px',
                                    width: '100%',  
                                    maxWidth: '800px',
                                    aspectRatio: '16/9'
                                }}
                            />
                        </div>
                    </div>
                </div>
                {/* Bottom Description */}
            </div>
        </div>
    );
};
export default MovieDescription;