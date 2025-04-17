import { useLocation } from 'react-router-dom';
import axiosInstance from '../axiosConfig.js';
import { useState, useEffect } from 'react';
import VideoCard from './VideoCard';

const WatchList = () => {
    // Use states
    const [searchResults, setSearchResults] = useState([]); 
    const [headerName, setHeaderName] = useState('');

    // Location
    const location = useLocation()
    const {selectedGenres, excludedGenres, selectedRatings} = location.state || {};  //retreive selected genres

    useEffect(() => {
        const nameOfHeader = localStorage.getItem('HeaderName');
        setHeaderName(nameOfHeader);
    }, []);

    useEffect(() => {
        let genreResults = [];
        let ratingResults = [];
        let allResults = [];

        //Fetches genre data
        if (selectedGenres?.length) {
            axiosInstance.get('api/filter-genres', {
                params: { genres: selectedGenres.join(','), excludedGenres: excludedGenres.join(',') }
            })
            .then(response => {
                genreResults = response.data;
                checkFinalResults();
            })
            .catch(error => console.error('Error fetching genre search results:', error));
        }

        //Fetches age rating data
        if (selectedRatings?.length) {
            axiosInstance.get('api/filter-age-rating', {
                params: { ratings: selectedRatings.join(',') }
            })
            .then(response => {
                ratingResults = response.data;
                checkFinalResults();
            })
            .catch(error => console.error('Error fetching age rating results:', error));
        }
        console.log("TEST")
        axiosInstance.get('api/get-movie-data')
        .then(response => {
            allResults = response.data;
            checkFinalResults();
        })
        .catch(error => {
            console.error('There was an error!', error);
        });

        // Returns matching movies
        const checkFinalResults = () => {
            if (genreResults.length && ratingResults.length) {
                const finalResults = genreResults.filter(movie => 
                    ratingResults.some(ratingMovie => ratingMovie.MovieID === movie.MovieID)
                );
                setSearchResults(finalResults);
            } else if (genreResults.length) {
                setSearchResults(genreResults);
            } else if (ratingResults.length) {
                setSearchResults(ratingResults);
            } else {
                setSearchResults(allResults);
            }

            console.log("SEARCH RESULTS" + searchResults)
        };
    }, [selectedGenres, excludedGenres, selectedRatings]);

    return (
        <div className="search-results-container d-flex flex-column w-50 pt-5 pb-5" style={{ gap:"50px",}}>
            {/* Header */}
            <div className="search-results-text d-flex flex-column align-self-start align-items-start">
                <h1 className='search-results-header'> Watch List </h1>
            </div>
            {/* VideoCards */}
            {searchResults.length > 0 ? (
                searchResults.map((movie) => (
                    <VideoCard
                        key={movie.MovieID}
                        movie={movie}
                        headerName={headerName}
                    />
                ))
            ) : (
                <h3 className='search-results-subtitle text-muted'>Watch List is empty</h3>
            )}
        </div>
    );
};

export default WatchList;