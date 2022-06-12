import React, { useState, useEffect } from "react";
import RateDropdown from "./RateDropdown";
import { ButtonGroup, Button } from "react-bootstrap";

function DetailedBookBtns( {currentUser, currentBook, setReviewForm, handleClick, setError } ) {

    const [rated, setRated] = useState(false)
    const [reviewed, setReviewed] = useState(false)
    
    useEffect(() => {
        if (currentUser) {
            currentBook.readList[currentUser.id] && currentUser.readList[currentBook.id].ownRating ? setRated(true) : setRated(false)
            currentBook.readList[currentUser.id] && currentUser.readList[currentBook.id].review ? setReviewed(true) : setReviewed(false)
        }
    }, [currentBook, currentUser])

    return (
        <>
            <ButtonGroup>
                <Button
                    name="readList"
                    disabled={currentUser && currentUser.readList[currentBook.id]}
                    onClick={e => handleClick(e)}
                >
                    Add to Read list
                </Button>
                <Button
                    name="wishList"
                    disabled={currentUser && (currentUser.wishList[currentBook.id] || currentUser.readList[currentBook.id])}
                    onClick={e => handleClick(e)}
                >
                    Add to Wish list
                </Button>
                {rated ? <Button disabled={reviewed} onClick={() => setReviewForm(true)}>Review</Button> : <RateDropdown handleClick={handleClick} />}
            </ButtonGroup>
            {rated ? null : <p>Please rate this book if you'd like to leave a review</p>}
        </>
    )
}

export default DetailedBookBtns