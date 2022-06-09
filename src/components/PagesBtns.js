import React from 'react';
import { Pagination } from 'react-bootstrap';

function PageBtns( { setPage, pageAmt } ) {
    const allPages = []
    for (let i = 1; i <= pageAmt; i++) {
        allPages.push({
            page: i,
            start: (i - 1) * 10,
            end: i * 10
        })
    }
    console.log(allPages)
    return <p>hi</p>
}

export default PageBtns