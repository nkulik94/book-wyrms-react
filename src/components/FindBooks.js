import React, { useState } from 'react';
import Search from './Search';
import DetailedBook from './DetailedBook';

function FindBooks() {
    const [currentBook, setCurrentBook] = useState(null)

    return (
        <div style={{position: 'relative'}}>
            <Search setCurrentBook={setCurrentBook} />
            {currentBook ? <DetailedBook book={currentBook} /> : null}
        </div>
    )
}

export default FindBooks