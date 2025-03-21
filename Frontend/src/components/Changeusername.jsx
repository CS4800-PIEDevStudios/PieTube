import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ChangeUsername = () => {
    const [newUsername, setNewUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('New Username:', newUsername);
    };

    return (
            <div className="justify-content-center p-5 bg-light" 
             style={{ minWidth: "500px", boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.25)", borderRadius: "20px" }}>
            <h1 className="text-center mb-4">Change Username</h1> 

            <h1>Change Username</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="newUsername">New Username:</label>
                    <input
                        type="text"
                        id="newUsername"
                        value={newUsername}
                        onChange={(e) => setNewUsername(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Change Username</button>
            </form>
            <Link to="/profile">Back to Profile</Link>
        </div>
    );
};

export default ChangeUsername;