import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import FindBooks from "./FindBooks";
import MyBooks from "./MyBooks";
import Contact from "./Contact";
import CreateAccount from "./CreateAccount";

function Body( { setCurrentUser, currentUser } ) {
    const [allUsers, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/users')
            .then(r => r.json())
            .then(data => setUsers(data))
    }, [])

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
                <MyBooks 
                    setCurrentUser={setCurrentUser}
                    allUsers={allUsers}
                    currentUser={currentUser}
                />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
            <Route path="/create-account">
                <CreateAccount 
                    setCurrentUser={setCurrentUser}
                    allUsers={allUsers}
                    setUsers={setUsers}
                    currentUser={currentUser}
                />
            </Route>
            </Switch>
        </div>
    )
}

export default Body