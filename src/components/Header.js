import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar } from '@mui/material';


const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };


function Header() {
    return (
        <header>
            <h1>Book Wyrm header</h1>
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
        <span id="login"><button>Log In</button> or <button>Sign Up</button></span>
        </header>
    )
}

export default Header