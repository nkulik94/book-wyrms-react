import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/user';
import ShelfDisplayBtns from './ShelfDisplayBtns';
import UserList from './UserList';

function MyBookList() {
    const [readDisabled, setReadDisabled] = useState(true)
    const [readList, updateReadlist] = useState({})
    const [wishList, updateWishlist] = useState({})

    const currentUser = useContext(UserContext).user

    useEffect(() => {
        updateReadlist(currentUser.readList)
        updateWishlist(currentUser.wishList)
    }, [currentUser])

    return (
        <div className='list'>
            <ShelfDisplayBtns readDisabled={readDisabled} setReadDisabled={setReadDisabled} />
            <UserList list={readDisabled ? readList : wishList} />
        </div>
    )
}

export default MyBookList