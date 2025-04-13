import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import VideoCard from "./VideoCard";

const SearchResults = () => {
    const [headerName, setHeaderName] = useState('');
    const [fromFilter, setFromFilter] = useState(false);
    const location = useLocation();
    const savedText = location.state?.savedText || '';
    const selectedGenres = location.state?.selectedGenres || [];
    const selectedRating = location.state?.selectedRating || null;

    const ratings = [ "G", "PG", "PG-13", "R", "NC-17", "M" ];

    useEffect(() => {
        const fromFilterStatus = localStorage.getItem('isFromFilter') === 'true'; 
        const nameOfHeader = localStorage.getItem('HeaderName');
        setFromFilter(fromFilterStatus);
        setHeaderName(nameOfHeader);
    }, []);

    const renderHeader = () => {
        if (headerName === 'searchResults') {
            return (
                <>
                    <h1>Results for:</h1>
                    {fromFilter ? (
                        <div className='d-flex flex-column' style={{ rowGap: "20px" }}>
                            <div className="d-flex flex-wrap" style={{ gap: "10px" }}>
                                {ratings.map(rating => (
                                    <div
                                        key={rating}
                                        className={`rating-blob ${selectedRating === rating ? 'selected-rating' : ''}`}
                                    >
                                        {rating}
                                    </div>
                                ))}
                            </div>
                        
                            <div className='d-flex justify-items-start'>
                                {selectedGenres.map((genre, index) => (
                                    <span key={index} className="filter-genre-blob">
                                        {genre}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <h2 className='search-result-header-text text-muted'>{savedText}</h2>
                    )}
                </>
            );
        } else if (headerName === 'watchList') {
            return <h1>Watch List</h1>;
        } else if (headerName === 'trending') {
            return <h1>Trending</h1>;
        }
        return null;
    };

    return (
        <div className="d-flex flex-column w-50 pt-5 pb-5" style={{ gap: "50px" }}>
            {/* Header */}
            <div className="search-results-text d-flex flex-column align-self-start align-items-start">
                {renderHeader()}
            </div>

            {/* VideoCards */}
            <VideoCard />    
            <VideoCard />  
            <VideoCard />  
            <VideoCard />  
            <VideoCard />  
            <VideoCard />  
        </div>
    );
};

export default SearchResults;