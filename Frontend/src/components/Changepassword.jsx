import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeSlash } from "react-bootstrap-icons";
import axiosInstance from '../axiosConfig.js'

const ChangePassword = () => {
    const navigate = useNavigate();
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPasswords, setShowPasswords] = useState({
        old: false,
        new: false,
        confirm: false

    });

    const togglePasswordVisibility = (field) => {
        setShowPasswords(prevState => ({
            ...prevState,
            [field]: !prevState[field]
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            alert("New passwords do not match.");
            return;
        }

        try {

        
            // Now, send the login POST request
            const response = await axiosInstance.post('login-api/updatePassword', {
              oldPassword: oldPassword,
              newPassword: newPassword,
              confirmPassword: confirmPassword
            });
        
            console.log('Response from Django:', response.data);
          } catch (error) {
            console.error('Error sending data to Django:', error);
          }


        console.log("Password changed successfully.");
        navigate("/Login");
        window.location.reload();
    };

    return (
        <div className="justify-content-center p-5 bg-light" 
             style={{ minWidth: "500px", boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.25)", borderRadius: "20px" }}>
            <h1 className="text-center mb-4">Change Password</h1>

            <form onSubmit={handleSubmit}>
                {[
                    { label: "Old Password", value: oldPassword, onChange: setOldPassword, key: "old" },
                    { label: "New Password", value: newPassword, onChange: setNewPassword, key: "new" },
                    { label: "Confirm New Password", value: confirmPassword, onChange: setConfirmPassword, key: "confirm" }
                ].map(({ label, value, onChange, key }) => (

                        <div className="mb-3" key={key} style={{ position: "relative" }}>
                            <label htmlFor={key} className="form-label">{label}</label>
                            <input
                                type={showPasswords[key] ? "text" : "password"}
                                className="form-control"
                                id={key}
                                placeholder={label}
                                value={value}
                                onChange={(e) => onChange(e.target.value)}
                                required
                                style={{ paddingRight: "40px" }}
                            />
                            <button 
                                type="button" 
                                onClick={() => togglePasswordVisibility(key)}
                                style={{ 
                                    position: "absolute", 
                                    right: "10px", 
                                    top: "50%", 
                                    transform: "translateY(-5%)", 
                                    border: "none", 
                                    background: "none", 
                                    cursor: "pointer" 
                                }}
                            >
                                {showPasswords[key] ? <EyeSlash size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                ))}

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

export default ChangePassword;
