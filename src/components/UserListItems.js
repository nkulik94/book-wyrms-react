import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { BookContext } from '../context/book';
import { UserContext } from '../context/user';
import ReadListBtns from './ReadListBtns';

function UserListItems( { book } ) {
    const setBook = useContext(BookContext).setBook
    const currentUser = useContext(UserContext).user
    const currentBook = useContext(BookContext).book

    function handleSeeMore(id) {
        fetch(`https://book-wyrm-api.herokuapp.com/books/${id}`)
            .then(r => r.json())
            .then(data => setBook(data))
    }

    function handlePatch(obj, resource, callback) {
        const config = {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(obj)
        }

        fetch(`https://book-wyrm-api.herokuapp.com/${resource}`, config)
        .then(r => r.json())
        .then(data => callback(data))
    }


    const seeMore = <Button variant='info' onClick={() => handleSeeMore(book.id)} style={{marginTop: '10px'}}>See more</Button>

    const buttons = book.list === 'readList' ? <ReadListBtns book={book} handlePatch={handlePatch} /> : null

    return (
        <>
        {buttons}
        {seeMore}
        </>
    )
}

export default UserListItems