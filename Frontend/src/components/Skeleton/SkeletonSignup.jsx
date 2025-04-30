import './skeleton.css';
const SkeletonSignup = () => {
  return (
      <div className="signup-container bg-light mb-5 p-5" style={{marginTop:"136px", borderRadius: "20px", boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.25)", minWidth:"500px"}}>  
        {/* Header */}
        <div className="skeleton skeleton-text mt-1 mb-3" style={{ width: "150px", height: "40px", margin: "0 auto" }}></div>
        {/* Input forms  */}
        <div class="d-flex flex-column align-items-start">
          {/* Username */}
          <div className="skeleton skeleton-text mb-1" style={{ width: "120px", height: "20px" }}></div>
          <div className="skeleton skeleton-btn w-100 mb-3" style={{ height: "35px" }}></div>
          {/* Email */}
          <div className="skeleton skeleton-text mb-1" style={{ width: "120px", height: "20px"}}></div>
          <div className="skeleton skeleton-btn w-100 mb-3" style={{ height: "35px" }}></div>
          {/* Password */}
          <div className="skeleton skeleton-text mb-1" style={{ width: "120px", height: "20px"}}></div>
          <div className="skeleton skeleton-btn w-100 mb-3" style={{ height: "35px" }}></div>
          {/* Confirm Password */}
          <div className="skeleton skeleton-text mb-1" style={{ width: "120px", height: "20px"}}></div>
          <div className="skeleton skeleton-btn w-100 mb-3" style={{ height: "35px" }}></div>
          {/* Buttons */}
          <div className="skeleton skeleton-btn w-100 mb-3" style={{ height: "35px" }}></div>
          <div className="skeleton skeleton-text mb-3 mx-2" style={{ width: "100px", height: "20px"}}></div>
        </div>        
      </div>
  );
};

export default SkeletonSignup;