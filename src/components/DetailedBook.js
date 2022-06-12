import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ReviewForm from './ReviewForm'
import ReviewList from './ReviewList'
import DetailedBookBtns from './DetailedBookBtns'

function DetailedBook( { book, currentUser, setCurrentUser, setCurrentBook } ) {
    const [displayReviewForm, setReviewForm] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setError(false)
    }, [book, currentUser])

    function handleRequest(obj, resource, callback) {
        const config = {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(obj)
        }

        fetch(`https://book-wyrm-api.herokuapp.com/${resource}`, config)
        .then(r => r.json())
        .then(data => callback(data))
    }

    function handleRatings(rating) {
        handleLists('readList')
        currentUser.readList[book.id].ownRating = rating
        book.rating.allRatings.push(rating)
        book.rating.total = book.rating.total === 'none' ? rating : rating + book.rating.total
        book.rating.average =  Math.round((book.rating.total / book.rating.allRatings.length) * 10) / 10
    }

    function handleReviews(review) {
        if (!currentUser) {
            setError(true)
        } else {
            currentUser.readList[book.id].review = review
            book.hasReviews = true
            book.reviews[currentUser.id] = {
                user: currentUser.name,
                username: currentUser.username,
                content: review,
                rating: currentUser.readList[book.id].ownRating
            }
            setReviewForm(false)
            
            handleRequest(currentUser, `users/${currentUser.id}`, setCurrentUser)
            handleRequest(book, `books/${book.id}`, setCurrentBook)
        }
    }

    function handleLists(list) {
        currentUser[list][book.id] = {
                    cover: book.cover,
                    title: book.title,
                    author: book.author,
                    id: book.id
                }
                book[list][currentUser.id] = currentUser.id
    }
    
    function handleBtns(e) {
        if (!currentUser) {
            setError(true)
        } else {
            if (currentUser.wishList[book.id]) delete currentUser.wishList[book.id]
            if (book.wishList[currentUser.id]) delete book.wishList[currentUser.id]
            
            e.target.name === 'rate-btn' ? handleRatings(parseInt(e.target.value, 10)) : handleLists(e.target.name)
            
            handleRequest(currentUser, `users/${currentUser.id}`, setCurrentUser)
            handleRequest(book, `books/${book.id}`, setCurrentBook)
        }
    }

    const rating = book.rating.total === 'none' ? <p>This book has not been rated by any Book Wyrms</p> : <p>This book has been given an average rating of {book.rating.average} out of 5 by {book.rating.allRatings.length} Book Wyrm(s)</p>
    return (
        <div id='book-detail'>
            <img src={book.cover} alt={book.title} style={{float: "left", marginRight: "10px"}} />
            <h2>{book.title}</h2>
            <br/>
            <h4>By {book.author}</h4>
            <br/>
            <h6>Published by: {book.publisher}</h6>
            <br/>
            <h6>Published {book.publishDate}</h6>
            <br/>
            <p>Description: 
                <br/>
                {book.description}
            </p>
            <br/>
            {rating}
            <br/>
            <p>This book has been read by {Object.keys(book.readList).length} Book Wyrm(s), and {Object.keys(book.wishList).length} Book Wyrm(s) have put it on a wish list</p>
            <br/>
            {error ? <p>Please <Link to="/login">log in</Link> to complete this action</p> : null}
            <br />
            <DetailedBookBtns
                currentBook={book}
                currentUser={currentUser}
                handleClick={handleBtns}
                setReviewForm={setReviewForm}
            />
            <br/>
            {displayReviewForm ? <ReviewForm onReview={handleReviews} /> : null}
            <br/>
            {book.hasReviews ? <ReviewList reviews={book.reviews} /> : null}
        </div>
    )
}

export default DetailedBook