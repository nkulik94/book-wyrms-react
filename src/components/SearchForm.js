import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

function SearchForm( { setResults } ) {
    const [searchParams, setSearch] = useState({
        param: 'title',
        searchFor: ''
    })

    function handleSearchForm(e) {
        setSearch({...searchParams, [e.target.name]: e.target.value})
    }

    function handleSearch(e) {
        e.preventDefault()
        fetch(`http://openlibrary.org/search.json?${searchParams.param}=${searchParams.searchFor}&limit=10&page=3`)
            .then(r => r.json())
            .then(data => console.log(data))
    }

    return (
        <Form id="search-form" onSubmit={handleSearch}>
            <Row>
                <Col>
                    <Form.Label htmlFor='search-by'>Search by:</Form.Label>
                    <Form.Select name='param' value={searchParams.param} onChange={handleSearchForm}>
                        <option value="title">Title</option>
                        <option value="author">Author</option>
                    </Form.Select>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="formGroupText">
                        <Form.Label >Search For</Form.Label>
                        <Form.Control type="text" name="searchFor" value={searchParams.searchFor} onChange={handleSearchForm}/>
                    </Form.Group>
                </Col>
                <Col>
                    <Button id="search-btn" name="submit" type="submit">Search</Button>
                </Col>
            </Row>
        </Form>
    )
}

export default SearchForm