import React from "react";
import { Button, ButtonGroup } from 'react-bootstrap'

function ReviewBtns( setForm ) {
    return (
        <ButtonGroup>
            <Button variant="primary" onClick={setForm(true)} >Edit this Review</Button>
            <Button variant="primary">Delete this review</Button>
        </ButtonGroup>
    )
}

export default ReviewBtns