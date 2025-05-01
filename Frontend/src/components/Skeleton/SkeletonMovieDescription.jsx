import React from 'react';
import './skeleton.css';

const SkeletonMovieDescription = () => {
    return (
        <div id="MovieDescription" className='d-flex flex-column w-100 position-relative justify-content-center'>
            {/* Background Image Skeleton */}
            <div className='skeleton skeleton-text movie-description-background-thumbnail'></div>
            
            {/* Movie Details Section */}
            <div className='d-flex flex-column p-5' style={{ zIndex: 2 }}>
                {/* Title and Poster Section */}
                <div className='d-flex align-items-start mb-2'>
                    {/* Title and Stats */}
                    <div className='d-flex flex-column align-items-start align-self-end' style={{ flex: 1 }}>
                        {/* Title */}
                        <div className='skeleton skeleton-text mb-3' style={{ width: '20vw',  height: '8vh' 
                        }}></div>
                        
                        {/* Stats and Buttons */}
                        <div className='d-flex align-items-center mb-3' style={{ gap: '2vh' }}>
                            <div className='skeleton skeleton-text' style={{ width: '20vh', height: '3vh' }}></div>
                            <div className='skeleton skeleton-btn' style={{ width: '20vh', height: '4vh' }}></div>
                            <div className='skeleton skeleton-btn' style={{ width: '20vh', height: '4vh' }}></div>
                            <div className='skeleton skeleton-btn' style={{ width: '10vh', height: '4vh' }}></div>
                        </div>
                    </div>
                    
                    {/* Rating and Poster */}
                    <div className='d-flex align-items-end' style={{ gap: '2vh' }}>
                        <div className='skeleton skeleton-text' style={{ width: '10vh', height: '6vh' }}></div>
                        <div className='skeleton skeleton-text movie-description-thumbnail' style={{width:"10vw", height:"30vh"}}></div>
                    </div>
                </div>
                
                {/* Bottom Description Section */}
                <div className='d-flex' style={{ gap: '10vw' }}>
                    {/* Left Column (Description) */}
                    <div className='d-flex flex-column flex-fill' style={{ maxWidth: '1500px' }}>
                        {/* Genres */}
                        <div className='d-flex flex-wrap' style={{ gap: '15px' }}>
                            {[...Array(4)].map((_, index) => (
                                <div key={index} className='skeleton skeleton-pic mb-3' style={{ width: '5vw', height: '4vh', borderRadius: '15px'
                                }}></div>
                            ))}
                        </div>
                        
                        {/* Contributors */}
                        <div className='mb-5'>
                            <div className='d-flex mb-3' style={{ gap: '15px' }}>
                                <div className='skeleton skeleton-text mr-3' style={{ width: '6vw', height: '4vh' }}></div>
                                <div className='skeleton skeleton-text' style={{ width: '20vw', height: '3vh' }}></div>
                            </div>
                            <div className='d-flex' style={{ gap: '15px' }}>
                                <div className='skeleton skeleton-text mr-3' style={{ width: '5vw', height: '4vh' }}></div>
                                <div className='d-flex flex-wrap' style={{ gap: '10px' }}>
                                    {[...Array(5)].map((_, index) => (
                                        <React.Fragment key={index}>
                                            <div className='skeleton skeleton-text' style={{ width: '5vw', height: '3vh' }}></div>
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                        {/* Description */}
                        <div className='mb-5'>
                            {[...Array(3)].map((_, index) => (
                                <div key={index} className='skeleton skeleton-text mb-2' style={{ 
                                    width: `${90 - (index * 5)}%`, 
                                    height: '20px' 
                                }}></div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Right Column (Trailer) */}
                    <div id='MovieDescriptionTrailer' className='d-flex flex-column align-items-end flex-fill' style={{ maxWidth: '80vw' }}>
                        <div className='skeleton skeleton-text mb-3 align-self-start' style={{ width: '6vw', height: '5vh' }}></div>
                        <iframe className='skeleton w-100' style={{ maxWidth:"50vw",height: '30vh', borderRadius: '8px' }}></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonMovieDescription;