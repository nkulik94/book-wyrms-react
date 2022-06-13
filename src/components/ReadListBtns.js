import React, { useState, useContext } from "react";
import { UserContext } from "../context/user";
import { BookContext } from "../context/book";
import { Card } from "react-bootstrap";
import ReadListReviewCard from "./ReadListReviewCard";
import ReadListUnrated from "./ReadListUnrated";
import RateEdit from "./RateEdit";
import ReviewForm from "./ReviewForm";

function ReadListBtns( { book, handlePatch } ) {
    const [displayEditForm, setDisplayEdit] = useState(false)

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

    function handleEditReview(newReview) {
        currentUser.readList[book.id].review = newReview
        handlePatch(currentUser, `users/${currentUser.id}`, setCurrentUser)
        fetch(`https://book-wyrm-api.herokuapp.com/books/${book.id}`)
            .then(r => r.json())
            .then(book => {
                book.reviews[currentUser.id].content = newReview
                handlePatch(book, `books/${book.id}`, (book) => {
                    if (book.id === currentBook.id) setCurrentBook(book)
                })
            })
        setDisplayEdit(false)
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
                if (book.reviews[currentUser.id]) book.reviews[currentUser.id].rating = newRating
                handlePatch(book, `books/${book.id}`, (book) => {
                    if (book.id === currentBook.id) setCurrentBook(book)
                })
            })
    }

    if (!book.review && !book.ownRating) {
        return <ReadListUnrated onRate={handleNewRate} />
    } else if (book.ownRating && !book.review) {
        return (
            <>
            <p>Your Rating: {book.ownRating} out of 5</p>
            <RateEdit onChangeRating={handleChangeRate} />
            </>
        )
    } else {
        return (
            <>
            <Card>
                <Card.Header>My Review</Card.Header>
                <Card.Body>
                    {displayEditForm ? <ReviewForm formValue={book.review} onReview={handleEditReview} onCancel={() => setDisplayEdit(false)} /> : <ReadListReviewCard book={book} onDeleteReview={handleDeleteReview} onEdit={setDisplayEdit} />}
                </Card.Body>
            </Card>
            <p>Change Rating?</p>
            <RateEdit onChangeRating={handleChangeRate} />
            </>
        )
    }
}

export default ReadListBtns