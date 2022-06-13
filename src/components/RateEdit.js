import React, { useState } from 'react';
import { Button } from 'react-bootstrap'
import RateDropdown from './RateDropdown';

function RateEdit({ onChangeRating }) {
    const [displayDropdown, setDropdown] = useState(false)

    function handleRateChange(e) {
        setDropdown(false)
        onChangeRating(parseInt(e.target.value, 10))
    }
    return (
        <>
        {displayDropdown ? <RateDropdown handleClick={handleRateChange} /> : <Button onClick={() => setDropdown(true)} >Change</Button>}
        <br/>
        </>
    )
}

export default RateEdit