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
                <div className='d-flex align-items-start mb-4'>
                    {/* Title and Stats */}
                    <div className='d-flex flex-column align-items-start align-self-end' style={{ flex: 1 }}>
                        {/* Title */}
                        <div className='skeleton skeleton-text mb-3' style={{ width: '500px',  height: '80px' 
                        }}></div>
                        
                        {/* Stats and Buttons */}
                        <div className='d-flex align-items-center mb-3' style={{ gap: '20px' }}>
                            <div className='skeleton skeleton-text' style={{ width: '200px', height: '40px' }}></div>
                            <div className='skeleton skeleton-btn' style={{ width: '200px', height: '60px' }}></div>
                            <div className='skeleton skeleton-btn' style={{ width: '200px', height: '60px' }}></div>
                            <div className='skeleton skeleton-btn' style={{ width: '100px', height: '60px' }}></div>
                        </div>
                    </div>
                    
                    {/* Rating and Poster */}
                    <div className='d-flex align-items-end' style={{ gap: '20px' }}>
                        <div className='skeleton skeleton-text' style={{ width: '80px', height: '60px' }}></div>
                        <div className='skeleton skeleton-text movie-description-thumbnail' style={{width:"300px", height:"450px"}}></div>
                    </div>
                </div>
                
                {/* Bottom Description Section */}
                <div className='d-flex' style={{ gap: '100px' }}>
                    {/* Left Column (Description) */}
                    <div className='d-flex flex-column flex-fill' style={{ maxWidth: '1500px' }}>
                        {/* Genres */}
                        <div className='d-flex flex-wrap' style={{ gap: '15px' }}>
                            {[...Array(4)].map((_, index) => (
                                <div key={index} className='skeleton skeleton-pic mb-5' style={{ width: '100px', height: '40px', borderRadius: '15px'
                                }}></div>
                            ))}
                        </div>
                        
                        {/* Contributors */}
                        <div className='mb-5'>
                            <div className='d-flex mb-3' style={{ gap: '15px' }}>
                                <div className='skeleton skeleton-text mr-3' style={{ width: '80px', height: '25px' }}></div>
                                <div className='skeleton skeleton-text' style={{ width: '200px', height: '20px' }}></div>
                            </div>
                            <div className='d-flex' style={{ gap: '15px' }}>
                                <div className='skeleton skeleton-text mr-3' style={{ width: '50px', height: '25px' }}></div>
                                <div className='d-flex flex-wrap' style={{ gap: '10px' }}>
                                    {[...Array(5)].map((_, index) => (
                                        <React.Fragment key={index}>
                                            <div className='skeleton skeleton-text' style={{ width: '80px', height: '20px' }}></div>
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                        {/* Description */}
                        <div className='mb-5'>
                            {[...Array(4)].map((_, index) => (
                                <div key={index} className='skeleton skeleton-text mb-2' style={{ 
                                    width: `${90 - (index * 5)}%`, 
                                    height: '20px' 
                                }}></div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Right Column (Trailer) */}
                    <div id='MovieDescriptionTrailer' className='d-flex flex-column align-items-end flex-fill' style={{ maxWidth: '800px' }}>
                        <div className='skeleton skeleton-text mb-3 align-self-start' style={{ width: '80px', height: '30px' }}></div>
                        <iframe className='skeleton w-100' style={{ maxWidth:"800px",height: '400px', borderRadius: '8px' }}></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonMovieDescription;