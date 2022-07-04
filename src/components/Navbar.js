import React from 'react'
import './../css/styles.css'

const reactLogo = new URL("./../images/react-icon.png",import.meta.url);

export default function Navbar() {
    return (
        <nav>
            <img src={reactLogo} className="nav--icon" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}
