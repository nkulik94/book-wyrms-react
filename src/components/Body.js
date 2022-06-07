import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import FindBooks from "./FindBooks";
import MyBooks from "./MyBooks";
import Contact from "./Contact";
import Login from "./LoginPage";

function Body() {
    return (
        <div id="body">
            <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/bookfinder" >
                <FindBooks />
            </Route>
            <Route path="/my-books">
                <MyBooks />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            </Switch>
        </div>
    )
}

export default Body