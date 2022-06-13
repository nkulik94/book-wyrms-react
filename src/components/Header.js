import React, { useContext } from "react";
import { UserContext } from "../context/user";
import NavBar from "./NavBar";
import LoginButtons from "./LoginButtons";
import LogoutBtn from "./LogoutBtn";



function Header( {  } ) {
    const currentUser = useContext(UserContext)

    return (
        <header position="relative">
            <h1>Book Wyrm header</h1>
            <NavBar />
            {currentUser.user ? <LogoutBtn /> : <LoginButtons />}
        </header>
    )
}

export default Header