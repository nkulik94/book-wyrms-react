import React, { useState, useContext } from "react";
import { UserContext } from "../context/user";
import { BookContext } from "../context/book";
import { Card } from "react-bootstrap";
import ReadListReviewCard from "./ReadListReviewCard";

function ReadListBtns( { book, seeMore } ) {
    const [displayForm, setForm] = useState(false)

    const setCurrentBook = useContext(BookContext).setBook
    const currentUser = useContext(UserContext).user
    const setCurrentUser = useContext(UserContext).setUser
    

    if (!book.review && !book.ownRating) {
        return (
            <>
            <p>Rating: You have not yet rated this book</p>
            {seeMore}
            </>
        )
    } else if (book.ownRating && !book.review) {
        return (
            <>
            <p>Your Rating: {book.ownRating} out of 5</p>
            {seeMore}
            </>
        )
    }

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
        .then(data => callback(data))
    }

    function handleDeleteReview() {
        delete currentUser.readList[book.id].review
        handleRequest(currentUser, `users/${currentUser.id}`, setCurrentUser)
        fetch(`https://book-wyrm-api.herokuapp.com/books/${book.id}`)
            .then(r => r.json())
            .then(book => {
                delete book.reviews[currentUser.id]
                if (Object.keys(book.reviews).length === 0) book.hasReviews = false
                handleRequest(book, `books/${book.id}`, setCurrentBook)
            })
    }

    return (
        <>
        <Card>
            <Card.Header>My Review</Card.Header>
            <Card.Body>
                <ReadListReviewCard book={book} onDeleteReview={handleDeleteReview} setForm={setForm} />
            </Card.Body>
        </Card>
        {seeMore}
        </>
    )
}

export default ReadListBtns