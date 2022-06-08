import React from "react";
import BookCard from "./BookCard";

function BookList( { results, isSearchResult, setCurrentBook } ) {
    return (
        <>
            <ul>
                {results.map(book => <BookCard
                            book={book}
                            key={book.coverEdition}
                            isSearchResult={isSearchResult}
                            setCurrentBook={setCurrentBook}
                        />
                    )}
            </ul>
        </>
    )
}

export default BookList