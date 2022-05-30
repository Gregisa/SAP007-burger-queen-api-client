import React from "react"
import logo from '../assets/logo.png'

function Header() {

    return (
        <header className="main-header">
            <div className="logo">
                {<img src={logo} className="logo" alt="Logo Jazz Burger" />}</div>
        </header>

    )
}
export default Header;
