import React from "react";
import RateDropdown from "./RateDropdown";

function ReadListUnrated( { onRate } ) {
    return (
        <>
        <p>Rating: You have not yet rated this book</p>
        <RateDropdown handleClick={onRate} />
        <br/>
        </>
    )
}

export default ReadListUnrated