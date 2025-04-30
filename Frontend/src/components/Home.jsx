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
    const [currentUser, setCurrentUser] = useState(null);
    const [manualSelectedGenres, setManualSelectedGenres] = useState([]);
    const [manualFilteredMovies, setManualFilteredMovies] = useState([]);
    const [likedGenres, setLikedGenres] = useState([]);
    const [recommendedMovies, setRecommendedMovies] = useState([]);
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
        axiosInstance.get('api/get-movie-data')
          .then(response => {
            setMovieData(response.data);
          })
          .catch(error => {
            console.error('There was an error fetching movie data!', error);
          });
      }, []);
    

      useEffect(() => {
        axiosInstance.get('login-api/getProfileData', { withCredentials: true })
          .then(response => {
            console.log("Profile data:", response.data);
            // Assuming the response is an array with one user object:
            if (Array.isArray(response.data) && response.data.length > 0) {
              setCurrentUser(response.data[0]);
            } else {
              setCurrentUser(response.data);
            }
          })
          .catch(error => {
            console.error('Error fetching profile data:', error);
          });
      }, []);
    

      useEffect(() => {
        if (manualSelectedGenres.length > 0) {
          axiosInstance.get('api/filter-genres', {
            params: { genres: manualSelectedGenres.join(',') }
          })
          .then(response => {
            setManualFilteredMovies(response.data);
          })
          .catch(error => {
            console.error('Error fetching movies for manual selection:', error);
          });
        } else {
          setManualFilteredMovies([]);
        }
      }, [manualSelectedGenres]);
    

      useEffect(() => {
        if (currentUser && currentUser.id) {
          axiosInstance.get('api/get-liked-genres', {
            params: { userID: currentUser.id }
          })
          .then(response => {
            console.log("Liked genres:", response.data);
            setLikedGenres(response.data);
          })
          .catch(error => {
            console.error('Error fetching liked genres:', error);
          });
        }
      }, [currentUser]);
    

      useEffect(() => {
        if (likedGenres.length > 0) {
          axiosInstance.get('api/filter-genres', {
            params: { genres: likedGenres.join(',') }
          })
          .then(response => {
            setRecommendedMovies(response.data);
          })
          .catch(error => {
            console.error('Error fetching recommended movies:', error);
          });
        } else {
          setRecommendedMovies([]);
        }
      }, [likedGenres]);

    //Genre select for genre scrolling bar
    const toggleGenre = (genre) => {
        setManualSelectedGenres(prev => {
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
        <div className='d-flex flex-column mt-5' style={{ marginInline: "150px", overflowX: "hidden", marginTop:"100px", height:"90vh"}}>
            {/* Genres */}
            <div className='mb-5 ml-3 position-relative'> 
                {/* Left Arrow Button */}
                <button  
                    onMouseEnter={() => startScrolling(-20)} 
                    onMouseLeave={stopScrolling} 
                    className='scroll-arrow' style={{zIndex: 1, left:"0", background: "linear-gradient(to right, rgb(0, 0, 0) 35%, transparent 90%)", height: "100%", borderRadius: "20px 0px 0px 20px"}}>
                    <ChevronLeft width="40" height="40"/>
                </button>

                {/* Right Arrow Button */}
                <button                     
                    onMouseEnter={() => startScrolling(20)} 
                    onMouseLeave={stopScrolling} 
                    className='scroll-arrow mr-3' style={{zIndex: 1, right: "0", background: "linear-gradient(to left, rgba(0, 0, 0, 0.9) 35%, transparent 90%)", height: "100%", borderRadius: "0px 20px 20px 0px"}}>
                    <ChevronRight width="40" height="40" />
                </button>

                {/* Scrollable Container */}
                <Row ref={ref} className="scrollable-container d-flex flex-nowrap gx-5 mx-3"  style={{borderRadius:"20px"}}>
                    {genres.map((genre) => (
                        <div 
                            className={`genre-blob ${manualSelectedGenres.includes(genre) ? 'selected-genre' : ''}`}
                            onClick={() => toggleGenre(genre)}
                        >
                        {genre}
                        </div>
                    ))}  
                </Row>
            </div>
            
            {/* Filtered Movies Section - Only shows when genres are selected */}
            {manualSelectedGenres.length > 0 && (
                <div className='mb-5'>
                <div className='header-recommend mb-3'>
                    {`Movies in: ${manualSelectedGenres.join(', ')}`}
                </div>
                <div className='mb-5 thumbnail-grid'>
                    {manualFilteredMovies.map((movie, index) => (
                    <div 
                        key={index} 
                        className='thumbnail' 
                        role="button" 
                        onClick={() => navigate(`/MovieDescription/${movie.MovieID}`)}
                    >
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

            {/* Recommended Movies Section (only for logged-in users based on liked genres) */}
            {currentUser && likedGenres.length > 0 && recommendedMovies.length > 0 && (
                <div className='mb-5'>
                <div className='header-recommend mb-3'>
                    {`Recommended Movies Based on Your Likes`}
                </div>
                <div className='mb-5 thumbnail-grid'>
                    {recommendedMovies.map((movie, index) => (
                    <div 
                        key={index} 
                        className='thumbnail' 
                        role="button" 
                        onClick={() => navigate(`/MovieDescription/${movie.MovieID}`)}
                    >
                        <img src={movie.Poster} alt={movie.Title} />
                    </div>
                    ))}
                </div>
                </div>
            )}




        </div>
    );
};

export default Home;

            
