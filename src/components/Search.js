import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import PageBtns from "./PagesBtns";
import BookList from "./BookList";

function Search( {setCurrentBook} ) {
    const [results, setResults] = useState(null)
    const [fixedResults, setListToRender] = useState([])
    const [currentPage, setPage] = useState({
        page: 1,
        start: 0,
        end: 10
    })

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
                    //olKey: book.key,
                    coverEdition: book.cover_edition_key ? `/books/${book.cover_edition_key}` : book.key
                }
            })
            setListToRender(fixedList)
        }
    }, [results])

    return (
        <div id="search">
            <SearchForm setResults={setResults} />
            {results ? <PageBtns setPage={setPage} pageAmt={Math.ceil(fixedResults.length / 10)} /> : null}
            <BookList
                isSearchResult={true}
                results={fixedResults.slice(currentPage.start, currentPage.end)}
                setCurrentBook={setCurrentBook}
            />
        </div>
    )
}

export default Search