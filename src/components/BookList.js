import React from "react";
import BookCard from "./BookCard";

function BookList( { books, isSearchResult, setCurrentBook, keyName } ) {
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
                                />
                            )
                    })
                }
            </ul>
        </>
    )
}

export default BookList