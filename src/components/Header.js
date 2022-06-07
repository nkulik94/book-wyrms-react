import React from "react";
import { Button } from "react-bootstrap";
import NavBar from "./NavBar";
import LoginButtons from "./LoginButtons";



function Header( { currentUser } ) {
    return (
        <header position="relative">
            <h1>Book Wyrm header</h1>
            <NavBar />
            {currentUser ? <Button>Log Out</Button> : <LoginButtons />}
        </header>
    )
}

export default Header