import React from 'react';
import { Link } from 'react-router-dom';

const Changeusername = () => {
    return (
        <div>
            <h1>Change Username</h1>
            <Link to="/profile">Back to Profile</Link>
        </div>
    );
};

export default Changeusername;