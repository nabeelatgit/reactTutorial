import React from 'react';
import './Header.css'

function Header() {
    return (
        <header className="header">
            <p className="title">Todo App</p>
            <ul className="navbar">
                <li>Main</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
        </header>
    )
}

export default Header;