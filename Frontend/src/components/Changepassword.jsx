import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeSlash } from "react-bootstrap-icons";
import axiosInstance from '../axiosConfig.js'

const ChangePassword = () => {
    const navigate = useNavigate();
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPasswords, setShowPasswords] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPasswords(!showPasswords);
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
                {["Old Password", "New Password", "Confirm New Password"].map((placeholder, index) => {
                    const passwordValue = index === 0 ? oldPassword : index === 1 ? newPassword : confirmPassword;
                    const setPasswordValue = index === 0 ? setOldPassword : index === 1 ? setNewPassword : setConfirmPassword;

                    return (
                        <div className="mb-3" key={placeholder} style={{ position: "relative" }}>
                            <input
                                type={showPasswords ? "text" : "password"}
                                className="form-control"
                                placeholder={placeholder}
                                value={passwordValue}
                                onChange={(e) => setPasswordValue(e.target.value)}
                                required
                                style={{ paddingRight: "40px" }}
                            />
                            <button 
                                type="button" 
                                onClick={togglePasswordVisibility}
                                style={{ 
                                    position: "absolute", 
                                    right: "10px", 
                                    top: "50%", 
                                    transform: "translateY(-50%)", 
                                    border: "none", 
                                    background: "none", 
                                    cursor: "pointer" 
                                }}
                            >
                                {showPasswords ? <EyeSlash size={20} /> : <Eye size={20} />}
                            </button>
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

export default ChangePassword;
