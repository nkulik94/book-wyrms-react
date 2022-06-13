import React from 'react';
import { Button } from 'react-bootstrap';
import ReadListBtns from './ReadListBtns';

function UserListItems( {book, setCurrentBook, currentUser, setCurrentUser } ) {

    function handleSeeMore(id) {
        fetch(`https://book-wyrm-api.herokuapp.com/books/${id}`)
            .then(r => r.json())
            .then(data => setCurrentBook(data))
    }

    const seeMore = <Button onClick={() => handleSeeMore(book.id)} >See more</Button>

    if (book.list === 'readList') {
        return <ReadListBtns
            book={book} setCurrentBook={setCurrentBook}
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
            seeMore={seeMore}
        />
    }

    return <>{seeMore}</>
}

export default UserListItems