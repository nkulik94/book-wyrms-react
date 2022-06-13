import React, { useState } from 'react';
import { Button } from 'react-bootstrap'
import RateDropdown from './RateDropdown';

function ReadListRated({ book, onChangeRating }) {
    const [displayDropdown, setDropdown] = useState(false)

    function handleRateChange(e) {
        setDropdown(false)
        onChangeRating(parseInt(e.target.value, 10))
    }
    return (
        <>
        <p>Your Rating: {book.ownRating} out of 5</p>
        {displayDropdown ? <RateDropdown handleClick={handleRateChange} /> : <Button onClick={() => setDropdown(true)} >Change</Button>}
        <br/>
        </>
    )
}

export default ReadListRated