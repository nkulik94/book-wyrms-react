import React, { useState } from "react";
import { Button, ButtonGroup, Form } from 'react-bootstrap';

function ReviewForm( { onReview, onCancel, formValue } ) {
    const [formData, setFormData] = useState(formValue)
    
    return (
        <Form onSubmit={e => {
            e.preventDefault()
            onReview(formData)
        }}>
            <Form.Group className="mb-3" controlId="formBasicTextarea">
                <Form.Label>Leave a review</Form.Label>
                <Form.Control type="textarea" value={formData} onChange={e => setFormData(e.target.value)} />
            </Form.Group>
            <br/>
            <ButtonGroup>
                <Button variant="primary" type="submit">Submit</Button>
                <Button variant="danger" onClick={onCancel} >Cancel</Button>
            </ButtonGroup>
        </Form>
    )
}

export default ReviewForm