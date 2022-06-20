import React, { useContext } from 'react';
import { BookContext  } from "../context/book";
import Search from './Search';
import DetailedBook from './DetailedBook';

function FindBooks() {
    const currentBook = useContext(BookContext)

    return (
        <div style={{position: "relative"}}>
            <Search />
            {currentBook.book ? <DetailedBook /> : null}
        </div>
    )
}

export default FindBooks