import React from "react";
import NavBar from "./NavBar";
import LoginButtons from "./LoginButtons";



function Header() {
    return (
        <header position="relative">
            <h1>Book Wyrm header</h1>
            <NavBar />
            <LoginButtons />
        </header>
    )
}

export default Header