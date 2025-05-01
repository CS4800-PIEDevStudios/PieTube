import './skeleton.css';

const SkeletonComments = () => {
  return (
    <div className="comment-section-background d-flex flex-column align-self-center pt-5 w-100">
      <div className="d-flex flex-column w-50 align-self-center">
        {/* Comments header */}
        <div className="d-flex pb-3" style={{ gap: "15px" }}>
          <div className="skeleton skeleton-text" style={{ width: "120px", height: "40px" }}></div>
        </div>
        
        {/* Comment input */}
        <div className="skeleton skeleton-btn mb-3" style={{ height: "250px", borderRadius: "10px"}}></div>
        
        {/* Submit button */}
        <div className="skeleton skeleton-btn mb-5" style={{ width: "100px", height: "40px", alignSelf: "flex-end" }}></div>
        
        {/* Comments list */}
        {[...Array(3)].map((_, index) => (
          <div key={index} className="mb-4">
            {/* Comment header */}
            <div className="d-flex align-items-center mb-2">
              <div className="skeleton skeleton-circle me-3" style={{ width: "40px", height: "40px", borderRadius: "50%" }}></div>
              <div className="skeleton skeleton-text" style={{ width: "120px", height: "20px" }}></div>
            </div>

            {/* Comment body */}
            <div className="skeleton skeleton-text mb-1" style={{ width: "100%", height: "20px" }}></div>
            <div className="skeleton skeleton-text mb-1" style={{ width: "80%", height: "20px" }}></div>
            <div className="skeleton skeleton-text" style={{ width: "60%", height: "20px" }}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonComments;