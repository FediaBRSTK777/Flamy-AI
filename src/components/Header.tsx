import React from 'react';

const Header: React.FC = () => {
    return (
        <header>
            <h1>Flame</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/profile">Profile</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;