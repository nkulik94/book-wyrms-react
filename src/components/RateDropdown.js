import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

function RateDropdown() {
    return (
        <DropdownButton title="Rate" value="" >
            <Dropdown.Item
                as="button" 
                value="5"
                onClick={(e) => console.log(e.target.value)}
            >
                5
            </Dropdown.Item>
            <Dropdown.Item
                as="button"
                value="4"
                onClick={(e) => console.log(e.target.value)}
            >
                4
            </Dropdown.Item>
            <Dropdown.Item
                as="button"
                value="3"
                onClick={(e) => console.log(e.target.value)}
            >
                3
            </Dropdown.Item>
            <Dropdown.Item
                as="button"
                value="2"
                onClick={(e) => console.log(e.target.value)}
            >
                2
            </Dropdown.Item>
            <Dropdown.Item
                as="button"
                value="1"
                onClick={(e) => console.log(e.target.value)}
            >
                1
            </Dropdown.Item>
        </DropdownButton>
    )
}

export default RateDropdown