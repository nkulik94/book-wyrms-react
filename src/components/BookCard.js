import React from 'react';

function BookCard( { book } ) {
    return (
        <li className='book-card'>
            <img src={book.cover} alt={book.title}/>
            <h5>{book.title}</h5>
            <p>By {book.author}</p>
        </li>
    )
}

export default BookCard