const ratings = [ "G", "PG", "PG-13", "R", "NC-17", "M", "NR", "Passed", "Approved" ];

const RenderSearchHeader = ({ headerName, fromFilter, selectedGenres, excludedGenres, selectedRatings, savedText }) => {
    if (headerName === 'searchResults') {
        return (
            <>
                <h1>Results for:</h1>
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
    } else if (headerName === 'trending') {
        return <h1 className='search-results-header'> Trending </h1>;
    }
    return null;
};

export default RenderSearchHeader;