import React from "react";
import NavBar from "./NavBar";



function Header() {
    return (
        <header position="relative">
            <h1>Book Wyrm header</h1>
            <NavBar />
        <span id="login"><button>Log In</button> or <button>Sign Up</button></span>
        </header>
    )
}

export default Header