import React, { useState, useEffect, useContext } from "react";
import { BookContext  } from "../context/book";
import SearchForm from "./SearchForm";
import PageBtns from "./PageBtns";
import BookList from "./BookList";

function Search() {
    const [results, setResults] = useState(null)
    const [fixedResults, setListToRender] = useState([])
    //const [filterBy, setFilter] = useState('')
    const [currentPage, setPage] = useState({
        page: 1,
        start: 0,
        end: 5
    })

    const setCurrentBook = useContext(BookContext).setBook

    useEffect(() => {
        if (results) {
            const fixedList = results.map(book => {
                if (!book.author_name) return null
                const cover = book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : null
                const author = book.author_name.length > 1 ? `${book.author_name[0]} and ${book.author_name.length - 1} others` : book.author_name[0]
                return {
                    cover: cover,
                    author: author,
                    title: book.title,
                    coverEdition: book.cover_edition_key ? `/books/${book.cover_edition_key}` : book.key
                }
            })
            setListToRender(fixedList)
        }
    }, [results])

    const filteredList = fixedResults.filter(book => book)

    return (
        <div className="list">
            <SearchForm setResults={setResults} />
            {results ? <PageBtns setPage={setPage} pageAmt={Math.ceil(filteredList.length / 5)} currentPage={currentPage} /> : null}
            <BookList
                isSearchResult={true}
                books={filteredList.slice(currentPage.start, currentPage.end)}
                setCurrentBook={setCurrentBook}
                keyName={'coverEdition'}
            />
        </div>
    )
}

export default Search