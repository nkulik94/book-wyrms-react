import React, { useState, useEffect } from "react";
import ReviewBtns from "./ReviewBtns";
import { Card, Button } from 'react-bootstrap'

function ReadListBtns( {book, setCurrentBook, currentUser, setCurrentUser, seeMore } ) {
    const [displayForm, setForm] = useState(false)
    

    // function handleSeeMore(id) {
    //     fetch(`https://book-wyrm-api.herokuapp.com/books/${id}`)
    //         .then(r => r.json())
    //         .then(data => setCurrentBook(data))
    // }

    // const seeMore = <Button onClick={() => handleSeeMore(book.id)} >See more</Button>

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
        <Card>
            <Card.Header>My Review</Card.Header>
            <Card.Body>
                <Card.Title>{book.ownRating} out of 5</Card.Title>
                <Card.Text>{book.review}</Card.Text>
                {displayForm ? null : <ReviewBtns setForm={setForm} onDeleteReview={handleDeleteReview} />}
                {seeMore}
            </Card.Body>
        </Card>
    )
}

export default ReadListBtns