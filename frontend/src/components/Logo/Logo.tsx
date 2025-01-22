import React from 'react';
import './Logo.css';

const Logo: React.FC = () => {
    return (
        <div className="logo-container">
            <img src="/logo.jpeg" alt="Logo" className="logo" />
        </div>
    );
};

export default Logo;
