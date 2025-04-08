import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import VideoCard from "./VideoCard";

const SearchResults = () => {
    const [fromFilter, setFromFilter] = useState(false); // Fixed typo: userState → useState
    const location = useLocation();
    const savedText = location.state?.savedText || '';
    const selectedGenres = location.state?.selectedGenres || [];

    const ratings = [ "G", "PG", "PG-13", "R", "NC-17", "M" ];

    useEffect(() => {
        const fromFilterStatus = localStorage.getItem('isFromFilter') === 'true'; // Fixed comparison
        setFromFilter(fromFilterStatus);
    }, []);

    return (
        <div className="d-flex flex-column w-50 pt-5 pb-5" style={{ gap: "50px" }}>
            {/* Header */}
            <div className="search-results-text d-flex flex-column align-self-start align-items-start">
                <h1>Results for:</h1>

                {fromFilter ? (
                    <h2 className='text-muted'>{savedText}</h2>
                ) : (
                    <div>
                        <div>
                            {ratings.map((ratings, index) => (
                                <React.Fragment key={index}>
                                    <div 
                                        className={` ${selectedGenres.includes(genre) ? 'selected-genre' : ''}`}
                                    >
                                    {ratings}
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                        <div>
                        {selectedGenres.map((genre, index) => (
                            <span key={index} className="filter-genre-blob">
                                {genre}
                            </span>
                        ))}
                        </div>
                    </div>

                )}
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