import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { CaretRightFill } from "react-bootstrap-icons"

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
        <div className="justify-content-center p-5 bg-light" style={{minWidth:"500px", boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.25)", borderRadius: "20px"}}>
            <h1 className="text-center mb-4">Settings</h1>

            <div className="d-flex align-items-center mb-4">
                {/* Profile Picture Placeholder gonna need to change this to a button eventually */}
                <div
                    className="d-flex rounded-circle bg-secondary text-white justify-content-center align-items-center"
                    style={{ width: "80px", height: "80px", fontSize: "12px" }}
                >
                    Change <br /> Profile <br /> Picture
                </div>
                <h5 className="text-start mx-3">{username}</h5>
                <h5 className="flex-fill">{email}</h5>
            </div>

            {/* Buttons for changing username, password, and about */}
            <button className="d-flex custom-btn2 mb-3 px-2 justify-content-between align-items-center" onClick={() => navigate("/Changeusername")}>
                <div>Change Username</div>
                <div className="text-muted">Last changed 03/14/2025</div>
                <CaretRightFill/>
            </button>

            <button className="d-flex custom-btn2 mb-3 px-2 justify-content-between align-items-center" onClick={() => navigate("/Changepassword")}>
                <div>Change Password</div>
                <div className="text-muted">Last changed 03/14/2025</div>
                <CaretRightFill/>
            </button>

            <button
                className="custom-btn2 mb-3"
                onClick={() => navigate("/EditAbout", { state: { about } })}
            >
                Edit About
            </button>

            {/* Sign Out Button */}
            <button className="custom-btn mb-3" onClick={handleSignOut}>
                Sign Out
            </button>
        </div>
    );
};

export default Profile;