import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProfileDropdown = () => {
    const { logout } = useAuth();

    return (
        <div className="profile-dropdown">
            <ul>
                <li><Link to="/profile">My Profile</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                
                <li><button onClick={logout}>Sign Out</button></li>
            </ul>
        </div>
    );
};

export default ProfileDropdown;