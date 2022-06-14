import React, { useEffect, useState } from "react";
import BookDetails from "./BookDetails";
import FeaturedReviewCard from "./FeaturedReviewCard";

function FeaturedBook() {
    const [bookDetails, setBookDetails] = useState(null);
    const [review, setReview] = useState(null);

    useEffect(() => {
        fetch('https://book-wyrm-api.herokuapp.com/featured/1')
            .then(r => r.json())
            .then(data => {
                setReview(data.staffReview)
                fetch(`https://book-wyrm-api.herokuapp.com/books/${data.bookWyrmsId}`)
                    .then(r => r.json())
                    .then(book => setBookDetails(book))
            })
    }, []);

    return (
        <div className='info' style={{margin: 'auto', marginTop: '20px', width: '80%'}}>
            {bookDetails ? <BookDetails book={bookDetails}/> : null}
            {review && bookDetails ? <FeaturedReviewCard review={review} title={bookDetails.title} /> : null}
        </div>
    )
}

export default FeaturedBook