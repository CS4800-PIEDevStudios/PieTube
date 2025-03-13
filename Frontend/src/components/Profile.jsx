import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Profile = () => {
    const [username, setUsername] = useState("first.last@gmail.com");
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
        if (newUsername) setUsername(newUsername); // Update the username state
        setNewUsername(""); // Clear the input field
        handleCloseUsernameModal(); // Close the modal
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

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
            <div
                className="p-4 bg-light"
                style={{
                    borderRadius: "20px",
                    boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.25)",
                    maxWidth: "500px",
                    width: "100%",
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

                    {/* Username Display */}
                    <div className="col-9">
                        <p className="mb-1">Username</p>
                        <p className="text-muted">{username}</p> 
                    </div>
                </div>

                {/* Buttons for changing username, password, and about */}
                <Button variant="outline-secondary" className="w-100 mb-2" onClick={handleShowUsernameModal}>
                    Change Username
                </Button>

                <Button variant="outline-secondary" className="w-100 mb-2" onClick={handleShowPasswordModal}>
                    Change Password
                </Button>

                <Button variant="outline-secondary" className="w-100 mb-2" onClick={handleShowAboutModal}>
                    Edit About
                </Button>

                {/* Sign Out Button */}
                <button class="custom-btn" className="w-100" onClick={handleSignOut}>
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