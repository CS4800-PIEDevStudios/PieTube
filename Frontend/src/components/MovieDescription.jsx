import React, { useState } from 'react';
import { HandThumbsDown, HandThumbsUp, HandThumbsDownFill, HandThumbsUpFill, StarFill, Clock, CheckLg } from 'react-bootstrap-icons';
import spiderman from '../assets/spiderman.jpg';
import { useNavigate } from 'react-router-dom';

const MovieDescription = () => {
    const genres = ["Action", "Adventure", "Animation", "Sci-Fi", "Fantasy"];
    const directors = ["Joaquim Dos Santos", "Kemp Powers", "Justin K. Thompson"];
    const writers = ["Phil Lord", "Christopher Miller", "Dave Callaham"];

    const [isClickedThumbsUp, setIsClickedThumbsUp] = useState(true);
    const [isClickedThumbsDown, setIsClickedThumbsDown] = useState(true);
    const [isWatchListed, setIsWatchListed] = useState(true);
    
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

    return (
        <div id="MovieDescription" className='d-flex flex-column w-100 position-relative justify-content-center'>
            <img src={spiderman} className='movie-description-background-thumbnail'></img>
            {/* Movie Details Section */}
            <div className='d-flex flex-column p-5' style={{ zIndex: 2 }}>
                {/* Title details and Poster */}
                <div className='d-flex align-items-start'>
                    {/* Title and stats */}
                    <div className='d-flex flex-column align-items-start align-self-end' style={{ flex: 1}}>
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
                        <div className='d-flex flex-column align-items-end'>
                            <h1><StarFill /> 8.5/10</h1>
                            <h3>437k</h3>
                        </div>
                        <div id='MoviePoster' className='movie-player-thumbnail'>
                            <img src={spiderman} alt='Spider-Man: Across the Spider-Verse Movie Poster'/>
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
                                            <p className='mx-2 mt-2' style={{ fontSize:'1.3rem' }}>{director}</p>
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
                                            <p className='mx-2 mt-2' style={{ fontSize:'1.3rem' }}>{writer}</p>
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
                        <div id='Description' style={{ textAlign: 'start', fontSize:'1.2rem'}}>
                            {/* filler description */}
                            Traveling across the multiverse, Miles Morales meets a new team of Spider-People, made up of heroes from different dimensions.
                            But when the heroes clash over how to deal with a new threat, Miles finds himself at a crossroads.
                        </div>
                        {/* Description end */}
                    </div>

                    {/* Trailer Section */}
                    <div id='MovieDescriptionTrailer' className='d-flex flex-column align-items-end flex-fill'>
                        <h2 className='mt-3 align-self-start'>Trailer</h2>
                        <iframe
                            className='embed-responsive-item'
                            src="https://www.youtube.com/embed/shW9i6k8cB0"
                            style={{ 
                                height: '400px', 
                                borderRadius: '10px',
                                width: '100%',  
                                maxWidth: '800px',
                                aspectRatio:'16/9'
                            }}
                        />
                    </div>
                </div>
                {/* Bottom Description */}
            </div>
        </div>
    );
};
export default MovieDescription;