import React from "react";
import { Card } from 'react-bootstrap'
import ReviewBtns from "./ReviewBtns";

function ReadListReviewCard( {onEdit, onDeleteReview, book } ) {
    return (
        <>
        <Card.Subtitle>{book.ownRating} out of 5</Card.Subtitle>
        <Card.Text>{book.review}</Card.Text>
        <ReviewBtns onEdit={onEdit} onDeleteReview={onDeleteReview} />
        </>
    )
}

export default ReadListReviewCard