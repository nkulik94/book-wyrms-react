import React, { useState, useEffect, useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { UserContext } from "../context/user";
import Home from "./Home";
import About from "./About";
import FindBooks from "./FindBooks";
import MyBooks from "./MyBooks";
import Contact from "./Contact";
import CreateAccount from "./CreateAccount";
import Login from "./LoginPage";

function Body( {  } ) {
    const currentUser = useContext(UserContext)
    console.log(currentUser)

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
                    currentUser={currentUser.user}
                    results={results}
                    setResults={setResults}
                    currentBook={currentBook}
                    setCurrentBook={setCurrentBook}
                    setCurrentUser={currentUser.setUser}
                />
            </Route>
            <Route path="/my-books">
                <MyBooks 
                    setCurrentUser={currentUser.setUser}
                    currentUser={currentUser.user}
                    setCurrentBook={setCurrentBook}
                    currentBook={currentBook}
                />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
            <Route path="/login">
                <Login
                    currentUser={currentUser.user}
                    allUsers={allUsers}
                    setCurrentUser={currentUser.setUser}
                />
            </Route>
            <Route path="/create-account">
                <CreateAccount 
                    setCurrentUser={currentUser.setUser}
                    allUsers={allUsers}
                    setUsers={setUsers}
                    currentUser={currentUser.user}
                />
            </Route>
            </Switch>
        </div>
    )
}

export default Body