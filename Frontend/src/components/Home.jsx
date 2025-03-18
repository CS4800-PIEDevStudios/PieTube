import React, { useState, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Row, Ratio } from 'react-bootstrap';
import { ChevronRight, ChevronLeft } from 'react-bootstrap-icons';
import pietubelogo from '../assets/pietubelogo.png';
import mepic from '../assets/me.png';

const Home = () => {
    const host = "http://127.0.0.1:8000";
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
            <div className='mb-5 ml-3 position-relative' style={{background: "linear-gradient(to left, rgba(0, 0, 0, 0.8 ) 0%, transparent 10%)"}}>
                {/* Left Arrow Button */}
                <button 
                    onMouseEnter={() => startScrolling(-20)} 
                    onMouseLeave={stopScrolling} 
                    className='scroll-arrow' style={{zIndex: 1, left:"0" }}>
                    <ChevronLeft width="40" height="40" />
                </button>

                {/* Right Arrow Button */}
                <button                     
                    onMouseEnter={() => startScrolling(20)} 
                    onMouseLeave={stopScrolling} 
                    className='scroll-arrow' style={{zIndex: 1, right: "0" }}>
                    <ChevronRight width="40" height="40" />
                </button>

                {/* <div 
            style={{ 
                position: "absolute",
                right: 0,
                width:"1000px",
                height:"50px",
                pointerEvents: "none", // Ensure clicks pass through to the buttons
                background: "linear-gradient(to left, rgba(0, 0, 0, 0.8 ) 0%, transparent 10%)",
                zIndex: 0 // Place it below the buttons but above the genre blobs
            }}
        /> */}
                {/* Scrollable Container */}
                <Row ref={ref} className="d-flex flex-nowrap gx-5 ml-3" style={{ whiteSpace: "nowrap", overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
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
            <div className='headerrecommend float-start mb-3'>Trending</div>
            <div className='mb-5' style={{display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', rowGap: '25px' }}>
                {/* <div className='thumbnail ratio-16x9'> </div> */}
                {/* <div className='thumbnail'> </div>
                <div className='thumbnail'> </div>
                <div className='thumbnail'> </div>
                <div className='thumbnail'> </div>
                <div className='thumbnail'> </div> */}
                     {/* <div className='ratio-16x9'>
                        <img src={mepic} className='img-fluid' style={{backgroundColor:"#8B8B8B"}}/>
                    </div>
                <div className="ratio ratio-16x9">
                    <iframe
                        src="https://www.youtube.com/embed/vlDzYIIOYmM"
                        title="YouTube video"
                        allowfullscreen
                    ></iframe>
                </div> */}                <>
                {['1x1', '4x3', '16x9', '21x9'].map((ratio) => (
                    <Ratio key={ratio} aspectRatio={ratio}>
                    <div style={{backgroundColor:"grey"}}>{ratio}</div>
                    </Ratio>
                ))}
                </>
            </div>

            {/* Recommended by Genre*/}
            <div className='headerrecommend float-start mb-3'>Recommended by Genre</div>
            <div className='mb-5' style={{display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', rowGap: '25px' }}>
                <div className='thumbnail'> </div>
                <div className='thumbnail'> </div>
                <div className='thumbnail'> </div>
                <div className='thumbnail'> </div>
                <div className='thumbnail'> </div>
                <div className='thumbnail'> </div>
           </div>

            {/* Recommended Movies*/}
            <div className='headerrecommend float-start mb-3'>Recommended Movies</div>
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

            