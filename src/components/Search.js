import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import BookList from "./BookList";

function Search( {setCurrentBook} ) {
    const [results, setResults] = useState([])
    const [fixedResults, setListToRender] = useState([])

    useEffect(() => {
        const fixedList = results.map(book => {
            const cover = book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : null
            const author = book.author_name.length > 1 ? `${book.author_name[0]} and ${book.author_name.length - 1} others` : book.author_name[0]
            return {
                cover: cover,
                author: author,
                title: book.title,
                //olKey: book.key,
                coverEdition: book.cover_edition_key ? book.cover_edition_key : book.key
            }
        })
        setListToRender(fixedList)
    }, [results])

    return (
        <div id="search">
            <SearchForm setResults={setResults} />
            <BookList isSearchResult={true} results={fixedResults} setCurrentBook={setCurrentBook} />
        </div>
    )
}

export default Search