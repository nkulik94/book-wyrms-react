import React from 'react';
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };

function NavBar() {
    return (
        <div id='nav-bar'>
        <NavLink
            to="/"
            exact
            style={linkStyles}
            activeStyle={{
            background: "darkblue",
            }}
        >
            Home
        </NavLink>
        <NavLink
        to="/about"
        exact
        style={linkStyles}
            activeStyle={{
            background: "darkblue",
            }}
        >
            About
        </NavLink>
        <NavLink
        to="/bookfinder"
        exact
        style={linkStyles}
            activeStyle={{
            background: "darkblue",
            }}
        >
            Search
        </NavLink>
        <NavLink
        to="/my-books"
        exact
        style={linkStyles}
            activeStyle={{
            background: "darkblue",
            }}
        >
            Shelf
        </NavLink>
        <NavLink
        to="/contact"
        exact
        style={linkStyles}
            activeStyle={{
            background: "darkblue",
            }}
        >
            Contact
        </NavLink>
        </div>
    )
}

export default NavBar