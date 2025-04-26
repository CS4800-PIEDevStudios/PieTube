import { useLocation } from 'react-router-dom';
import axiosInstance from '../axiosConfig.js';
import { useState, useEffect } from 'react';
import VideoCard from './VideoCard';

const WatchList = () => {
    // Use states
    const [searchResults, setSearchResults] = useState([]); 

    const handleDelete = (id) => {
        setSearchResults(searchResults.filter(result => result.MovieID !== id));
    };

    // Location
    const location = useLocation()

    useEffect(() => {
        getWatchlist();
    }, [location]);

    async function getWatchlist()
    {
        const response = await axiosInstance.get('api/get-watchlist');
        console.log(response.data);
        setSearchResults(response.data)
    }

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
                        headerName='watchList'
                        onDelete={handleDelete}
                    />
                ))
            ) : (
                <h3 className='search-results-subtitle text-muted'>Watch List is empty</h3>
            )}
        </div>
    );
};

export default WatchList;