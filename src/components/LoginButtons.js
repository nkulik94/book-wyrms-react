import React from "react";
import { Link, useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap'

function LoginButtons() {
    const history = useHistory()
    //<Button variant="primary" onClick={() => history.push('/login')}>Log In</Button>

    return (
        <span className="login-btns" ><Button variant="primary" onClick={() => history.push('/login')}>Log In</Button> or <Link to="/create-account">Sign up</Link></span>
    )
}

export default LoginButtons