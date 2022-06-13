import React, { useState, useContext } from "react";
import { UserContext } from "../context/user";
import { BookContext } from "../context/book";
import { Card } from "react-bootstrap";
import ReadListReviewCard from "./ReadListReviewCard";
import ReadListUnrated from "./ReadListUnrated";

function ReadListBtns( { book } ) {
    const [displayForm, setForm] = useState(false)

    const setCurrentBook = useContext(BookContext).setBook
    const currentUser = useContext(UserContext).user
    const setCurrentUser = useContext(UserContext).setUser
    

    function handlePatch(obj, resource, callback) {
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
        handlePatch(currentUser, `users/${currentUser.id}`, setCurrentUser)
        fetch(`https://book-wyrm-api.herokuapp.com/books/${book.id}`)
            .then(r => r.json())
            .then(book => {
                delete book.reviews[currentUser.id]
                if (Object.keys(book.reviews).length === 0) book.hasReviews = false
                handlePatch(book, `books/${book.id}`, setCurrentBook)
            })
    }

    function handleRate(e) {
        const difference = parseInt(e.target.value, 10) - currentUser.readList[book.id].ownRating
        currentUser.readList[book.id].ownRating = parseInt(e.target.value, 10)
        handlePatch(currentUser, `users/${currentUser.id}`, setCurrentUser)
        console.log(difference)
        fetch(`https://book-wyrm-api.herokuapp.com/books/${book.id}`)
            .then(r => r.json())
            .then(book => {
                book.rating.total += difference
                handlePatch(book, `books/${book.id}`, setCurrentBook)
            })
    }

    if (!book.review && !book.ownRating) {
        return (
            <ReadListUnrated />
        )
    } else if (book.ownRating && !book.review) {
        return (
            <>
            <p>Your Rating: {book.ownRating} out of 5</p>
            </>
        )
    }

    return (
        <>
        <Card>
            <Card.Header>My Review</Card.Header>
            <Card.Body>
                <ReadListReviewCard book={book} onDeleteReview={handleDeleteReview} setForm={setForm} />
            </Card.Body>
        </Card>
        </>
    )
}

export default ReadListBtns