import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import axios from 'axios';

const Profile = () => {
    const host = "https://23.20.205.143";
    const [email, setEmail] = useState("first.last@gmail.com");
    const [username, setUsername] = useState("Username");
    const [about, setAbout] = useState("");
    // Function to run when the page is loaded
    const onPageLoad = () => {
        console.log('Page has loaded!');
        axios.get(host + '/login-api/accountInfo')
            .then(response => {
                console.log(response.data)
            })
    };

        // useEffect with an empty dependency array runs only once on mount
    useEffect(() => {
        onPageLoad();
    }, []); // Empty dependency array means this runs only once

    // Navigation hook
    const navigate = useNavigate(); 

    const handleSignOut = () => {
        console.log("User signed out");
    };

    return (
        <div className="d-flex justify-content-center">
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