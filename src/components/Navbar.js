import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className="main">
            <div className="logos">
                <div className="logocc">
                    <img src="logocc.png" alt="CC Logo" className="logoccimg" />
                </div>
                <div className="logoiit">
                    <img src="logoiit.png" alt="IIT Logo" className="logoiitimg" />
                </div>
            </div>
            <div className="links">
                {/* Desktop links */}
                <div>Button 1</div>
                <div>Button 2</div>
                <div>Button 3</div>
            </div>
            {/* Mobile dropdown */}
            <button className="dropdown-button" onClick={toggleDropdown}>
                Menu
            </button>
            <div className={`dropdown-menu ${dropdownOpen ? 'open' : ''}`}>
                <div>Button 1</div>
                <div>Button 2</div>
                <div>Button 3</div>
            </div>
        </div>
    );
}

export default Navbar;
