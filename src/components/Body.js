import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import FeaturedBook from "./FeaturedBook";
import FindBooks from "./FindBooks";
import MyBooks from "./MyBooks";
import Contact from "./Contact";
import CreateAccount from "./CreateAccount";
import Login from "./LoginPage";

function Body() {
    const [allUsers, setUsers] = useState([])

    useEffect(() => {
        fetch('https://json-server-template-production.up.railway.app/users')
            .then(r => r.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div id="body">
            <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path='/featured-book'>
                <FeaturedBook />
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
                <Login allUsers={allUsers} />
            </Route>
            <Route path="/create-account">
                <CreateAccount allUsers={allUsers} setUsers={setUsers} />
            </Route>
            </Switch>
        </div>
    )
}

export default Body