import React from 'react';
import "./style.css"

function Navbar() {
    return (
    <header>
            <h1>Brent B.</h1>
            <img src="%PUBLIC_URL%/recent-profile.jpg" alt="Brent"/>
            <nav>
                <ul>
                    <li><a href="#AboutMe">About Me</a></li>
                    <li><a href="#AboutWork">About My Work</a></li>
                    <li><a href="#AboutMe">Back to Top</a></li> 
                </ul>
            </nav>
    </header>
    )
}

export default Navbar;