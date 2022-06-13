import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import MyBookList from './MyBookList';
import DetailedBook from './DetailedBook';
function MyBooks( { setCurrentUser, currentUser, setCurrentBook, currentBook } ) {
    const history = useHistory()

    useEffect(() => {
        if (!currentUser) {
            history.push('./login')
        }
    }, [currentUser])
    if (!currentUser) return null

    
    

    return (
        <div style={{position: 'relative'}} >
            <MyBookList currentUser={currentUser} setCurrentBook={setCurrentBook} setCurrentUser={setCurrentUser}  />
            {currentBook ? <DetailedBook book={currentBook} currentUser={currentUser} setCurrentBook={setCurrentBook} setCurrentUser={setCurrentUser} /> : null}
        </div>
    )
}

export default MyBooks