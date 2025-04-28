import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; 
import { CaretRightFill } from "react-bootstrap-icons"
import axiosInstance from '../axiosConfig.js'

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

const Profile = () => {

    // Use states
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [about, setAbout] = useState("");
    const [isLoading, setIsLoading] = useState(true); 
    const [profilePicUrl, setProfilePicUrl] = useState(null);

    //Hooks
    const navigate = useNavigate(); 
    const fileInputRef = useRef(null);

    useEffect(() => {
        if(localStorage.getItem('isLoggedIn') === 'false')
        {
            navigate("/Login");
            return;
        }
        
        // Fetches profile data
        axiosInstance.get('login-api/getProfileData')
        .then(response => {
            console.log(response.data[0])
            setUsername(response.data[0].username)
            setEmail(response.data[0].email)
            setAbout(response.data[0].about || "");
                if (response.data[0].profile_pic) {
                    setProfilePicUrl(response.data[0].profile_pic);
                }
            })
            .catch(error => {
                console.error('Error fetching profile data:', error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [navigate]);

    // Loading screen
    if (isLoading) {
        return <SkeletonLoader />;
    }

    // Function for signing out
    const handleSignOut = async(event) => {
        event.preventDefault();
        const response = await axiosInstance.post('login-api/logoutAccount', {});
        console.log('Response from Django Signout:', response.data);
        if (response.data.status === 'success') {
            localStorage.removeItem('isAuthenticated');
            localStorage.setItem("isLoggedIn", false);
            navigate("/Login");
            window.location.reload();
        }
    };

    // Function for changing profile picture
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePicUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleProfilePicClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="justify-content-center p-5 bg-light mt-5" style={{minWidth:"500px", boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.25)", borderRadius: "20px"}}>
            {/* Header */}
            <h1 className="text-center mb-4">Settings</h1>
            <div className="d-flex align-items-center mb-4">
                {/* Profile Picture  */}
                <div
                    onClick={handleProfilePicClick}
                    className="profile-pic-container"
                    style={{ flexShrink: 0 }} 
                >
                    {profilePicUrl ? (
                        <img
                            src={profilePicUrl}
                            alt="Profile Preview"
                        />
                    ):(
                        <span>Change <br /> Profile <br /> Picture</span> 
                    )}
                </div>

                {/* Hidden File Input */}
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    style={{ display: "none" }} 
                    accept="image/*"
                />
                {/* End Profile Picture Area */}
                <div className="ms-3" style={{ minWidth: 0 }}></div>
                <h5 className="text-start mx-3">Username:<br></br> {username}</h5>
                <h5 className="flex-fill">Email:<br></br> {email}</h5>
            </div>

            {/* Buttons for changing username, password, and about */}
            <button className="d-flex custom-btn2 mb-3 px-2 justify-content-between align-items-center" onClick={() => navigate("/ChangeUsername")}>
                <div className="px-3">Change Username</div>
                <CaretRightFill/>
            </button>
            <button className="d-flex custom-btn2 mb-3 px-2 justify-content-between align-items-center" onClick={() => navigate("/Changepassword")}>
                <div className="px-3">Change Password</div>
                <CaretRightFill/>
            </button>
            <button
                className="custom-btn2 mb-3"
                onClick={() => navigate("/EditAbout", { state: { about } })}
            >
                Edit About
            </button>
            {/* Sign Out Button */}
            <button className="custom-btn mb-3" onClick={handleSignOut}>
                Sign Out
            </button>
        </div>
    );
};

export default Profile;