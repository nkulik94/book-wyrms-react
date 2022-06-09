import React from "react";
import { Card } from 'react-bootstrap';

function ReviewCard( {review} ) {
    return (
        <li>
            <Card>
                <Card.Header>{review.user} @{review.username}</Card.Header>
                <Card.Body>
                    <Card.Subtitle>Rated {review.rating} out of 5</Card.Subtitle>
                    <Card.Text>{review.content}</Card.Text>
                </Card.Body>
            </Card>
        </li>
    )
}

export default ReviewCard