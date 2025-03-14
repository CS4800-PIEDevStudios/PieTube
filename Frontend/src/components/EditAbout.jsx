import React, { useState } from "react";
import { Link } from "react-router-dom";

const EditAbout = () => {
    const MAX_CHARACTERS = 500;
    const [aboutText, setAboutText] = useState("");

    const handleSaveAbout = () => {
        if (aboutText.trim() === "") {
            alert("Please enter something about yourself.");
            return;
        }
        console.log("About Text Saved:", aboutText);
    };

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
            <div
                className="p-4 bg-light"
                style={{
                    borderRadius: "20px",
                    boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.25)",
                    maxWidth: "1200px",
                    width: "50pw",
                }}
            >
                <h1 className="text-center mb-4">Edit About</h1>

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

                {/* Save Button */}
                <button className="custom-btn mb-3" onClick={handleSaveAbout}>
                    Save Changes
                </button>

                {/* Back to Profile Link */}
                <Link to="/profile" className="custom-btn">
                    Back to Profile
                </Link>
            </div>
        </div>
    );
};

export default EditAbout;