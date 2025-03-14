import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Profile = () => {
    const [email, setEmail] = useState("first.last@gmail.com");
    const [username, setUsername] = useState("Username");
    const [newUsername, setNewUsername] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [about, setAbout] = useState("");

    // State for modals
    const [showUsernameModal, setShowUsernameModal] = useState(false);
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [showAboutModal, setShowAboutModal] = useState(false);

    // Handlers for opening and closing modals
    const handleShowUsernameModal = () => setShowUsernameModal(true);
    const handleCloseUsernameModal = () => setShowUsernameModal(false);

    const handleShowPasswordModal = () => setShowPasswordModal(true);
    const handleClosePasswordModal = () => setShowPasswordModal(false);

    const handleShowAboutModal = () => setShowAboutModal(true);
    const handleCloseAboutModal = () => setShowAboutModal(false);

    const handleSaveUsername = () => {
        if (newUsername) setUsername(newUsername); 
        setNewUsername("");
        handleCloseUsernameModal();
    };

    const handleSavePassword = () => {
        console.log("New Password:", newPassword);
        setNewPassword("");
        handleClosePasswordModal();
    };

    const handleSaveAbout = () => {
        console.log("About Me:", about);
        handleCloseAboutModal();
    };

    const handleSignOut = () => {
        console.log("User signed out");
    };

    const handleForgotPassword = () => {
        console.log("Forgot Password clicked");
    };

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
            <div
                className="p-4 bg-light"
                style={{
                    borderRadius: "20px",
                    boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.25)",
                    maxWidth: "500px",
                    width: "80pw",
                }}
            >
                <h1 className="text-center mb-4">Settings</h1>

                <div className="row align-items-center mb-4">
                    {/* Profile Picture Placeholder */}
                    <div className="col-3">
                        <div
                            className="rounded-circle bg-secondary text-white d-flex justify-content-center align-items-center"
                            style={{ width: "80px", height: "80px", fontSize: "12px" }}
                        >
                            Change <br /> Profile <br /> Picture
                        </div>
                    </div>
                
                {/* Username and Email Display */}
                <div className="col-9">
                     <p className="mb-1">Username</p>
                     <p className="text-muted">{username}</p>
                     <p className="mb-1">Email</p>
                     <p className="text-muted">{email}</p> 
                </div>
                </div>

                {/* Buttons for changing username, password, and about */}
                <button className="custom-btn mb-3"  onClick={handleShowUsernameModal}>
                    Change Username
                </button>

                <button className="custom-btn mb-3" onClick={handleShowPasswordModal}>
                    Change Password
                </button>

                <button className="custom-btn mb-3" onClick={handleShowAboutModal}>
                    Edit About
                </button>

                {/* Sign Out Button */}
                <button className="custom-btn mb-3"  onClick={handleSignOut}>
                    Sign Out
                </button>
            </div>

            {/* Username Modal */}
            <Modal show={showUsernameModal} onHide={handleCloseUsernameModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Change Username</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control
                        type="text"
                        placeholder="Enter new username"
                        value={newUsername}
                        onChange={(e) => setNewUsername(e.target.value)}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseUsernameModal}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSaveUsername}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Password Modal */}
            <Modal show={showPasswordModal} onHide={handleClosePasswordModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Change Password</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control
                        type="password"
                        placeholder="Enter new password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    {/* Add "Forgot Password?" link */}
                    <div style= {{textAlign: 'right', marginTop: '10px'}}>
                        <a href="#" onClick={handleForgotPassword}>
                            Forgot Password?
                        </a>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClosePasswordModal}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSavePassword}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* About Modal */}
            <Modal show={showAboutModal} onHide={handleCloseAboutModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>About</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Write whatever..."
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseAboutModal}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSaveAbout}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Profile;