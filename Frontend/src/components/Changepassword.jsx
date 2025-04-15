import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeSlash } from "react-bootstrap-icons";
import axiosInstance from '../axiosConfig.js'

const ChangePassword = () => {
    //Use states
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPasswords, setShowPasswords] = useState({
        old: false,
        new: false,
        confirm: false
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    // Navigation hook
    const navigate = useNavigate();

    {/* Show/hide password eyes */}
    const togglePasswordVisibility = (field) => {
        setShowPasswords(prevState => ({
            ...prevState,
            [field]: !prevState[field]
        }));
    };

    const validatePassword = (password) => {

        //length
        if (password.length < 8 || password.length > 20) {
            return "Password must be between 8-20 characters";
        }
        
        //need one number
        if (!/\d/.test(password)) {
            return "Password must contain at least one number";
        }
        
        //need special character
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            return "Password must contain at least one special character";
        }
        
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        // User error message
        if (newPassword !== confirmPassword) {
            setError("New passwords do not match.");
            return;
        }

        if (oldPassword === newPassword) {
            setError("New password must be different from old password.");
            return;
        }

        const passwordError = validatePassword(newPassword);
        if (passwordError) {
            setError(passwordError);
            return;
        }
        // Updates password
        try {
            // Now, send the login POST request
            const response = await axiosInstance.post('login-api/updatePassword', {
              oldPassword: oldPassword,
              newPassword: newPassword,
              confirmPassword: confirmPassword
            });
        
            console.log('Response from Django:', response.data);
            console.log("Password changed successfully.");
            navigate("/Login");
            window.location.reload();

          } catch (error) {

            console.error('Error sending data to Django:', error);
            if (error.response && error.response.data) {
                setError(error.response.data.message || "Failed to change password");
            } else {
                setError("Failed to change password. Please try again.");
            }
        }
        console.log("Password changed successfully.");
        // Go back to login page if successfully changed
        navigate("/Login");
        window.location.reload();
    };

    return (
        <div className="justify-content-center p-5 bg-light" style={{ minWidth: "500px", boxShadow: "0px 0px 30px rgba(20, 12, 12, 0.25)", borderRadius: "20px" }}>
            {/* Header */}
            <h1 className="text-center mb-4">Change Password</h1>

            {/* error message */}
            {error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}

            {/* success message */}
             {success && (
                <div className="alert alert-success" role="alert">
                    {success}
                </div>
            )}

            <form onSubmit={handleSubmit} style={{ textAlign: "left"}}>
                {[
                    { label: "Old Password", value: oldPassword, onChange: setOldPassword, key: "old" },
                    { label: "New Password", value: newPassword, onChange: setNewPassword, key: "new" },
                    { label: "Confirm New Password", value: confirmPassword, onChange: setConfirmPassword, key: "confirm" }
                ].map(({ label, value, onChange, key }) => (
                        <div className="d-flex flex-column mb-3" key={key} style={{ position: "relative" }}>
                            <label htmlFor={key} className="form-label align-self-start">{label}</label>
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
                            {/* Show/hide password eyes */}
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
                {/* Buttons */}
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
