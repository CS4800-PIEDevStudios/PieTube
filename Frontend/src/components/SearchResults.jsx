const SearchResults = () => {
    return (
        <div className="d-flex flex-column w-50 pt-5" style={{height:"100vh"}}>
            {/* Header */}
            <div className="d-flex flex-column align-self-start align-items-start">
                <h1>Results for:</h1>
                <h3 className="text-muted">Spider-man: Across the Spider-Verse</h3>
            </div>
            {/* Results */}
            <div className="d-flex flex">
                {Array.from({ length: 8 }).map((_, index) => (
                    <div key={index} className='thumbnail' role="button">
                        <img src = {KingKongThumb}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchResults;