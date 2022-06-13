import React from "react";
import BookCard from "./BookCard";

function BookList( { books, isSearchResult, setCurrentBook, keyName, setCurrentUser, currentUser } ) {
    return (
        <>
            <ul>
                {books.map(book => {
                            return (
                                <BookCard
                                    book={book}
                                    key={book[keyName]}
                                    isSearchResult={isSearchResult}
                                    setCurrentBook={setCurrentBook}
                                    setCurrentUser={setCurrentUser}
                                    currentUser={currentUser}
                                />
                            )
                    })
                }
            </ul>
        </>
    )
}

export default BookList