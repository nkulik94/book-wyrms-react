import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../context/user';
import { Form, Button } from 'react-bootstrap'

function CreateAccount( {allUsers, setUsers} ) {
    const [formData, setformData] = useState({
        name: '',
        username: '',
        password: '',
        readList: {},
        wishList: {}
    })
    const [displayError, setError] = useState(false)
    const history = useHistory()

    const currentUser = useContext(UserContext)

    if (currentUser.user) history.goBack()

    function handleForm(e) {
        setformData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        const isTaken = allUsers.find(existingUser => existingUser.username === formData.username)
        const config = {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(formData)
        }
        if (isTaken) {
            setError(true)
            setTimeout(() => setError(false), 3000)
        } else {
            fetch('https://book-wyrm-api.herokuapp.com/users', config)
                .then(r => r.json())
                .then(data => {
                    currentUser.setUser(data)
                    setUsers([...allUsers, data])
                })
        }
    }
    
    return (
        <Form className='account-form' onSubmit={handleSubmit}>
            <Form.Group className='mb-3'>
                <Form.Label htmlFor='name'>Name</Form.Label>
                <Form.Control 
                    type="text" 
                    name="name"
                    value={formData.name} 
                    placeholder='Enter Your Name'
                    onChange={handleForm}
                />
            </Form.Group>
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
                Create Account
            </Button>
            {displayError ? <p>Sorry, that username already exists</p> : null}
        </Form>
    )
}

export default CreateAccount