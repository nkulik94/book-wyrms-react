import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import FindBooks from "./FindBooks";
import MyBooks from "./MyBooks";
import Contact from "./Contact";
import CreateAccount from "./CreateAccount";
import Login from "./LoginPage";

function Body( { setCurrentUser, currentUser, results, setResults } ) {
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
                <FindBooks currentUser={currentUser} results={results} setResults={setResults} />
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
            <Route path="/login">
                <Login
                    currentUser={currentUser}
                    allUsers={allUsers}
                    setCurrentUser={setCurrentUser}
                />
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