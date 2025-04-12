import { useNavigate,useLocation } from 'react-router-dom';
import VideoCard from "./VideoCard";
import axiosInstance from '../axiosConfig.js';
import { useState, useEffect } from 'react';




const SearchResults = () => {

    const location = useLocation()
    const {selectedGenres, excludedGenres, selectedRatings} = location.state || {};  //retreive selected genres
    const navigate = useNavigate();
    const [searchResults, setSearchResults] = useState([]); 

    useEffect(() => {
        let genreResults = [];
        let ratingResults = [];
    

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
    
    

    return (
        <div className="d-flex flex-column w-50 pt-5 pb-5" style={{ gap:"50px"}}>
            {/* Header */}
            <div className="search-results-text d-flex flex-column align-self-start align-items-start">
                <h1>Results for:</h1>
                <h2 className="text-muted">
                    {selectedGenres?.join(', ') || 'No genre filters applied'}
                    {selectedRatings?.length > 0 ? ` | ${selectedRatings.join(', ')}` : ''}
                </h2>
                {excludedGenres?.length > 0 && (
                    <div className="excluded">
                        <h1 className="search-results-text d-flex flex-column align-self-start align-items-start">Excluded:</h1>
                        <h2 className="text-muted" style={{ fontSize: "1.5rem" }}>{excludedGenres.join(', ')}</h2>
                    </div>
                )}
            </div>
            {/* VideoCards */}
            {searchResults.length > 0 ? (
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
                <h3 className='text-muted'>No matching results found.</h3>
            )}

        </div>
    );
};

export default SearchResults;