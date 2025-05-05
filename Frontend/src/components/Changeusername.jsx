import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from '../axiosConfig.js'

const ChangeUsername = () => {
    //Use states
    const [newUsername, setNewUsername] = useState("");
    const [confirmUsername, setconfirmUsername] = useState("");
    const [prevUsername, setPrevUsername] = useState("");

    //Navigation hook
    const navigate = useNavigate();

    //Fetch Current Username
    useEffect(() => {
        const fetchUsername = async () => {
          try {
            const response = await axiosInstance.get('login-api/currentUsername');
            setPrevUsername(response.data.username);
          } catch (error) {
            console.error("Failed to fetch current username:", error);
          }
        };
        fetchUsername();
      }, []);      

    const handleSubmit = async (e) => {
        e.preventDefault();
        // User error message
        if (newUsername !== confirmUsername) {
            alert("Usernames do not match.");
            return;
        }
        
        if (newUsername === prevUsername) {
            alert("Your new username cannot be the same as your previous one.");
            return;
          }
        //Updates username
        try {
          const response = await axiosInstance.post('login-api/updateUsername', {
              newUsername : newUsername,
              confirmUsername : confirmUsername
          });
          console.log('Response from Django:', response.data);
      } catch (error) {
          console.error('Error sending data to Django:', error);
          return;
      }
        console.log("Username changed successfully.");
        // Go back to login page if successfully changed
        navigate("/Login");
        window.location.reload();
    };

    return (
        <div className="justify-content-center p-5 bg-light" 
             style={{ minWidth: "500px", boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.25)", borderRadius: "20px" }}>
            {/* Header */}
            <h1 className="text-center mb-4">Change Username</h1>
            {/* Input forms */}
            <form onSubmit={handleSubmit}>
                {["New Username", "Confirm Username"].map((placeholder, index) => {
                    const value = index === 0 ? newUsername : confirmUsername;
                    const setValue = index === 0 ? setNewUsername : setconfirmUsername;
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
                {/* Input buttons */}
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
