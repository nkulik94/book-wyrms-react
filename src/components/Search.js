import React, { useState } from "react";
import SearchForm from "./SearchForm";

function Search() {
    const [results, setResults] = useState([])

    return (
        <div id="search">
            <SearchForm setResults={setResults} />
        </div>
    )
}

export default Search