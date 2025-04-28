const SkeletonLoader = () => {
    return (
        <div className="justify-content-center p-5 bg-light mt-5" 
        style={{ minWidth: "500px", boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.25)", borderRadius: "20px" }}>
            
            {/* Skeleton title */}
            <div className="skeleton skeleton-text mb-4" style={{ width: "150px", height: "40px", margin: "0 auto" }}></div>

            {/* Skeleton profile info */}
            <div className="d-flex align-items-center mb-4">
                <div
                    className="skeleton skeleton-pic"
                    style={{ width: "100px", height: "100px", borderRadius: "50%" }}
                ></div>
                <div className="ms-3 flex-grow-1">
                    <div className="skeleton skeleton-text mb-2" style={{ width: "60%" }}></div>
                    <div className="skeleton skeleton-text" style={{ width: "80%" }}></div>
                </div>
            </div>

            {/* Skeleton buttons */}
            <div className="skeleton skeleton-btn mb-3"></div>
            <div className="skeleton skeleton-btn mb-3"></div>
            <div className="skeleton skeleton-btn mb-3"></div>
            <div className="skeleton skeleton-btn mb-3"></div>
        </div>
    );
};

export default SkeletonLoader;