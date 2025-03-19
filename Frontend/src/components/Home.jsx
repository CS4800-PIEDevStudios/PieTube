import React, { useState, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Row, Ratio } from 'react-bootstrap';
import { ChevronRight, ChevronLeft } from 'react-bootstrap-icons';
import pietubelogo from '../assets/pietubelogo.png';
import mepic from '../assets/me.png';
import {host} from '../App.jsx'

const Home = () => {
    const [movieData, setMovieData] = useState([]);
    const [userData, setUserData] = useState([]);
    const [actorData, setActorData] = useState([]);
    const [genreData, setGenreData] = useState([]);
    const [movieRoleData, setMovieRoleData] = useState([]);
    const [movieGenreData, setMovieGenreData] = useState([]);
    const [directorData, setDirectorData] = useState([]);
    const [trailerData, setTrailerData] = useState([]);
    const [recommendationData, setRecommendationData] = useState([]);
    

    const fetchData = () => {
        console.log("fetching...");
        axios.get(host + '/api/get-movie-data')
            .then(response => {
                console.log(response.data)
                setMovieData(response.data); // Assuming the response data is an array of objects
            })
            .catch(error => {
                console.error('There was an error!', error);
            });

            axios.get(host + '/api/get-user-data')
            .then(response => {
                console.log(response.data)
                setUserData(response.data); // Assuming the response data is an array of objects
            })
            .catch(error => {
                console.error('There was an error!', error);
            });

            axios.get(host + '/api/get-actor-data')
            .then(response => {
                console.log(response.data)
                setActorData(response.data); // Assuming the response data is an array of objects
            })
            .catch(error => {
                console.error('There was an error!', error);
            });

            axios.get(host + '/api/get-genre-data')
            .then(response => {
                console.log(response.data)
                setGenreData(response.data); // Assuming the response data is an array of objects
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
            axios.get(host + '/api/get-movie-role-data')
            .then(response => {
                console.log(response.data)
                setMovieRoleData(response.data); // Assuming the response data is an array of objects
            })
            .catch(error => {
                console.error('There was an error!', error);
            });

            axios.get(host + '/api/get-movie-genre-data')
            .then(response => {
                console.log(response.data)
                setMovieGenreData(response.data); // Assuming the response data is an array of objects
            })
            .catch(error => {
                console.error('There was an error!', error);
            });

            axios.get(host + '/api/get-director-data')
            .then(response => {
                console.log(response.data)
                setDirectorData(response.data); // Assuming the response data is an array of objects
            })
            .catch(error => {
                console.error('There was an error!', error);
            });

            axios.get(host + '/api/get-trailer-data')
            .then(response => {
                console.log(response.data)
                setTrailerData(response.data); // Assuming the response data is an array of objects
            })
            .catch(error => {
                console.error('There was an error!', error);
            });

            axios.get(host + '/api/get-recommendation-data')
            .then(response => {
                console.log(response.data)
                setRecommendationData(response.data); // Assuming the response data is an array of objects
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    };

    const ref = useRef(null);
    const [scrollInterval, setScrollInterval] = useState(null);


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
        
        <div className='d-flex flex-column' style={{ marginInline: "150px", overflowX: "hidden" }}>
            {/* Genres */}
            <div className='mb-5 ml-3 position-relative' >
                {/* Left Arrow Button */}
                <button  
                    onMouseEnter={() => startScrolling(-20)} 
                    onMouseLeave={stopScrolling} 
                    className='scroll-arrow' style={{zIndex: 1, left:"0", background: "linear-gradient(to right, rgba(0, 0, 0, 0.9 ) 35%, transparent 90%)", height: "100%", borderRadius: "20px 0px 0px 20px"}}>
                    <ChevronLeft width="40" height="40"/>
                </button>

                {/* Right Arrow Button */}
                <button                     
                    onMouseEnter={() => startScrolling(20)} 
                    onMouseLeave={stopScrolling} 
                    className='scroll-arrow' style={{zIndex: 1, right: "0", background: "linear-gradient(to left, rgba(0, 0, 0, 0.9 ) 35%, transparent 90%)", height: "100%", borderRadius: "0px 20px 20px 0px"}}>
                    <ChevronRight width="40" height="40" />
                </button>

                {/* Scrollable Container */}
                <Row ref={ref} className="d-flex flex-nowrap gx-5 ml-3 mr-3 " style={{ whiteSpace: "nowrap", overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
                    <div className='genre-blob'> Genre </div>
                    <div className='genre-blob'> Genre </div>
                    <div className='genre-blob'> Genre </div>
                    <div className='genre-blob'> Genre </div>
                    <div className='genre-blob'> Genre </div>
                    <div className='genre-blob'> Genre </div>
                    <div className='genre-blob'> Genre </div>
                    <div className='genre-blob'> Genre </div>
                    <div className='genre-blob'> Genre </div>
                    <div className='genre-blob'> Genre </div>
                    <div className='genre-blob'> Genre </div>
                    <div className='genre-blob'> Genre </div>
                    <div className='genre-blob'> Genre </div>
                    <div className='genre-blob'> Genre </div>
                    <div className='genre-blob'> Genre </div>
                    <div className='genre-blob'> Genre </div>
                    <div className='genre-blob'> Genre </div>
                    <div className='genre-blob'> Genre </div>
                    <div className='genre-blob'> Genre </div>
                    <div className='genre-blob'> Genre </div>
                    <div className='genre-blob'> Genre </div>
                    <div className='genre-blob'> Genre </div>
                    <div className='genre-blob'> Genre </div>
                    <div className='genre-blob'> Genre </div>
                    <div className='genre-blob'> Genre </div>
                    <div className='genre-blob'> Genre </div>
                    <div className='genre-blob'> Genre </div>
                    <div className='genre-blob'> Genre </div>
                    <div className='genre-blob'> Genre </div>
                    <div className='genre-blob'> Genre </div>
                    <div className='genre-blob'> Genre </div>
                </Row>
            </div>

            {/* Trending */}
            {/* <div className='header-recommend float-start mb-3'>Trending</div>
            <div className='mb-5' style={{display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', rowGap: '25px' }}>
                {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className='thumbnail' style={{ position: 'relative', paddingBottom: '56.25%', backgroundColor: '#8B8B8B' }}>
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>

                        </div>
                    </div>
                ))}
            </div> */}

            <div className='header-recommend float-start mb-3'>Trending</div>
            <div className='mb-5 thumbnail-grid'>
            {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className='thumbnail'>
                
                </div>
            ))}
            </div>

            {/* Recommended by Genre*/}
            <div className='header-recommend float-start mb-3'>Recommended by Genre</div>
            <div className='mb-5' style={{display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', rowGap: '25px' }}>
                <div className='thumbnail'> </div>
                <div className='thumbnail'> </div>
                <div className='thumbnail'> </div>
                <div className='thumbnail'> </div>
                <div className='thumbnail'> </div>
                <div className='thumbnail'> </div>
           </div>

            {/* Recommended Movies*/}
            <div className='header-recommend float-start mb-3'>Recommended Movies</div>
            <div className='mb-5' style={{display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', rowGap: '25px' }}>
                <div className='thumbnail'> </div>
                <div className='thumbnail'> </div>
                <div className='thumbnail'> </div>
                <div className='thumbnail'> </div>
                <div className='thumbnail'> </div>
                <div className='thumbnail'> </div>
                <div className='thumbnail'> </div>
                <div className='thumbnail'> </div>
                <div className='thumbnail'> </div>
                <div className='thumbnail'> </div>
                <div className='thumbnail'> </div>
                <div className='thumbnail'> </div>
                <div className='thumbnail'> </div>
                <div className='thumbnail'> </div>
                <div className='thumbnail'> </div>
                <div className='thumbnail'> </div>
                <div className='thumbnail'> </div>
                <div className='thumbnail'> </div>
                <div className='thumbnail'> </div>
                <div className='thumbnail'> </div>
                <div className='thumbnail'> </div>
                <div className='thumbnail'> </div>
                <div className='thumbnail'> </div>
                <div className='thumbnail'> </div>
            </div>
        </div>
    );
};


export default Home;

            