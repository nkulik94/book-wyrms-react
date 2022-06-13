import React, { useState, useEffect } from 'react';
import ShelfDisplayBtns from './ShelfDisplayBtns';
import UserList from './UserList';

function MyBookList( {currentUser, setCurrentBook, setCurrentUser} ) {
    const [readDisabled, setReadDisabled] = useState(true)
    const [readList, updateReadlist] = useState({})
    const [wishList, updateWishlist] = useState({})

    useEffect(() => {
        updateReadlist(currentUser.readList)
        updateWishlist(currentUser.wishList)
    }, [currentUser])

    return (
        <div className='list'>
            <ShelfDisplayBtns readDisabled={readDisabled} setReadDisabled={setReadDisabled} />
            <UserList list={readDisabled ? readList : wishList} setCurrentBook={setCurrentBook} currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </div>
    )
}

export default MyBookList