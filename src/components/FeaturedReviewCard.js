import React from "react";
import { Card } from "react-bootstrap";
import FeaturedReviewParagraph from "./FeaturedReviewParagraph";

function FeaturedReviewCard({ review, title }) {
    return (
        <Card>
            <Card.Header>Book Wyrms Official Review</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {review.map((paragraph, index) => {
                        return <FeaturedReviewParagraph paragraph={paragraph} key={index} />
                    })}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default FeaturedReviewCard