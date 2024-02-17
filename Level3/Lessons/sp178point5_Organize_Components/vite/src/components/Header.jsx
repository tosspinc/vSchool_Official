import React from 'react'

export default function Header() {
    console.log('header')
    return (  
        <header>
            <nav className="nav">
                <img src="./imgs/react-logo.png" className="nav-logo" />

                <ul className="nav-items">
                    <li>About Us!</li>
                    <li>Content</li>
                    <li>Pricing</li>
                </ul>
            </nav>
        </header>
    )
}