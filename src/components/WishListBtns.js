import React, { useContext } from "react";
import { BookContext } from "../context/book";
import { UserContext } from "../context/user";
import { Button, ButtonGroup } from "react-bootstrap";

function WishListBtns({ handlePatch, book }) {
    const currentBook = useContext(BookContext).book
    const setCurrentBook = useContext(BookContext).setBook
    const currentUser = useContext(UserContext).user
    const setCurrentUser = useContext(UserContext).setUser


    function handleModifyList(read) {
        delete currentUser.wishList[book.id]
        if (read) {
            book.list = 'readList'
            currentUser.readList[book.id] = book
        }
        handlePatch(currentUser, `users/${currentUser.id}`, setCurrentUser)
        fetch(`https://json-server-template-production.up.railway.app/books/${book.id}`)
            .then(r => r.json())
            .then(book => {
                delete book.wishList[currentUser.id]
                if (read) book.readList[currentUser.id] = currentUser.id
                handlePatch(book, `books/${book.id}`, () => {
                    if (currentBook.id === book.id) setCurrentBook(book)
                })
            })
    }

    return (
        <ButtonGroup>
            <Button onClick={() => handleModifyList(true)} >Add to Read</Button>
            <Button onClick={() => handleModifyList(false)} variant='danger' >Remove</Button>
        </ButtonGroup>
    )
}

export default WishListBtns