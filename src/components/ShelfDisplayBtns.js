import React from "react";
import { ButtonGroup, Button } from 'react-bootstrap'

function ShelfDisplayBtns( {readDisabled, setReadDisabled} ) {

    return (
        <ButtonGroup style={{margin: '10px'}}>
            <Button variant="primary" disabled={readDisabled} onClick={() => setReadDisabled(true)} >Read List</Button>
            <Button variant="primary" disabled={!readDisabled} onClick={() => setReadDisabled(false)}>Wish List</Button>
        </ButtonGroup>
    )
}

export default ShelfDisplayBtns