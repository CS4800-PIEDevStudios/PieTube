import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import { ChevronRight, ChevronLeft } from 'react-bootstrap-icons';
import mepic from '../assets/me.png';
import KingKongThumb from '../assets/KingKongThumb.png';
import axiosInstance from '../axiosConfig.js'

const Home = () => {
    // Use states
    const [scrollInterval, setScrollInterval] = useState(null);
    const [movieData, setMovieData] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    
    // Navigation hook
    const navigate = useNavigate(); 

    const ref = useRef(null);

    const genres = [
        "Action", "Adventure", "Animation", "Comedy", "Crime", 
        "Documentary", "Drama", "Family", "Fantasy", "Historical", 
        "Horror", "Musical", "Mystery", "Romance", "Science Fiction", 
        "Thriller", "War", "Western", "Biography", "Sports", 
        "Superhero", "Noir", "Satire", "Teen", "Disaster"
      ];

    useEffect(() => {
          fetchData();
      }, []);

    useEffect(() => {
        fetchMoviesByGenres();
    }, [selectedGenres]);

    //Fetch movie data
    const fetchData = () => {
        console.log("fetching...");
        axiosInstance.get('api/get-movie-data')
            .then(response => {
                console.log(response.data)
                setMovieData(response.data); // Assuming the response data is an array of objects
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    };

    // Function to fetch movies by selected genres
    const fetchMoviesByGenres = () => {
        if (selectedGenres.length === 0) {
            setFilteredMovies([]);
            return;
        }
        axiosInstance.get('api/filter-genres', {
            params: {
                genres: selectedGenres.join(',')
            }
        })
        .then(response => {
            setFilteredMovies(response.data);
        })
        .catch(error => {
            console.error('Error filtering by genres:', error);
        });
    };

    //Genre select for genre scrolling bar
    const toggleGenre = (genre) => {
        setSelectedGenres(prev => {
            if (prev.includes(genre)) {
                return prev.filter(g => g !== genre);
            } else {
                return [...prev, genre];
            }
        });
    };

    //Functions for genre scrolling bar
    const startScrolling = (scrollOffset) => {
        if (scrollInterval) return; // Prevent multiple intervals

        const interval = setInterval(() => {
            if (ref.current) {
                ref.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
            }
        }, 60); // Adjust the interval duration for faster/slower scrolling

        setScrollInterval(interval);
    };

    const stopScrolling = () => {
        if (scrollInterval) {
            clearInterval(scrollInterval);
            setScrollInterval(null);
        }
    };

    return (
        
        <div className='d-flex flex-column mt-5' style={{ marginInline: "150px", overflowX: "hidden", marginTop:"100px"}}>
            {/* Genres */}
            <div className='mb-5 ml-3 position-relative' >
                {/* Left Arrow Button */}
                <button  
                    onMouseEnter={() => startScrolling(-20)} 
                    onMouseLeave={stopScrolling} 
                    className='scroll-arrow' style={{zIndex: 1, left:"0", background: "linear-gradient(to right, rgba(80, 80, 80, 1 ) 35%, transparent 90%)", height: "100%", borderRadius: "20px 0px 0px 20px"}}>
                    <ChevronLeft width="40" height="40"/>
                </button>

                {/* Right Arrow Button */}
                <button                     
                    onMouseEnter={() => startScrolling(20)} 
                    onMouseLeave={stopScrolling} 
                    className='scroll-arrow mr-3' style={{zIndex: 1, right: "0", background: "linear-gradient(to left, rgba(80, 80, 80, 0.9) 35%, transparent 90%)", height: "100%", borderRadius: "0px 20px 20px 0px"}}>
                    <ChevronRight width="40" height="40" />
                </button>

                {/* Scrollable Container */}
                <Row ref={ref} className="d-flex flex-nowrap gx-5 ml-3 mr-3 " style={{ whiteSpace: "nowrap", overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none', borderRadius: "20px"}}>
                    {genres.map((genre, index) => (
                        <div 
                            className={`genre-blob ${selectedGenres.includes(genre) ? 'selected-genre' : ''}`}
                            onClick={() => toggleGenre(genre)}
                        >
                        {genre}
                        </div>
                    ))} 
                </Row>
            </div>

            {/* Filtered Movies Section - Only shows when genres are selected */}
            {selectedGenres.length > 0 && (
                <div className='mb-5'>
                    <div className='header-recommend mb-3'>
                        {`Movies in: ${selectedGenres.join(', ')}`}
                    </div>
                    <div className='mb-5 thumbnail-grid'>
                        {filteredMovies.map((movie, index) => (
                            <div key={index} className='thumbnail' role="button" onClick={() => navigate(`/MovieDescription/${movie.MovieID}`)}>
                                <img src={movie.Poster} alt={movie.Title} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {/* Trending */}
            <div className='header-recommend float-start mb-3'>Trending</div>
            <div className='mb-5 thumbnail-grid'>
                {movieData.map((_, index) => (
                    <div key={index} className='thumbnail' role="button" onClick={() => navigate(`/MovieDescription/${movieData[index].MovieID}`)}>
                        <img src = {movieData[index].Poster} />
                    </div>
                ))}
            </div>

            {/* Recommended by Genre*/}
            <div className='header-recommend float-start mb-3'>Recommended by Genre</div>
            <div className='mb-5 thumbnail-grid'>
                {Array.from({ length: 8 }).map((_, index) => (
                    <div key={index} className='thumbnail' role="button" onClick={() => navigate("/MovieDescription")}>
                        <img src = {KingKongThumb}/>
                    </div>
                ))}
            </div>

            {/* Recommended Movies*/}
            <div className='header-recommend float-start mb-3'>Recommended Movies</div>
            <div className='mb-5 thumbnail-grid'>
                {Array.from({ length: 24 }).map((_, index) => (
                    <div key={index} className='thumbnail' role="button" onClick={() => navigate("/MovieDescription")}>
                        < img src = {mepic}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;

            
