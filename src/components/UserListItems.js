import React from 'react';
import ReadListBtns from './ReadListBtns';

function UserListItems( {book, listType} ) {
    console.log(book)
    console.log(listType)
    if (listType === 'readList') return <ReadListBtns book={book} />
}

export default UserListItems