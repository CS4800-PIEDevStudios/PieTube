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
        <div 
            className='d-flex flex-column w-100 min-vh-100 position-relative' 
            style={{ 
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)), url(${spiderman})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: "#f5f5f5",
                paddingTop: "250px"
            }}
        >
            {/* Movie Details Section */}
            <div className='d-flex flex-column p-5' style={{ zIndex: 2 }}>
                
            {/* Title and Metadata */}
            <div className='d-flex flex-row align-items-start justify-content-between'>
                <div className='d-flex flex-column' style={{ flex: 1 }}>
                    <p id='Title' style={{ fontSize: "4rem", fontWeight: "normal", textAlign:"left" }}>Spider-Man: Across the Spider-Verse</p>
                    <div className='d-flex align-items-center' style={{ gap: "20px", marginBottom: "20px" }}>
                        <div className='d-flex' style={{ gap: "10px", fontSize: "1.25rem", whiteSpace: "nowrap" }}>
                            <div id='Date'>2023</div> -
                            <div id='AgeRating'>PG</div> -
                            <div id='Duration'>2h 20m</div>
                        </div>
                        <button 
                            className='custom-btn' 
                            onClick={() => navigate("/MoviePlayer")} 
                            style={{ 
                                fontSize: "1.30rem", 
                                width: "200px", 
                                backgroundColor: "white", 
                                color: "black", 
                                border: "none", 
                                borderRadius: "20px", 
                                padding: "10px 20px", 
                                cursor: "pointer", 
                                transition: "background-color 0.3s ease" 
                            }}
                            onMouseEnter={(e) => e.target.style.backgroundColor = "#f0f0f0"} 
                            onMouseLeave={(e) => e.target.style.backgroundColor = "white"}
                        >
                            Watch Now
                        </button>
                        <button 
                            className='custom-btn' 
                            style={{ 
                                fontSize: "1.30rem", 
                                width: "200px", 
                                backgroundColor: "white", 
                                color: "black", 
                                border: "none", 
                                borderRadius: "20px", 
                                padding: "10px 20px", 
                                cursor: "pointer", 
                                transition: "background-color 0.3s ease" 
                            }}
                            onMouseEnter={(e) => e.target.style.backgroundColor = "#f0f0f0"} 
                            onMouseLeave={(e) => e.target.style.backgroundColor = "white"}
                        >
                            <Clock /> Watch List
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
            </div>

            {/* Genres */}
            <div id='Genres' className='d-flex flex-wrap' style={{ gap: "10px" }}>
                {genres.map((genre, index) => (
                    <div key={index} className='movie-player-genre-blob'>
                        {genre}
                    </div>
                ))}
            </div>

            {/* Border */}
            <hr style={{ border: "2px solid #f5f5f5", width: '75%' ,margin: "20px 0" }} />


            {/* Contributors start */}
            <div id='Contributors' className='mt-3'>
                {/* Directors */}
                <div id='Directors' className='d-flex align-items-center'>
                    <h3 className='me-3'>Directors</h3>
                    <div className='d-flex flex-wrap align-items-center'>
                        {directors.map((director, index) => (
                            <React.Fragment key={index}>
                                <p className='mx-2 mb-0' style={{ lineHeight: "1.5" }}>{director}</p>
                                {index < directors.length - 1 && <span className='mx-1'>-</span>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* Writers */}
                <div id='Writers' className='d-flex align-items-center mt-2'>
                    <h3 className='me-3'>Writers</h3>
                    <div className='d-flex flex-wrap align-items-center'>
                        {writers.map((writer, index) => (
                            <React.Fragment key={index}>
                                <p className='mx-2 mb-0' style={{ lineHeight: "1.5" }}>{writer}</p>
                                {index < writers.length - 1 && <span className='mx-1'>-</span>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>

            {/* Border */}
            <hr style={{ border: "2px solid #f5f5f5", width: '75%' ,margin: "20px 0" }} />

            {/* Description */}
            <div id='Description' className='mt-2' style={{ textAlign: 'start', maxWidth: '600px' }}>
                Traveling across the multiverse, Miles Morales meets a new team of Spider-People, made up of heroes from different dimensions.
                But when the heroes clash over how to deal with a new threat, Miles finds himself at a crossroads.
            </div>
        </div>

        {/* Poster and Ratings */}
        <div className='d-flex flex-column align-items-center ms-3'>
            <div id='MoviePoster' className='movie-player-thumbnail img-fluid'>
                <img src={spiderman} alt='Spider-Man: Across the Spider-Verse Movie Poster' style={{ width: '200px', borderRadius: '10px' }} />
            </div>
            <div className='d-flex flex-column align-items-center mt-3'>
                <h1><StarFill /> 8.5/10</h1>
                <h3>437k</h3>
            </div>
        </div>
    </div>

        {/* Trailer Section */}
        <div className='d-flex justify-content-center w-100 mt-5'>
            <div style={{ maxWidth: '800px', width: '100%', textAlign: 'center' }}>
                <h2 className='mb-3'>Trailer</h2>
                <div className='d-flex justify-content-center'>
                    <iframe
                        className='embed-responsive-item'
                        src="https://www.youtube.com/embed/shW9i6k8cB0"
                        title="Spider-Man: Across the Spider-Verse Trailer"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ 
                            height: '400px', 
                            borderRadius: '10px',
                            width: '100%',  
                            maxWidth: '800px' 
                        }}
                    />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDescription;