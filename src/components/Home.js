import React from 'react';
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='info'>
            <div style={{textAlign: 'center'}}>
                <h1>Welcome to Book Wyrms!</h1>
                <h4>Your one-stop shop for all you need to know about books</h4>
            </div>
            <br/>
            <div>
                <span><strong>Find books:</strong> Visit our <Link to={'/bookfinder'}>search</Link> page to find information on millions of books, obtained via the Open Library <a href='https://openlibrary.org/developers/api'>API</a></span>
                <br/>
                <br/>
                <span><strong>Track Your Books:</strong> Add books to your <Link to={'./my-books'}>shelf</Link> to keep track of what you have read or would like to read</span>
                <br/>
                <br/>
                <span><strong>Ratings and Reviews:</strong> Books can be rated and reviewed by our users, so others can see what the Book Wyrms community thinks</span>
            </div>
            <br/>
            <p>
                Note: This is a demo site created as a practice project. The focus of the project was front-end development. The backend for this project is not a true backend, and changes to the backend (such as creating accounts, rating books, etc) will only persist as long as the mock backend is running (approximately a half hour after the last request was made).
            </p>
            <br/>
            <p>
                Note: If you had no idea what the previous paragraph meant, to put it simply if you create an account it'll disappear approximately a half hour after you leave the site.
            </p>
            <br/>
            <p><strong>Please note</strong> that information submitted to this site is in no way secure. If you create an account, we at Book Wyrms advise against using the same password that you use for your online banking.</p>
        </div>
    )
}

export default Home