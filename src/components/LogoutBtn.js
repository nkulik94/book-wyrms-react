import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from "react-bootstrap";

function LogoutBtn( { setCurrentUser } ) {
    const history = useHistory()

    return (
        <Button className="login-btns" onClick={() => {
            setCurrentUser(null)
            history.push('/my-books')
        }}>Log Out</Button>
    )
}

export default LogoutBtn