import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

function RateDropdown( { handleClick } ) {
    return (
        <DropdownButton title="Rate" value="" >
            <Dropdown.Item
                as="button" 
                value="5"
                name="rate-btn"
                onClick={handleClick}
            >
                5
            </Dropdown.Item>
            <Dropdown.Item
                as="button"
                value="4"
                name="rate-btn"
                onClick={handleClick}
            >
                4
            </Dropdown.Item>
            <Dropdown.Item
                as="button"
                value="3"
                name="rate-btn"
                onClick={handleClick}
            >
                3
            </Dropdown.Item>
            <Dropdown.Item
                as="button"
                value="2"
                name="rate-btn"
                onClick={handleClick}
            >
                2
            </Dropdown.Item>
            <Dropdown.Item
                as="button"
                value="1"
                name="rate-btn"
                onClick={handleClick}
            >
                1
            </Dropdown.Item>
        </DropdownButton>
    )
}

export default RateDropdown