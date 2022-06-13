import React, { useContext } from 'react';
import { UserContext } from '../context/user';
import { Button } from "react-bootstrap";

function LogoutBtn() {
    const currentUser = useContext(UserContext)

    return (
        <Button variant='danger' className="login-btns" onClick={() => {
            currentUser.setUser(null)
        }}>Log Out</Button>
    )
}

export default LogoutBtn