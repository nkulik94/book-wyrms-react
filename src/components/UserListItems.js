import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { BookContext } from '../context/book';
import ReadListBtns from './ReadListBtns';

function UserListItems( { book } ) {
    const setBook = useContext(BookContext).setBook

    function handleSeeMore(id) {
        fetch(`https://book-wyrm-api.herokuapp.com/books/${id}`)
            .then(r => r.json())
            .then(data => setBook(data))
    }

    const seeMore = <Button onClick={() => handleSeeMore(book.id)} >See more</Button>

    if (book.list === 'readList') {
        return <ReadListBtns
            book={book}
            seeMore={seeMore}
        />
    }

    return <>{seeMore}</>
}

export default UserListItems