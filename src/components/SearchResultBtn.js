import React from "react";
import { Button } from 'react-bootstrap'

function SearchResultBtn( { book, setCurrentBook } ) {
    function handleClick() {
        fetch(`http://localhost:3000/books?olKey=/books/${book.coverEdition}`)
            .then(r => r.json())
            .then(data => console.log(data))
    }

    return (
        <Button variant="info" onClick={handleClick}>See more details</Button>
    )
}

export default SearchResultBtn