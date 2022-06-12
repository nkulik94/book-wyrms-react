import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ShelfDisplayBtns from './ShelfDisplayBtns';

function MyBooks( { setCurrentUser, currentUser } ) {
    const history = useHistory()
    const [readDisabled, setReadDisabled] = useState(false)

    useEffect(() => {
        if (!currentUser) {
            history.push('./login')
        }
    }, [currentUser])
    

    return (
        <div className='list'>
            <ShelfDisplayBtns readDisabled={readDisabled} setReadDisabled={setReadDisabled} />
        </div>
    )
}

export default MyBooks