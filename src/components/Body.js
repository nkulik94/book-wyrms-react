import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import FindBooks from "./FindBooks";
import MyBooks from "./MyBooks";
import Contact from "./Contact";
import CreateAccount from "./CreateAccount";
import Login from "./LoginPage";

function Body( { setCurrentUser, currentUser } ) {
    const [allUsers, setUsers] = useState([])
    const [results, setResults] = useState(null)
    const [currentBook, setCurrentBook] = useState(null)

    useEffect(() => {
        fetch('https://book-wyrm-api.herokuapp.com/users')
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
                <FindBooks
                    currentUser={currentUser}
                    results={results}
                    setResults={setResults}
                    currentBook={currentBook}
                    setCurrentBook={setCurrentBook}
                    setCurrentUser={setCurrentUser}
                />
            </Route>
            <Route path="/my-books">
                <MyBooks 
                    setCurrentUser={setCurrentUser}
                    currentUser={currentUser}
                    setCurrentBook={setCurrentBook}
                    currentBook={currentBook}
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