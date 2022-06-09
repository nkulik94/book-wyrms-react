import React from 'react'

function DetailedBook( { book } ) {
    return (
        <div id='book-detail'>
            <img src={book.cover} alt={book.title} style={{float: "left"}} />
        </div>
    )
}

export default DetailedBook