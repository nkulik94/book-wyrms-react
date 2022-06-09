import React from "react";
import ReviewCard from "./ReviewCard";

function ReviewList( { reviews } ) {
    return (
        <>
            <h6>Reviews:</h6>
            <ul>
                {Object.keys(reviews).map(key => <ReviewCard key={key} review={reviews[key]} />)}
            </ul>
        </>
    )
}

export default ReviewList