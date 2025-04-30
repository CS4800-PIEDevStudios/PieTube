import React from 'react';
import './skeleton.css';

const SkeletonHome = () => {
  return (
    <div className='d-flex flex-column mt-5' style={{ marginInline: "150px", overflow: "hidden", marginTop:"100px", height:"90vh"}}>
      {/* Genre Bar with fake scroll arrows */}
      <div className="mb-5 position-relative">
        {/* Fake genre buttons */}
        <div className="d-flex gap-3 flex-nowrap overflow-hidden mx-2">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="skeleton" style={{ width: '100px', height: '30px', borderRadius: '15px' }}></div>
          ))}
        </div>
      </div>

      {/* "Trending" title */}
      <div className="skeleton skeleton-text mb-4" style={{ width: '180px', height: '30px', borderRadius: '5px' }}></div>

      {/* Movie thumbnail grid */}
      <div className="mb-5 thumbnail-grid" >
        {[...Array(25)].map((_, i) => (
          <div key={i} className="skeleton thumbnail" ></div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonHome;
