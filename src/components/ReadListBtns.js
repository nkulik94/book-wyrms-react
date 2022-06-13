import React, { useState, useEffect } from "react";
import ReviewBtns from "./ReviewBtns";
import { Card, Button, ButtonGroup, Form } from 'react-bootstrap'

function ReadListBtns( {book, setCurrentBook } ) {
    const [displayForm, setForm] = useState(false)
    const [review, setReview] = useState('')

    useEffect(() => {
        if (book.review) setReview(book.review)
    }, [])

    function handleSeeMore(id) {
        fetch(`https://book-wyrm-api.herokuapp.com/books/${id}`)
            .then(r => r.json())
            .then(data => setCurrentBook(data))
    }

    const seeMore = <Button onClick={() => handleSeeMore(book.id)} >See more</Button>

    if (!book.review && !book.ownRating) {
        return (
            <>
            <p>Rating: You have not yet rated this book</p>
            {seeMore}
            </>
        )
    } else if (book.ownRating) {
        return (
            <>
            <p>Your Rating: {book.ownRating} out of 5</p>
            {seeMore}
            </>
        )
    }

    return (
        <Card>
            <Card.Header>My Review</Card.Header>
            <Card.Body>
                <Card.Title>{book.ownRating}</Card.Title>
                <Card.Text>{review}</Card.Text>
                {displayForm ? null : <ReviewBtns setForm={setForm} />}
                {seeMore}
            </Card.Body>
        </Card>
    )
}

export default ReadListBtns