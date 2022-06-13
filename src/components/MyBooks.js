import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import MyBookList from './MyBookList';
import DetailedBook from './DetailedBook';
function MyBooks( { setCurrentUser, currentUser, setCurrentBook, currentBook } ) {
    const history = useHistory()
    const [readDisabled, setReadDisabled] = useState(true)
    const [readList, updateReadlist] = useState('')
    const [wishList, updateWishlist] = useState('')

    useEffect(() => {
        setReadDisabled(true)
        if (!currentUser) {
            history.push('./login')
        } else {
            updateReadlist(currentUser.readList)
            updateWishlist(currentUser.wishList)
        }
    }, [currentUser])
    if (!currentUser) return null

    
    

    return (
        <div style={{position: 'relative'}} >
            <MyBookList currentUser={currentUser} setCurrentBook={setCurrentBook} />
            <DetailedBook book={currentBook} currentUser={currentUser} setCurrentBook={setCurrentBook} setCurrentUser={setCurrentUser} />
        </div>
    )
}

export default MyBooks