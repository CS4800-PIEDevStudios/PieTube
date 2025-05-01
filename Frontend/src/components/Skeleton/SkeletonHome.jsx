import './skeleton.css';

const SkeletonHome = () => {
  return (
    <div className='d-flex flex-column mt-5 w-100' style={{ marginInline: "150px", overflow: "hidden", marginTop:"100px", height:"90vh"}}>
      <div className="mb-5 position-relative">
        <div className="d-flex gap-3 flex-nowrap overflow-hidden mx-2">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="skeleton" style={{ minWidth: '150px', height: '40px', borderRadius: '15px' }}></div>
          ))}
        </div>
      </div>

      {/* "Trending" title */}
      <div className="skeleton skeleton-text py-3 mb-4 mx-2" style={{ width: '150px', height: '60px', borderRadius: '5px' }}></div>

      {/* Movie thumbnail grid */}
      <div className="mb-5 thumbnail-grid" >
        {[...Array(50)].map((_, i) => (
          <div key={i} className="skeleton thumbnail"></div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonHome;
