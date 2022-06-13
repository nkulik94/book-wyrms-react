import React, { useContext } from "react";
import { BookContext } from "../context/book";
import { UserContext } from "../context/user";
import { Button, ButtonGroup } from "react-bootstrap";

function WishListBtns({ handlePatch, book }) {
    const currentBook = useContext(BookContext).book
    const setCurrentBook = useContext(BookContext).setBook
    const currentUser = useContext(UserContext).user
    const setCurrentUser = useContext(UserContext).setUser


    function handleAddToRead() {
        book.list = 'readList'
        delete currentUser.wishList[book.id]
        currentUser.readList[book.id] = book
        handlePatch(currentUser, `users/${currentUser.id}`, setCurrentUser)
        fetch(`https://book-wyrm-api.herokuapp.com/books/${book.id}`)
            .then(r => r.json())
            .then(book => {
                delete book.wishList[currentUser.id]
                book.readList[currentUser.id] = currentUser.id
                handlePatch(book, `books/${book.id}`, () => {
                    if (currentBook.id === book.id) setCurrentBook(book)
                })
            })
    }

    return (
        <ButtonGroup>
            <Button onClick={handleAddToRead} >Add to Read</Button>
            <Button>Remove</Button>
        </ButtonGroup>
    )
}

export default WishListBtns