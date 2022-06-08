import React from "react";
import BookList from "./ResultList";

function SearchResults( { results } ) {
    return (
        <BookList results={results} />
    )
}

export default SearchResults