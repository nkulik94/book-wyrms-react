import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import RateDropdown from "./RateDropdown";
import { ButtonGroup, Button } from "react-bootstrap";

function DetailedBookBtns( {currentUser, currentBook} ) {
    const [error, setError] = useState(false)
    
    useEffect(() => {
        if (currentUser) setError(false)
    }, [])

    const reviewBtn = <Button>Review</Button>

    function handleClick(e) {
        if (!currentUser) {
            setError(true)
        }
    }

    return (
        <>
            {error ? <p>Please <Link to="/login">log in</Link> to complete this action</p> : null}
            <ButtonGroup>
                <Button
                    name="readList"
                    disabled={currentUser && currentUser.readList[currentBook.id]}
                    onClick={handleClick}
                >
                    Add to Read list
                </Button>
                <Button
                    name="wishList"
                    disabled={currentUser && currentUser.wishList[currentBook.id]}
                    onClick={handleClick}
                >
                    Add to Wish list
                </Button>
                <RateDropdown />
            </ButtonGroup>
        </>
    )
}

export default DetailedBookBtns