import LikeButtons from './LikeButtons.jsx';
import React, { useState, useEffect } from 'react';
import { StarFill} from 'react-bootstrap-icons';
const MoviePlayerDescription = ({movieData, genreData, actorData}) => {
    return (
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
                        <div key= {index} className='movie-player-genre-blob'>
                        {genre}
                        </div>
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
                        <h3 className='mr-3'> Cast </h3>
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
                    <LikeButtons size={50} id={movieData.MovieID}/>
                    <div className='stats'>
                        <div id='Date'> {movieData.ReleaseDate} </div>
                        |
                        <div id='AgeRating'> {movieData.AgeRating} </div>
                        |
                        <div id='Duration'> {movieData.Duration} min</div>
                    </div>
                    <h3> Rating </h3>
                    <h1> <StarFill/> {movieData.Rating}</h1>
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
    )
}
export default MoviePlayerDescription;