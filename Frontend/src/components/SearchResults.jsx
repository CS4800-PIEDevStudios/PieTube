import { useNavigate,useLocation } from 'react-router-dom';
import VideoCard from "./VideoCard";
import axiosInstance from '../axiosConfig.js';
import { useState, useEffect } from 'react';

const SearchResults = () => {
    // Use states
    const [searchResults, setSearchResults] = useState([]); 
    const [headerName, setHeaderName] = useState('');
    const [fromFilter, setFromFilter] = useState(false);

    // Navigation hook
    const navigate = useNavigate();

    // Location
    const location = useLocation()
    const {selectedGenres, excludedGenres, selectedRatings, savedText} = location.state || {};  //retreive selected genres

    const ratings = [ "G", "PG", "PG-13", "R", "NC-17", "M", "NR", "Passed", "Approved" ];

    useEffect(() => {
        let genreResults = [];
        let ratingResults = [];
        
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
                setSearchResults([]);
            }
        };
    }, [selectedGenres, excludedGenres, selectedRatings]);


    useEffect(() => {
        const fromFilterStatus = localStorage.getItem('isFromFilter') === 'true'; 
        const nameOfHeader = localStorage.getItem('HeaderName');
        setFromFilter(fromFilterStatus);
        setHeaderName(nameOfHeader);
    }, []);

    //Choose between headers based on where user clicked in from
    const renderHeader = () => {
        if (headerName === 'searchResults') {
            return (
                <>
                    <h1 className='search-results-header'>Results for:</h1>
                    {/* Shows chosen genres and age rating if coming from genre filter, otherwise text from search bar */}
                    {fromFilter ? (
                        <div className='d-flex flex-column' style={{ rowGap: "20px" }}>
                            {/* Age ratings */}
                            <div className="d-flex flex-wrap" style={{ gap: "10px" }}>
                                {ratings.map(rating => (
                                    <div
                                        key={rating}
                                        className={`rating-blob ${selectedRatings?.includes(rating) ? 'selected-rating' : ''}`}
                                    >
                                        {rating}
                                </div>
                                ))}
                            </div>
                            {/* Genres */}
                            <div className="genre-filters-container d-flex flex-wrap align-items-center" style={{ gap: "10px" }}>
                                {/* Included Genres */}
                                <div className="d-flex flex-wrap" style={{ gap: "10px" }}>
                                    {selectedGenres?.length > 0 ? (
                                        selectedGenres.map((genre, index) => (
                                            <span key={`included-${index}`} className="filter-genre-blob">
                                                {genre}
                                            </span>
                                        ))
                                    ) : (
                                        <h2 className="text-muted">No included genres</h2>
                                    )}
                                </div>

                                {/* Separator if both types exist */}
                                {selectedGenres?.length > 0 && excludedGenres?.length > 0 && (
                                    <h2 className="text-muted mx-2">|</h2>
                                )}

                                {/* Excluded Genres */}
                                {excludedGenres?.length > 0 && (
                                    <div className="d-flex flex-wrap align-items-center" style={{ gap: "10px" }}>
                                        <h2 className="excluded-label">Excluded:</h2>
                                        {excludedGenres.map((genre, index) => (
                                            <span key={`excluded-${index}`} className="filter-genre-blob-excluded">
                                                {genre}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : (
                        // Text entered into search bar
                        <h2 className='search-result-header-text text-muted'>{savedText}</h2>
                    )}
                </>
            );
        } else if (headerName === 'watchList') {
            return <h1 className='search-results-header'> Watch List </h1>;
        } else if (headerName === 'trending') {
            return <h1 className='search-results-header'> Trending </h1>;
        }
        return null;
    };

    
    return (
        <div className="search-results-container d-flex flex-column w-50 pt-5 pb-5" style={{ gap:"50px",}}>
            {/* Header */}
            <div className="search-results-text d-flex flex-column align-self-start align-items-start">
                {renderHeader()}
            </div>
            {/* VideoCards */}
            {/* {searchResults.length > 0 ? (
                searchResults.map((movie, index) => (
                    <div key={index} className="search-results d-flex" style={{ gap: "30px" }}>
                        <div className='video-card-thumbnail' role="button" onClick={() => navigate(`/MovieDescription/${movie.MovieID}`)}>
                            <img src={movie.Poster} alt={movie.Title} />
                        </div>
                        <div className='d-flex flex-column'>
                            <h1 className="video-card-movie-title">{movie.Title}</h1>
                            <p className="video-card-summary">{movie.Summary}</p>
                            <div id = 'Genres' className ='d-flex flex-wrap' style={{ gap: "8 px"}}>
                                {movie.Genres?.map((genre, index) => (
                                    <div key={index} className='video-card-genre-blob'>
                                        {genre}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <h3 className='search-results-subtitle text-muted'>No matching results found.</h3>
            )} */}
            {searchResults.length > 0 ? (
                searchResults.map((movie) => (
                    <VideoCard
                        key={movie.MovieID}
                        movie={movie}
                    />
                ))
            ) : (
                <h3 className='search-results-subtitle text-muted'>No matching results found.</h3>
            )}
        </div>
    );
};

export default SearchResults;