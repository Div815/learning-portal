import React from 'react';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
    // In a real app, you'd fetch user data from context or an API
    const user = {
        name: 'Alex Doe',
        email: 'alex.doe@example.com',
        joinDate: '2024-01-15',
    };

    return (
        <div className="main-content">
            <h1>My Profile</h1>
            <div>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Member Since:</strong> {user.joinDate}</p>
            </div>
            <p>
                <em>(Functionality to edit profile information will be added here.)</em>
            </p>
            <Link to="/home">← Back to Home</Link>
        </div>
    );
};

export default ProfilePage;