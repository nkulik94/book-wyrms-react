import React from 'react';
import { Form, Button } from 'react-bootstrap'

function Login() {
    return (
        <Form className='account-form'>
            <Form.Group className='mb-3'>
                <Form.Label htmlFor='username'>Username</Form.Label>
                <Form.Control type="text" name="username" placeholder='Enter Username'/>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label htmlFor='password'>Password</Form.Label>
                <Form.Control type='password' name="password" placeholder='Enter Password'/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Log In
            </Button>
        </Form>
    )
}

export default Login