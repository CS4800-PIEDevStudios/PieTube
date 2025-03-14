import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

const Profile = () => {
    const [email, setEmail] = useState("first.last@gmail.com");
    const [username, setUsername] = useState("Username");
    const [about, setAbout] = useState("");

    // Navigation hook
    const navigate = useNavigate(); 

    const handleSignOut = () => {
        console.log("User signed out");
    };

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
            <div
                className="p-4 bg-light"
                style={{
                    borderRadius: "20px",
                    boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.25)",
                    maxWidth: "1400px",
                    width: "50pw",
                }}
            >
                <h1 className="text-center mb-4">Settings</h1>

                <div className="row align-items-center mb-4">
                    {/* Profile Picture Placeholder */}
                    <div className="col-3">
                        <div
                            className="rounded-circle bg-secondary text-white d-flex justify-content-center align-items-center"
                            style={{ width: "80px", height: "80px", fontSize: "12px" }}
                        >
                            Change <br /> Profile <br /> Picture
                        </div>
                    </div>

                    {/* Username and Email Display */}
                    <div className="col-9">
                        <p className="mb-1">Username</p>
                        <p className="text-muted">{username}</p>
                        <p className="mb-1">Email</p>
                        <p className="text-muted">{email}</p>
                    </div>
                </div>

                {/* Buttons for changing username, password, and about */}
                <button className="custom-btn mb-3" onClick={() => navigate("/Changeusername")}>
                    Change Username
                </button>

                <button className="custom-btn mb-3" onClick={() => navigate("/Changepassword")}>
                    Change Password
                </button>

                <button
                    className="custom-btn mb-3"
                    onClick={() => navigate("/EditAbout", { state: { about } })}
                >
                    Edit About
                </button>

                {/* Sign Out Button */}
                <button className="custom-btn mb-3" onClick={handleSignOut}>
                    Sign Out
                </button>
            </div>
        </div>
    );
};

export default Profile;