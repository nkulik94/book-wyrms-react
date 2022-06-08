import React from "react";
import { Button } from 'react-bootstrap'

function SearchResultBtn( { book, setCurrentBook } ) {
    function handleClick() {
        fetch(`http://localhost:3000/books?olKey=${book.coverEdition}`)
            .then(r => r.json())
            .then(data => data.length > 0 ? setCurrentBook(data[0]) : handleNoResponse())
    }

    function handleNoResponse() {
        const newBook = {
            ...book,
            olKey: book.coverEdition,
            readBy: [],
            wantToRead: [],
            rating: {
                allRatings: [],
                total: 'none',
                average: 'none'
            },
            reviews: []
        }
        delete newBook.coverEdition
        fetch(`https://openlibrary.org${book.coverEdition}.json`)
            .then(r => r.json())
            .then(data => {
                newBook.description = data.description ? data.description : 'Sorry, there is no description available for this book'
                if (typeof data.description === 'object') {
                    newBook.description = data.description.value
                }
                newBook.publisher = Array.isArray(data.publishers) ? data.publishers[0] : 'unavailable'
                newBook.publishDate = data.publish_date
                if (data.series) {
                    newBook.series = Array.isArray(data.series) ? data.series[0] : data.series
                }
                const config = {
                    method: 'Post',
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(newBook)
                }
                fetch('http://localhost:3000/books', config)
                    .then(r => r.json())
                    .then(res => setCurrentBook(res))
            })
    }

    return (
        <Button variant="info" onClick={handleClick}>See more details</Button>
    )
}

export default SearchResultBtn