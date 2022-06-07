import React from "react";
import NavBar from "./NavBar";
import LoginButtons from "./LoginButtons";
import LogoutBtn from "./LogoutBtn";



function Header( { setCurrentUser, currentUser } ) {
    return (
        <header position="relative">
            <h1>Book Wyrm header</h1>
            <NavBar />
            {currentUser ? <LogoutBtn setCurrentUser={setCurrentUser} /> : <LoginButtons />}
        </header>
    )
}

export default Header