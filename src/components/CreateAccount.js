import React from 'react';
import { Form, Button } from 'react-bootstrap'

function CreateAccount() {
    return (
        <Form className='account-form'>
            <Form.Group className='mb-3'>
                <Form.Label htmlFor='name'>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder='Enter Your Name'/>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label htmlFor='username'>Username</Form.Label>
                <Form.Control type="text" name="username" placeholder='Enter Username'/>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label htmlFor='password'>Password</Form.Label>
                <Form.Control type='password' name="password" placeholder='Enter Password'/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Create Account
            </Button>
        </Form>
    )
}

export default CreateAccount