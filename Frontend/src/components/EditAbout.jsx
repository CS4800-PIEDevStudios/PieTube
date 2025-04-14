import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from '../axiosConfig.js';

const EditAbout = () => {
    // Use states
    const [aboutText, setAboutText] = useState("");

    //Navigation hook
    const navigate = useNavigate();

    const MAX_CHARACTERS = 500;

    useEffect(() => {
        axiosInstance.get('login-api/getProfileData')
        .then(response => {
            setAboutText(response.data[0].about)
        })
    }, []);

    const handleSaveAbout = async () => {
        // User error message
        if (aboutText.trim() === "") {
            alert("Please enter something about yourself.");
            return;
        }
        console.log("About Text Saved:", aboutText);
        // Updates About section
        try {
            // Now, send the login POST request
            const response = await axiosInstance.post('login-api/updateAbout', {
                about: aboutText,
            });
            console.log('Response from Django:', response.data);
            } catch (error) {
            console.error('Error sending data to Django:', error);
        }
    };

    return (
            <div className="about d-flex flex-column justify-content-between p-4 bg-light">
                <h1 className="text-center my-4">Edit About</h1>
                {/* Input forms */}
                <textarea
                    className="form-control mb-3"
                    rows={5}
                    placeholder="Write Whatever..."
                    value={aboutText}
                    onChange={(e) => {
                        if (e.target.value.length <= MAX_CHARACTERS) {
                            setAboutText(e.target.value);
                        }
                    }}
                />
                <small className="text-muted">
                    {aboutText?.length}/{MAX_CHARACTERS} characters
                </small>
                {/* Buttons */}
                <button className="custom-btn mb-3" onClick={handleSaveAbout}>
                    Save Changes
                </button>
                <button className="custom-btn" onClick={() => navigate("/profile")}> Back to Profile </button> 
            </div>
    );
};

export default EditAbout;