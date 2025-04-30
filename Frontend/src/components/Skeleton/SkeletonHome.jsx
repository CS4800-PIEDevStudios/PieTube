import React from 'react';
import './skeleton.css';

const SkeletonHome = () => {
  return (
    <div className="mt-5 px-5" style={{ marginTop: "60px" }}>
      {/* Genre Bar with fake scroll arrows */}
      <div className="mb-5 position-relative">
        {/* Left arrow */}
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0, width: "50px",
          background: "linear-gradient(to right, rgba(0,0,0,0.7), transparent)",
          borderRadius: "20px 0 0 20px", zIndex: 2
        }} />

        {/* Right arrow */}
        <div style={{
          position: "absolute", right: 0, top: 0, bottom: 0, width: "50px",
          background: "linear-gradient(to left, rgba(0,0,0,0.7), transparent)",
          borderRadius: "0 20px 20px 0", zIndex: 2
        }} />

        {/* Fake genre buttons */}
        <div className="d-flex gap-3 flex-nowrap overflow-hidden px-5">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="skeleton" style={{ width: '100px', height: '30px', borderRadius: '15px' }}></div>
          ))}
        </div>
      </div>

      {/* "Trending" title */}
      <div className="skeleton skeleton-text mb-4" style={{ width: '180px', height: '30px', borderRadius: '5px' }}></div>

      {/* Movie thumbnail grid */}
      <div className="d-flex flex-wrap gap-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="skeleton" style={{ width: '150px', height: '220px', borderRadius: '10px' }}></div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonHome;
