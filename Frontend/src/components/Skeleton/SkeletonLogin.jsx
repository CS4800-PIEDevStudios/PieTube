import './skeleton.css';
const SkeletonLogin = () => {
  return (
      <div class="p-5 bg-light mb-5" style={{marginTop: "136px", borderRadius: "20px", boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.25)", minWidth:"500px", minHeight:"500px"}}>
        {/* Header */}
        <div className="skeleton skeleton-text mt-1 mb-3" style={{ width: "150px", height: "40px", margin: "0 auto" }}></div>
        {/* Input forms  */}
        <div class="d-flex flex-column align-items-start">
          {/* Username */}
          <div className="skeleton skeleton-text mb-1" style={{ width: "120px", height: "20px" }}></div>
          <div className="skeleton skeleton-btn w-100 mb-3" style={{ height: "35px" }}></div>
          {/* Password */}
          <div className="skeleton skeleton-text mb-1" style={{ width: "120px", height: "20px"}}></div>
          <div className="skeleton skeleton-btn w-100 mb-3" style={{ height: "35px" }}></div>
          <div className="skeleton skeleton-text mb-3 mx-2" style={{ width: "130px", height: "20px"}}></div>
          {/* Buttons */}
          <div className="skeleton skeleton-btn w-100 mb-3" style={{ height: "35px" }}></div>
          <div className="skeleton skeleton-text mb-3 mx-2" style={{ width: "150px", height: "20px"}}></div>
        </div>        
      </div>
  );
};

export default SkeletonLogin;