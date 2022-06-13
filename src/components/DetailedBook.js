import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { BookContext } from '../context/book'
import { UserContext } from '../context/user'
import ReviewForm from './ReviewForm'
import ReviewList from './ReviewList'
import DetailedBookBtns from './DetailedBookBtns'

function DetailedBook() {
    const [displayReviewForm, setReviewForm] = useState(false)
    const [error, setError] = useState(false)

    const currentBook = useContext(BookContext)
    const currentUser = useContext(UserContext)
    const book = currentBook.book

    useEffect(() => {
        setError(false)
    }, [currentBook.book, currentUser.user])

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
        currentUser.user.readList[book.id].ownRating = rating
        book.rating.amount += 1
        book.rating.total += rating
        book.rating.average =  Math.round((book.rating.total / book.rating.amount) * 10) / 10
    }

    function handleReviews(review) {
        if (!currentUser.user) {
            setError(true)
        } else {
            currentUser.user.readList[book.id].review = review
            book.hasReviews = true
            book.reviews[currentUser.user.id] = {
                user: currentUser.user.name,
                username: currentUser.user.username,
                content: review,
                rating: currentUser.user.readList[book.id].ownRating
            }
            setReviewForm(false)
            
            handleRequest(currentUser.user, `users/${currentUser.user.id}`, currentUser.setUser)
            handleRequest(book, `books/${book.id}`, currentBook.setBook)
        }
    }

    function handleLists(list) {
        currentUser.user[list][book.id] = {
                    cover: book.cover,
                    title: book.title,
                    author: book.author,
                    id: book.id,
                    list: list
                }
                book[list][currentUser.user.id] = currentUser.user.id
    }
    
    function handleBtns(e) {
        if (!currentUser.user) {
            setError(true)
        } else {
            if (currentUser.user.wishList[book.id]) delete currentUser.user.wishList[book.id]
            if (book.wishList[currentUser.user.id]) delete book.wishList[currentUser.user.id]
            
            e.target.name === 'rate-btn' ? handleRatings(parseInt(e.target.value, 10)) : handleLists(e.target.name)
            
            handleRequest(currentUser.user, `users/${currentUser.user.id}`, currentUser.setUser)
            handleRequest(book, `books/${book.id}`, currentBook.setBook)
        }
    }

    const rating = book.rating.total === 0 ? <p>This book has not been rated by any Book Wyrms</p> : <p>This book has been given an average rating of {book.rating.average} out of 5 by {book.rating.amount} Book Wyrm(s)</p>
    return (
        <div className='book-detail'>
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