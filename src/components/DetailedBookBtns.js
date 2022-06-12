import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import RateDropdown from "./RateDropdown";
import { ButtonGroup, Button } from "react-bootstrap";

function DetailedBookBtns( {currentUser, currentBook, setReviewForm, handleClick } ) {
    const [error, setError] = useState(false)
    const [rated, setRated] = useState(false)
    const [reviewed, setReviewed] = useState(false)
    //const [disabledRateBtn, setDisabledRateBtn] = useState(false)
    
    useEffect(() => {
        setError(false)
        if (currentUser) {
            currentBook.readList[currentUser.id] && currentUser.readList[currentBook.id].ownRating ? setRated(true) : setRated(false)
            currentBook.readList[currentUser.id] && currentUser.readList[currentBook.id].review ? setReviewed(true) : setReviewed(false)
        }
    }, [currentBook, currentUser])


    //const reviewBtn = <Button disabled={rated && currentUser[currentBook.id].review} onClick={() => setReviewForm(true)}>Review</Button>

    return (
        <>
            {error ? <p>Please <Link to="/login">log in</Link> to complete this action</p> : null}
            <ButtonGroup>
                <Button
                    name="readList"
                    disabled={currentUser && currentUser.readList[currentBook.id]}
                    onClick={e => currentUser ? handleClick(e) : setError(true)}
                >
                    Add to Read list
                </Button>
                <Button
                    name="wishList"
                    disabled={currentUser && (currentUser.wishList[currentBook.id] || currentUser.readList[currentBook.id])}
                    onClick={e => currentUser ? handleClick(e) : setError(true)}
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