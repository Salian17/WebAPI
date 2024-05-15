import './header.css';
import React from 'react';

function Header({title}) {
    return (
        <header>
            <p id="header_title">
                {title}
            </p>
        </header>
    );
}

export default Header;