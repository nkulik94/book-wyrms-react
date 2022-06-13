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
    const currentBook = useContext(BookContext).book
    

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
                handlePatch(book, `books/${book.id}`, (book) => {
                    if (book.id === currentBook.id) setCurrentBook(book)
                })
            })
    }

    function handleNewRate(e) {
        currentUser.readList[book.id].ownRating = parseInt(e.target.value, 10)
        handlePatch(currentUser, `users/${currentUser.id}`, setCurrentUser)
        fetch(`https://book-wyrm-api.herokuapp.com/books/${book.id}`)
            .then(r => r.json())
            .then(book => {
                book.rating.amount += 1
                book.rating.total += currentUser.readList[book.id].ownRating
                book.rating.average = Math.ceil((book.rating.total / book.rating.amount) * 10) / 10
                handlePatch(book, `books/${book.id}`, (book) => {
                    if (book.id === currentBook.id) setCurrentBook(book)
                })
            })
    }

    if (!book.review && !book.ownRating) {
        return (
            <ReadListUnrated onRate={handleNewRate} />
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