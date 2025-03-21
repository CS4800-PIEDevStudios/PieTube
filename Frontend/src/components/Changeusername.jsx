import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeSlash } from "react-bootstrap-icons";
import axiosInstance from '../axiosConfig.js'

const ChangeUsername = () => {
    const navigate = useNavigate();
    const [newUsername, setNewUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Now, send the login POST request
            const response = await axiosInstance.post('login-api/updateUsername', {
              newUsername : newUsername,
              password : password
            });
        
            console.log('Response from Django:', response.data);
          } catch (error) {
            console.error('Error sending data to Django:', error);
            return;
          }


        console.log("Username changed successfully.");
        navigate("/Login");
        window.location.reload();
    };

    return (
        <div className="justify-content-center p-5 bg-light" 
             style={{ minWidth: "500px", boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.25)", borderRadius: "20px" }}>
            <h1 className="text-center mb-4">Change Username</h1>

            <form onSubmit={handleSubmit}>
                {["New Username", "Confirm Password"].map((placeholder, index) => {
                    const value = index === 0 ? newUsername : password;
                    const setValue = index === 0 ? setNewUsername : setPassword;

                    return (
                        <div className="mb-3" key={placeholder} style={{ position: "relative" }}>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder={placeholder}
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                required
                                style={{ paddingRight: "40px" }}
                            />
                        </div>
                    );
                })}

                <button type="submit" className="custom-btn w-100 mb-2 text-center">
                    Submit
                </button>
                
                <button type="button" className="custom-btn2 w-100 text-center" onClick={() => navigate("/profile")}>
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default ChangeUsername;
