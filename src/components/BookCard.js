import React from 'react';
import SearchResultBtn from './SearchResultBtn';

function BookCard( { book, isSearchResult, setCurrentBook } ) {
    const cover = book.cover ? <img src={book.cover} alt={book.title}/> : <h4>There is no cover available for this book</h4>
    const buttons = isSearchResult ? <SearchResultBtn book={book} setCurrentBook={setCurrentBook} /> : null

    return (
        <li className='book-card'>
            {cover}
            <h5>{book.title}</h5>
            <p>By {book.author}</p>
            {buttons}
        </li>
    )
}

export default BookCard