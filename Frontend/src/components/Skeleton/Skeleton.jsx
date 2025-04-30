import React from 'react';
import './skeleton.css';

const Skeleton = ({ type }) => {
  if (type === "header") {
    return <div className="skeleton skeleton-header" />;
  }
  if (type === "home") {
    return (
      <div className="skeleton-home">
        <div className="skeleton skeleton-banner" />
        <div className="skeleton skeleton-row" />
        <div className="skeleton skeleton-row" />
      </div>
    );
  }
  return null;
};

export default Skeleton;
