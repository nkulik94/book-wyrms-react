import React from "react";
import { Card } from 'react-bootstrap'
import ReviewBtns from "./ReviewBtns";

function ReadListReviewCard( {onEdit, onDeleteReview, book } ) {
    return (
        <>
        <Card.Title>{book.ownRating} out of 5</Card.Title>
        <Card.Text>{book.review}</Card.Text>
        <ReviewBtns onEdit={onEdit} onDeleteReview={onDeleteReview} />
        </>
    )
}

export default ReadListReviewCard