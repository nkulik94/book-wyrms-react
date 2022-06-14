import React from 'react';
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    padding: "12px",
    margin: "0 6px 6px",
    borderBottom: '2px solid red',
    textDecoration: "none",
    color: "black",
  };

function NavBar() {
    return (
        <nav id='nav-bar'>
        <NavLink
            to="/"
            exact
            style={linkStyles}
            activeStyle={{
                borderBottom: '2px solid darkblue',
            }}
        >
            Home
        </NavLink>
        <NavLink
        to="/bookfinder"
        exact
        style={linkStyles}
            activeStyle={{
                borderBottom: '2px solid darkblue',
            }}
        >
            Search
        </NavLink>
        <NavLink
        to="/my-books"
        exact
        style={linkStyles}
            activeStyle={{
                borderBottom: '2px solid darkblue',
            }}
        >
            Shelf
        </NavLink>
        <NavLink
        to="/contact"
        exact
        style={linkStyles}
            activeStyle={{
                borderBottom: '2px solid darkblue',
            }}
        >
            Contact
        </NavLink>
        </nav>
    )
}

export default NavBar