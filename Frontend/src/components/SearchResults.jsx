import VideoCard from "./VideoCard";
const SearchResults = () => {
    return (
        <div className="d-flex flex-column w-50 pt-5 pb-5" style={{ gap:"50px", marginTop:"100px"}}>
            {/* Header */}
            <div className="d-flex flex-column align-self-start align-items-start">
                <h1>Results for:</h1>
                <h3 className='text-muted'>Spider-man: Across the Spider-Verse</h3>
            </div>
            {/* VideoCards */}
            <VideoCard/>    
            <VideoCard/>  
            <VideoCard/>  
            <VideoCard/>  
            <VideoCard/>  
            <VideoCard/>  
        </div>
    );
};

export default SearchResults;