import React from "react";
import BookCard from "./BookCard";

function BookList( { books, isSearchResult, setCurrentBook, keyName, listType } ) {
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
                                    listType={listType}
                                />
                            )
                    })
                }
            </ul>
        </>
    )
}

export default BookList