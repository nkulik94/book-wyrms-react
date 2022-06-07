import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import FindBooks from "./FindBooks";
import MyBooks from "./MyBooks";
import Contact from "./Contact";

function Body() {
    return (
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
        </Switch>
    )
}

export default Body