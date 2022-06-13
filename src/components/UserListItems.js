import React from 'react';
import ReadListBtns from './ReadListBtns';

function UserListItems( {book, setCurrentBook, currentUser, setCurrentUser } ) {
    if (book.list === 'readList') return <ReadListBtns book={book} setCurrentBook={setCurrentBook} currentUser={currentUser} setCurrentUser={setCurrentUser} />
}

export default UserListItems