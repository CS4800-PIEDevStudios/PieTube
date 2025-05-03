import { useLocation } from 'react-router-dom';
import axiosInstance from '../axiosConfig.js';
import { useState, useEffect } from 'react';
import VideoCard from './VideoCard';
import RenderSearchHeader from './RenderSearchHeader.jsx';

const SearchResults = () => {
    // Use states
    const [searchResults, setSearchResults] = useState([]); 
    const [headerName, setHeaderName] = useState('');
    const [fromFilter, setFromFilter] = useState(false);

    // Location
    const location = useLocation()
    const {selectedGenres, excludedGenres, selectedRatings, savedText} = location.state || {};  //retreive selected genres

    const ratings = [ "G", "PG", "PG-13", "R", "NC-17", "M", "NR", "Passed", "Approved" ];

    useEffect(() => {
        if (savedText && savedText.trim()) {
            axiosInstance
              .get('api/search-movies', {
                params: { query: savedText }
              })
              .then(response => {
                const titleMatches = response.data.title_matches || [];
                const descriptionMatches = response.data.description_matches || [];
                setSearchResults([...titleMatches, ...descriptionMatches]);
              })
              .catch(error =>
                console.error('Error fetching text search results:', error)
              );

            return;
          }
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
            // If a rating filter was applied but no movies match, show nothing
            if (selectedRatings?.length && ratingResults.length === 0) {
                setSearchResults([]);
                return;
            }
            
            // If both genre and rating filters were applied, display both
            if (selectedGenres?.length && selectedRatings?.length) {
                const finalResults = genreResults.filter(movie =>
                ratingResults.some(ratingMovie => ratingMovie.MovieID === movie.MovieID)
                );
                setSearchResults(finalResults);
            } 
            // If only genre filter is applied
            else if (selectedGenres?.length) {
                setSearchResults(genreResults);
            } 
            // If only rating filter is applied
            else if (selectedRatings?.length) {
                setSearchResults(ratingResults);
            } 
            // If no filters were applied, show all results
            else {
                setSearchResults(allResults);
            }
            };
    }, [selectedGenres, excludedGenres, selectedRatings]);


    useEffect(() => {
        const fromFilterStatus = localStorage.getItem('isFromFilter') === 'true'; 
        const nameOfHeader = localStorage.getItem('HeaderName');
        setFromFilter(fromFilterStatus);
        setHeaderName(nameOfHeader);
    }, []);

    return (
        <div className="search-results-container d-flex flex-column w-50 pt-5 pb-5" style={{ gap:"50px" }}>
            {/* Header */}
            <div className="search-results-text d-flex flex-column align-self-start align-items-start">
                <RenderSearchHeader 
                    headerName={headerName}
                    fromFilter={fromFilter}
                    selectedGenres={selectedGenres}
                    excludedGenres={excludedGenres}
                    selectedRatings={selectedRatings}
                    savedText={savedText}
                />
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
                <h3 className='search-results-subtitle text-muted'>No matching results found.</h3>
            )}
        </div>
    );
};

export default SearchResults;