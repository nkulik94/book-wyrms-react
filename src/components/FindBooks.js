import React from 'react';
import Search from './Search';

function FindBooks( { currentBook, setCurrentBook } ) {
    return (
        <Search setCurrentBook={setCurrentBook} />
    )
}

export default FindBooks