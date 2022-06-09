import React, { useState } from "react";
import RateDropdown from "./RateDropdown";
import { ButtonGroup, Button } from "react-bootstrap";

function DetailedBookBtns( {currentUser, currentBook} ) {
    const [error, setError] = useState(false)

    const reviewBtn = <Button>Review</Button>

    function handleClick(e) {
        if (!currentUser) {
            setError(true)
            setTimeout(() => setError(false), 3000)
        }
    }

    return (
        <>
            {error ? <p>Please log in to complete this action</p> : null}
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