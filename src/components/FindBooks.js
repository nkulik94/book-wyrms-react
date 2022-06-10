import React, { useState } from 'react';
import Search from './Search';
import DetailedBook from './DetailedBook';

function FindBooks( { currentUser, results, setResults, currentBook, setCurrentBook, setCurrentUser } ) {

    return (
        <div style={{position: "relative"}}>
            <Search setCurrentBook={setCurrentBook} results={results} setResults={setResults} />
            {currentBook ? <DetailedBook book={currentBook} currentUser={currentUser} setCurrentUser={setCurrentUser} setCurrentBook={setCurrentBook} /> : null}
        </div>
    )
}

export default FindBooks