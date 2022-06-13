import React from "react";
import { Button, ButtonGroup } from 'react-bootstrap'

function ReviewBtns( {onEdit, onDeleteReview} ) {
    return (
        <ButtonGroup>
            <Button variant="primary" onClick={() => onEdit(true)} >Edit</Button>
            <Button variant="primary" onClick={onDeleteReview} >Delete</Button>
        </ButtonGroup>
    )
}

export default ReviewBtns