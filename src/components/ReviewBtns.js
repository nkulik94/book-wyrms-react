import React from "react";
import { Button, ButtonGroup } from 'react-bootstrap'

function ReviewBtns( {setForm, onDeleteReview} ) {
    return (
        <ButtonGroup>
            <Button variant="primary" onClick={() => setForm(true)} >Edit this Review</Button>
            <Button variant="primary" onClick={onDeleteReview} >Delete this review</Button>
        </ButtonGroup>
    )
}

export default ReviewBtns