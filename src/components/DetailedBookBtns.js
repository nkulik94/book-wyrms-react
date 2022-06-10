import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import RateDropdown from "./RateDropdown";
import { ButtonGroup, Button } from "react-bootstrap";

function DetailedBookBtns( {currentUser, currentBook, setCurrentUser, setCurrentBook} ) {
    const [error, setError] = useState(false)
    
    useEffect(() => {
        setError(false)
    }, [currentBook, currentUser])

    const reviewBtn = <Button>Review</Button>

    function handleClick(e) {
        if (!currentUser) {
            setError(true)
        } else {
            if (currentUser.wishList[currentBook.id]) delete currentUser.wishList[currentBook.id]
            currentUser[e.target.name][currentBook.id] = {
                cover: currentBook.cover,
                title: currentBook.title,
            }
            currentBook[e.target.name][currentUser.id] = currentUser.id

            function handleRequest(obj, resource, callback) {
                const config = {
                    method: "PATCH",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(obj)
                }

                fetch(`https://book-wyrm-api.herokuapp.com/${resource}`, config)
                .then(r => r.json())
                .then(data => {
                    console.log(data)
                    callback(data)
                })
            }
            
            handleRequest(currentUser, `users/${currentUser.id}`, setCurrentUser)
            handleRequest(currentBook, `books/${currentBook.id}`, setCurrentBook)
        }
    }

    return (
        <>
            {error ? <p>Please <Link to="/login">log in</Link> to complete this action</p> : null}
            <ButtonGroup>
                <Button
                    name="readList"
                    disabled={currentUser && currentUser.readList[currentBook.id]}
                    onClick={handleClick}
                >
                    Add to Read list
                </Button>
                <Button
                    name="wishList"
                    disabled={currentUser && currentUser.wishList[currentBook.id]}
                    onClick={handleClick}
                >
                    Add to Wish list
                </Button>
                <RateDropdown />
            </ButtonGroup>
        </>
    )
}

export default DetailedBookBtns