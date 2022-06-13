import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ShelfDisplayBtns from './ShelfDisplayBtns';
import UserList from './UserList';

function MyBooks( { setCurrentUser, currentUser } ) {
    const history = useHistory()
    const [readDisabled, setReadDisabled] = useState(true)

    useEffect(() => {
        setReadDisabled(true)
        if (!currentUser) {
            history.push('./login')
        }
    }, [currentUser])
    if (!currentUser) return null

    
    

    return (
        <div className='list'>
            <ShelfDisplayBtns readDisabled={readDisabled} setReadDisabled={setReadDisabled} />
            <UserList list={readDisabled ? currentUser.readList : currentUser.wishList} listType={readDisabled ? 'readList' : 'wishList'} />
        </div>
    )
}

export default MyBooks