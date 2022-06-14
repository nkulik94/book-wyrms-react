import React from "react";

function BookDetails({ book }) {
    const rating = book.rating.total === 0 ? <p>This book has not been rated by any Book Wyrms</p> : <p>Average BookWyrm rating: {book.rating.average} out of 5 by {book.rating.amount} Book Wyrm(s)</p>
    
    return (
        <>
            <img src={book.cover} alt={book.title} style={{float: "left", marginRight: "10px"}} />
            <h2>{book.title}</h2>
            <br/>
            <h4>By {book.author}</h4>
            <br/>
            <h6>Published by: {book.publisher}</h6>
            <br/>
            <h6>Published {book.publishDate}</h6>
            <br/>
            <p>Description: 
                <br/>
                {book.description}
            </p>
            <br/>
            {rating}
            <br/>
            <p>This book has been read by {Object.keys(book.readList).length} Book Wyrm(s), and {Object.keys(book.wishList).length} Book Wyrm(s) have put it on a wish list</p>
            <br/>
        </>
    )
}

export default BookDetails