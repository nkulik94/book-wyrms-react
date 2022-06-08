import React from "react";
import BookCard from "./BookCard";

function BookList( {results} ) {
    return (
        <ul>
            {results.map(book => <BookCard book={book} key={book.olKey} />)}
        </ul>
    )
}

export default BookList