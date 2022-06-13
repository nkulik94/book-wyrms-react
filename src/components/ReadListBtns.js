import React, { useState, useContext } from "react";
import { UserContext } from "../context/user";
import { BookContext } from "../context/book";
import { Card } from "react-bootstrap";
import ReadListReviewCard from "./ReadListReviewCard";
import ReadListUnrated from "./ReadListUnrated";
import ReadListRated from "./ReadListRated";

function ReadListBtns( { book, handlePatch } ) {

    const setCurrentBook = useContext(BookContext).setBook
    const currentUser = useContext(UserContext).user
    const setCurrentUser = useContext(UserContext).setUser
    const currentBook = useContext(BookContext).book
    


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

    function handleChangeRate(newRating) {
        const oldRating = currentUser.readList[book.id].ownRating
        currentUser.readList[book.id].ownRating = newRating
        handlePatch(currentUser, `users/${currentUser.id}`, setCurrentUser)
        fetch(`https://book-wyrm-api.herokuapp.com/books/${book.id}`)
            .then(r => r.json())
            .then(book => {
                book.rating.total += newRating - oldRating
                book.rating.average = Math.ceil((book.rating.total / book.rating.amount) * 10) / 10
                handlePatch(book, `books/${book.id}`, (book) => {
                    if (book.id === currentBook.id) setCurrentBook(book)
                })
            })
    }

    if (!book.review && !book.ownRating) {
        return <ReadListUnrated onRate={handleNewRate} />
    } else if (book.ownRating && !book.review) {
        return <ReadListRated book={book} onChangeRating={handleChangeRate} />
    } else {
        return (
            <>
            <Card>
                <Card.Header>My Review</Card.Header>
                <Card.Body>
                    <ReadListReviewCard book={book} onDeleteReview={handleDeleteReview} />
                </Card.Body>
            </Card>
            </>
        )
    }
}

export default ReadListBtns