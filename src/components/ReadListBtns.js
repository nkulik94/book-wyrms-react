import React from "react";
import { Card, Button } from 'react-bootstrap'

function ReadListBtns( {book} ) {
    console.log(book)
    if (!book.review && !book.ownRating) {
        return <p>Rating: You have not yet rated this book</p>
    } else if (book.ownRating) {
        return <p>Your Rating: {book.ownRating} out of 5</p>
    }

    return (
        <Card>
            <Card.Header>My Review</Card.Header>
            <Card.Body>
                <Card.Title>{book.ownRating}</Card.Title>
                <Card.Text>{book.review}</Card.Text>
                <Button variant="primary">Delete this review</Button>
            </Card.Body>
        </Card>
    )
}

export default ReadListBtns