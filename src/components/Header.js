import React, { useState } from 'react';
import ProfileDropdown from './ProfileDropDown';

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <header className="header">
            <div className="header-logo">Learning Portal</div>
            <div className="profile-section">
                <button 
                    className="profile-button" 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                    Profile
                </button>
                {isDropdownOpen && <ProfileDropdown />}
            </div>
        </header>
    );
};

export default Header;