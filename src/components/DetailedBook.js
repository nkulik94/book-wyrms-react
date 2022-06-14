import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { BookContext } from '../context/book'
import { UserContext } from '../context/user'
import ReviewForm from './ReviewForm'
import ReviewList from './ReviewList'
import BookDetails from './BookDetails'
import DetailedBookBtns from './DetailedBookBtns'

function DetailedBook() {
    const [displayReviewForm, setReviewForm] = useState(false)
    const [error, setError] = useState(false)

    const book = useContext(BookContext).book
    const currentUser = useContext(UserContext)
    const setCurrentBook = useContext(BookContext).setBook

    useEffect(() => {
        setError(false)
    }, [book, currentUser.user])

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
        if (!currentUser.user) {
            setError(true)
        } else {
            handleLists('readList')
            currentUser.user.readList[book.id].ownRating = rating
            book.rating.amount += 1
            book.rating.total += rating
            book.rating.average =  Math.round((book.rating.total / book.rating.amount) * 10) / 10
        }
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
            handleRequest(book, `books/${book.id}`, setCurrentBook)
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
            handleRequest(book, `books/${book.id}`, setCurrentBook)
        }
    }

    return (
        <div className='book-detail'>
            <BookDetails book={book} />
            {error ? <p>Please <Link to="/login">log in</Link> to complete this action</p> : null}
            <br />
            <DetailedBookBtns
                handleClick={handleBtns}
                setReviewForm={setReviewForm}
            />
            <br/>
            {displayReviewForm ? <ReviewForm onReview={handleReviews} onCancel={() => setReviewForm(false)} formValue={''} /> : null}
            <br/>
            {book.hasReviews ? <ReviewList reviews={book.reviews} /> : null}
        </div>
    )
}

export default DetailedBook