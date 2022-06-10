import React from "react";
import { Button, Form } from 'react-bootstrap';

function ReviewForm() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicTextarea">
                <Form.Label>Leave a review</Form.Label>
                <Form.Control type="textarea" />
            </Form.Group>
            <br/>
            <Button variant="primary" type="submit">Submit Review</Button>
        </Form>
    )
}

export default ReviewForm