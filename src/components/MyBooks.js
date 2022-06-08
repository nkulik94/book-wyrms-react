import React from 'react';
import Login from './LoginPage';

function MyBooks( { setCurrentUser, allUsers, currentUser } ) {
    if (!currentUser) {
        return (
            <Login 
                setCurrentUser={setCurrentUser}
                allUsers={allUsers}
            />
        )
    }
}

export default MyBooks