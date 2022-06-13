import React, { useContext } from 'react';
import { BookContext  } from "../context/book";
import Search from './Search';
import DetailedBook from './DetailedBook';

function FindBooks( { results, setResults} ) {
    const currentBook = useContext(BookContext)

    return (
        <div style={{position: "relative"}}>
            <Search results={results} setResults={setResults} />
            {currentBook.book ? <DetailedBook /> : null}
        </div>
    )
}

export default FindBooks