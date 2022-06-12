import React, { useState } from "react";
import { Button, Form } from 'react-bootstrap';

function ReviewForm() {
    const [formData, setFormData] = useState('')
    
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicTextarea">
                <Form.Label>Leave a review</Form.Label>
                <Form.Control type="textarea" value={formData} onChange={e => setFormData(e.target.value)} />
            </Form.Group>
            <br/>
            <Button variant="primary" type="submit">Submit Review</Button>
        </Form>
    )
}

export default ReviewForm