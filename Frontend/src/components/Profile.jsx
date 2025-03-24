import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import { CaretRightFill } from "react-bootstrap-icons"
import axiosInstance from '../axiosConfig.js'

const Profile = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [about, setAbout] = useState("");

    // Navigation hook
    const navigate = useNavigate(); 

    const handleSignOut = async(event) => {
        event.preventDefault();
        const response = await axiosInstance.post('login-api/logoutAccount', {});
        console.log('Response from Django Signout:', response.data);
        if (response.data.status === 'success') {
            localStorage.removeItem('isAuthenticated');
            localStorage.setItem("isLoggedIn", false);
            navigate("/Login");
            window.location.reload();
        }
    };


  useEffect(() => {
        if(localStorage.getItem('isLoggedIn') === 'false')
        {
            navigate("/Login");
            return;
        }
        
        axiosInstance.get('login-api/getProfileData')
        .then(response => {
            console.log(response.data[0])
            setUsername(response.data[0].username)
            setEmail(response.data[0].email)
        })
      }, []);


    return (
        <div className="justify-content-center p-5 bg-light mt-5" style={{minWidth:"500px", boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.25)", borderRadius: "20px"}}>
            <h1 className="text-center mb-4">Settings</h1>

            <div className="d-flex align-items-center mb-4">
                {/* Profile Picture Placeholder gonna need to change this to a button eventually */}
                <div
                    className="d-flex rounded-circle bg-secondary text-white justify-content-center align-items-center"
                    style={{ width: "80px", height: "80px", fontSize: "12px" }}
                >
                    Change <br /> Profile <br /> Picture
                </div>
                <h5 className="text-start mx-3">Username:<br></br> {username}</h5>
                <h5 className="flex-fill">Email:<br></br> {email}</h5>
            </div>

            {/* Buttons for changing username, password, and about */}
            <button className="d-flex custom-btn2 mb-3 px-2 justify-content-between align-items-center" onClick={() => navigate("/ChangeUsername")}>
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