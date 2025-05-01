import './skeleton.css';
import SkeletonComments from './SkeletonComments';

const SkeletonMoviePlayer = () => {
    return (
        <div className='movie-player-background d-flex flex-column pt-5' style={{width:'100vw'}}> 
            {/* Movie player iframe skeleton */}
            <div id='MoviePlayer' className='d-flex flex-column align-self-center'>
                <iframe className="skeleton movie-player" style={{ width:"50vw", borderRadius: '8px'}}></iframe>
            </div>

            {/* Button skeletons */}
            <div className='d-flex align-self-end mb-5 mx-5' style={{ columnGap: "20px"}}>
                <div className="skeleton skeleton-btn d-flex custom-btn align-items-center justify-content-center" style={{  width: '200px', height: '50px', borderRadius: '8px' }}></div>
                <div className="skeleton skeleton-btn d-flex custom-btn align-items-center justify-content-center" style={{  width: '200px', height: '50px', borderRadius: '8px' }}></div>
            </div>

            {/* Movie description skeleton */}
            <div className="skeleton skeleton-text d-flex flex-column " style={{ height: "500px"}}> </div>
            
            {/* Comments section skeleton */}
            <SkeletonComments />
        </div>

    );
};

export default SkeletonMoviePlayer;