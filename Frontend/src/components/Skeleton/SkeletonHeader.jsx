import React from 'react';
import './skeleton.css';

const SkeletonHeader = () => {
  return (
    <div className="navbar-header d-flex w-100 px-5 justify-content-between align-items-center bg-light" style={{ height: '80px', zIndex: 2 }}>
      {/* Logo placeholder */}
      <div className="skeleton" style={{ width: '120px', height: '40px', borderRadius: '8px' }}></div>

      {/* Navigation links: Home, Trending, Watch List */}
      <div className="d-flex gap-4 flex-fill justify-content-center">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="skeleton"
            style={{ width: '80px', height: '30px', borderRadius: '5px' }}
          ></div>
        ))}
      </div>

      {/* Right section: Search bar + Filter + Profile/Sign-in */}
      <div className="d-flex align-items-center gap-3">
        {/* Search bar input */}
        <div
          className="skeleton"
          style={{ width: '200px', height: '40px', borderRadius: '10px' }}
        ></div>

        {/* Filter button */}
        <div
          className="skeleton"
          style={{ width: '40px', height: '40px', borderRadius: '50%' }}
        ></div>

        {/* Profile pic or sign-in */}
        <div
          className="skeleton"
          style={{ width: '40px', height: '40px', borderRadius: '50%' }}
        ></div>
      </div>
    </div>
  );
};

export default SkeletonHeader;
