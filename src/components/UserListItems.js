import React from 'react';
import ReadListBtns from './ReadListBtns';

function UserListItems( {book, setCurrentBook } ) {
    if (book.list === 'readList') return <ReadListBtns book={book} setCurrentBook={setCurrentBook} />
}

export default UserListItems