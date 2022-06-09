import React, { useState } from 'react';
import Search from './Search';
import DetailedBook from './DetailedBook';

function FindBooks( { currentUser, results, setResults } ) {
    const [currentBook, setCurrentBook] = useState(null)

    return (
        <div style={{position: "relative"}}>
            <Search setCurrentBook={setCurrentBook} results={results} setResults={setResults} />
            <DetailedBook book={currentBook} currentUser={currentUser} />
        </div>
    )
}

export default FindBooks