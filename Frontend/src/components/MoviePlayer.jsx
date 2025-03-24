import React, { useState, useRef, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { HandThumbsDown, HandThumbsUp, HandThumbsDownFill, HandThumbsUpFill, StarFill, Clock } from 'react-bootstrap-icons';
import spiderman from '../assets/spiderman.jpg';
import { use } from 'react';

const MoviePlayer = () => {
    // filler
    const genres = ["Action", "Adventure", "Animation", "Sci-Fi", "Fantasy"];
    const directors = ["Joaquim Dos Santos", "Kemp Powers", "Justin K. Thompson"];
    const writers = ["Phil Lord", "Christopher Miller", "Dave Callaham"];

    const [isClickedThumbsUp, setIsClickedThumbsUp] = useState(true);
    const [isClickedThumbsDown, setIsClickedThumbsDown] = useState(true);

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

    return (
        <div className='d-flex flex-column w-100 pt-5' style={{backgroundColor:"#E1E1E1"}}> 
            <div id='MoviePlayer' className='d-flex flex-column align-self-center w-50'>
                <iframe
                    allowFullScreen={true}
                    className='movie-player'
                    // filler
                    src="https://vidsrc.dev/embed/movie/tt9362722"
                ></iframe>

            </div>
            <button className='custom-btn align-self-end mr-5' style={{fontSize:"1.5rem", width:"200px"}}> <Clock/> Watch List </button>

            <hr/>

            <div id='MoviePlayerDescription' className='d-flex my-5 w-100 justify-content-between position-relative' style={{color: "#f5f5f5", paddingInline:"100px", paddingBlock:"50px"}}>
                {/* Background image */}
                {/* filler background */}
                <img src={spiderman} className='movie-player-background-thumbnail'></img>
                {/* Left side */}
                <div className='d-flex flex-column align-items-start flex-wrap mx-5 position-relative' style={{width:"1200px", zIndex:"2"}}>
                    <p id='Title'style={{fontSize:"4rem"}}> Spider-Man: Across the Spider-Verse </p>
                    {/* Genre start */}
                    <div id='Genres' className='d-flex flex-wrap'>
                        {genres.map((genre, index) => (
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
                                {directors.map((director, index) => (
                                    <React.Fragment key={index}>
                                        <p className='mx-2 mt-2'>{director}</p>
                                        {index < directors.length - 1 && <span className='mt-2'>-</span>}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                        <div id='Writers' className='d-flex'>
                            <h3 className='mr-3'> Writers </h3>
                            <div className='d-flex align-text-bottom'>
                                {writers.map((writer, index) => (
                                    <React.Fragment key={index}>
                                        <p className='mx-2 mt-2'>{writer}</p>
                                        {index < writers.length - 1 && <span className='mt-2'>-</span>}
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
                        Traveling across the multiverse, Miles Morales meets a new team of Spider-People, made up of heroes from different dimensions.
                        But when the heroes clash over how to deal with a new threat, Miles finds himself at a crossroads.
                    </div> 
                    {/* Description end */}
                </div>
                {/* Left Side end */}
                {/* Right side */}
                <div className='d-flex mx-5 align-items-end position-relative' style={{zIndex:"2"}}>
                    {/* Stats Start*/}
                    <div className='d-flex flex-column align-items-end' style={{rowGap:"5px"}}>
                        <div id='LikeButtons' className='d-flex mb-3' style={{columnGap:"10px"}}>
                            {isClickedThumbsUp ? (
                                <HandThumbsUp onClick={toggleIsClickedThumbsUp} width="50" height="50"/>
                                ) : (
                                <HandThumbsUpFill onClick={toggleIsClickedThumbsUp} width="50" height="50"/>
                                )}
                            {isClickedThumbsDown ? (
                                <HandThumbsDown onClick={toggleIsClickedThumbsDown} width="50" height="50"/>
                                ) : (
                                <HandThumbsDownFill onClick={toggleIsClickedThumbsDown} width="50" height="50"/>
                                )}
                               
                        </div>
                        <div className='d-flex' style={{gap:"5px", fontSize:"1.25rem", whiteSpace:"nowrap"}}>
                            <div id='Date'> 2023 </div>
                            -
                            <div id='AgeRating'> PG </div>
                            -
                            <div id='Duration'> 2h 20m </div>
                        </div>
                        <h3> Rating </h3>
                        <h1> <StarFill/> 8.5/10</h1>
                        <h3> 437k </h3>
                    </div>
                    {/* Stats end */}
                    {/* MoviePoster start */}
                    <div id='MoviePoster' className='movie-player-thumbnail img-fluid '>
                        <img src={spiderman}></img>
                    </div>
                    {/* MoviePoster end */}
                </div>
                {/* Right side end */}
            </div>
        </div>
    );
};

export default MoviePlayer;