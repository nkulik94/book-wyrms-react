import React from 'react';
import SearchResultBtn from './SearchResultBtn';
import UserListItems from './UserListItems';

function BookCard( { book, isSearchResult, setCurrentBook, listType } ) {
    const cover = book.cover ? <img src={book.cover} alt={book.title}/> : <h4>There is no cover available for this book</h4>
    const buttons = isSearchResult ? <SearchResultBtn book={book} setCurrentBook={setCurrentBook} /> : <UserListItems book={book} listType={listType} setCurrentBook={setCurrentBook} />

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