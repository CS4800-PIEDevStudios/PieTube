import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosInstance from '../axiosConfig.js';





const EditAbout = () => {
    const MAX_CHARACTERS = 500;
    const [aboutText, setAboutText] = useState("");


    useEffect(() => {
        axiosInstance.get('login-api/getProfileData')
        .then(response => {
            setAboutText(response.data[0].about)
        })
    }, []);


    const handleSaveAbout = async () => {
        if (aboutText.trim() === "") {
            alert("Please enter something about yourself.");
            return;
        }
        console.log("About Text Saved:", aboutText);
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
            <div
                className="d-flex flex-column justify-content-between p-4 bg-light"
                style={{borderRadius: "20px", boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.25)", minWidth:"500px", minHeight:"450px"}}
            >
                <h1 className="text-center my-4">Edit About</h1>

                <div>
                    {/* Textarea for user input */}
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
                        {aboutText.length}/{MAX_CHARACTERS} characters
                    </small>
                </div>
                
                <div>
                    {/* Save Button */}
                    <button className="custom-btn mb-3" onClick={handleSaveAbout}>
                        Save Changes
                    </button>

                    {/* Back to Profile Link */}
                    <Link to="/profile">
                    <button className="custom-btn"> Back to Profile </button> 
                    </Link>
                </div>

            </div>
    );
};

export default EditAbout;