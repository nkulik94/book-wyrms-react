import React from "react";
import BookCard from "./BookCard";

function BookList( { books, isSearchResult, keyName} ) {
    return (
        <>
            <ul>
                {books.map(book => {
                            return (
                                <BookCard
                                    book={book}
                                    key={book[keyName]}
                                    isSearchResult={isSearchResult}
                                />
                            )
                    })
                }
            </ul>
        </>
    )
}

export default BookList