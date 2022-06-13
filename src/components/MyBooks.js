import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../context/user';
import { BookContext } from '../context/book';
import MyBookList from './MyBookList';
import DetailedBook from './DetailedBook';
function MyBooks() {
    const history = useHistory()

    const currentBook = useContext(BookContext).book
    const currentUser = useContext(UserContext).user

    useEffect(() => {
        if (!currentUser) {
            history.push('./login')
        }
    }, [currentUser])
    if (!currentUser) return null

    
    

    return (
        <div style={{position: 'relative'}} >
            <MyBookList />
            {currentBook ? <DetailedBook /> : null}
        </div>
    )
}

export default MyBooks