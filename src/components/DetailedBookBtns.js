import React, { useState, useEffect, useContext } from "react";
import { BookContext } from '../context/book'
import { UserContext } from '../context/user'
import RateDropdown from "./RateDropdown";
import { ButtonGroup, Button } from "react-bootstrap";

function DetailedBookBtns( { setReviewForm, handleClick } ) {
    const currentBook = useContext(BookContext).book
    const currentUser = useContext(UserContext).user

    const [rated, setRated] = useState(false)
    const [reviewed, setReviewed] = useState(false)
    
    useEffect(() => {
        if (currentUser) {
            currentBook.readList[currentUser.id] && currentUser.readList[currentBook.id].ownRating ? setRated(true) : setRated(false)
            currentBook.readList[currentUser.id] && currentUser.readList[currentBook.id].review ? setReviewed(true) : setReviewed(false)
        } else {
            setRated(false)
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