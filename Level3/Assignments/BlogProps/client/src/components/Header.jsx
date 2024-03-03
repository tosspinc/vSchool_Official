import React from "react";

export default function Header() {
    return (
        <div className="header--container">
            <div className="nav--bar">
                <ul className="menu--option">
                    <a href="#" className="home-menu">
                        <li>Home</li>
                    </a>
                    <a href="#" className="about-menu">
                        <li>About</li>
                    </a>
                    <a href="#" className="contact-menu">
                        <li>Contact</li>
                    </a>
                </ul>
            </div>
        </div>
    )
}