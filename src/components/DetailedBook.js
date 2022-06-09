import React from 'react'

function DetailedBook( { book } ) {

    const rating = book.rating.total === 'none' ? <p>This book has not been rated by any Book Wyrms</p> : <p>This book has been given an average rating of {book.rating.average} out of 5 by {book.rating.allRatings.length} Book Wyrm(s)</p>
    return (
        <div id='book-detail'>
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
            <p>This book has been read by {Object.keys(book.readBy).length} Book Wyrm(s), and {Object.keys(book.wantToRead).length} Book Wyrm(s) have put it on a wish list</p>
        </div>
    )
}

export default DetailedBook