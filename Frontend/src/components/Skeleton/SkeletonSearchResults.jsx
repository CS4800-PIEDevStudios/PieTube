import './skeleton.css';


const SearchResults = () => {

    return (
        <div className="search-results-container d-flex flex-column w-50 pt-5 pb-5" style={{ gap:"45px" }}>
            {/* Header */}
            <div className="search-results-text d-flex flex-column align-self-start align-items-start">
                <div className="skeleton skeleton-text mb-3" style={{ width: '180px', height: '45px', borderRadius: '5px' }}></div>
                <div className="skeleton skeleton-text" style={{ width: '250px', height: '35px', borderRadius: '5px' }}></div>
            </div>
            {/* VideoCards */}
            <div className="d-flex flex-column" style={{gap:"30px"}}>
                {[...Array(25)].map((_, i) => (
                <div key={i} className="d-flex align-items-center" style={{gap:"30px"}}>
                    <div className='skeleton video-card-thumbnail' style={{border:"transparent"}}><img /></div>
                    <div className="skeleton skeleton-btn w-100 h-100 " ></div>
                </div>
                ))}
            </div>
        </div>
    );
};

export default SearchResults;