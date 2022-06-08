import React from 'react';
import { Form } from 'react-bootstrap'

function FindBooks() {
    return (
        <Form>
            <Row>
                <Col>
                    <Form.Label htmlFor='search-by'>Search books by:</Form.Label>
                    <Form.Select name='search-by'>
                        <option value="title">Title</option>
                        <option value="author">Author</option>
                    </Form.Select>
                </Col>
            </Row>
        </Form>
    )
}

export default FindBooks