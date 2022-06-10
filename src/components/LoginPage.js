import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap'

function Login( { setCurrentUser, allUsers, currentUser } ) {
    const history = useHistory()
    if (currentUser) history.goBack()
    const [formData, setFormdata] = useState({
        username: '',
        password: ''
    })
    const [displayError, setError] = useState(false)

    function handleForm(e) {
        setFormdata({...formData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        const rightUser = allUsers.find(user => user.username === formData.username && user.password === formData.password)
        if (!rightUser) {
            setError(true)
            setTimeout(() => setError(false), 3000)
        } else {
            fetch(`https://book-wyrm-api.herokuapp.com/users/${rightUser.id}`)
                .then(r => r.json())
                .then(data => {
                    setCurrentUser(data)
                    setFormdata({
                        username: '',
                        password: ''
                    })
                })
        }
    }

    return (
        <Form className='account-form' onSubmit={handleSubmit}>
            <Form.Group className='mb-3'>
                <Form.Label htmlFor='username'>Username</Form.Label>
                <Form.Control 
                    type="text"
                    name="username"
                    value={formData.username}
                    placeholder='Enter Username'
                    onChange={handleForm}
                />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label htmlFor='password'>Password</Form.Label>
                <Form.Control
                    type='password'
                    name="password"
                    value={formData.password}
                    placeholder='Enter Password'
                    onChange={handleForm}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Log In
            </Button>
            {displayError ? <p>Sorry, the username or password do not match our records, please try again</p> : null}
        </Form>
    )
}

export default Login