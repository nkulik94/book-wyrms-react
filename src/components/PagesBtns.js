import React, { useState } from 'react';
import { Pagination } from 'react-bootstrap';

function PageBtns( { setPage, pageAmt } ) {
    let showNextPrevious
    const [renderedBtns, setBtns] = useState({
        start: 0,
        end: 5
    })
    const [active, setActive] = useState(1)

    const allPages = []
    for (let i = 1; i <= pageAmt; i++) {
        allPages.push({
            page: i,
            start: (i - 1) * 10,
            end: i * 10
        })
    }

    if (allPages.length > 5) showNextPrevious = true

    function handleButtonClick(page) {
        setPage(page)
        setActive(page.page)
    }

    const renderedPages = allPages.slice(renderedBtns.start, renderedBtns.end)

    return (
        <Pagination>
            {showNextPrevious ? <Pagination.Prev /> : null}
            {renderedPages.map(page => <Pagination.Item key={page.page} active={active === page.page} onClick={() => handleButtonClick(page)} >{page.page}</Pagination.Item>)}
            {showNextPrevious ? <Pagination.Next /> : null}
        </Pagination>
    )
}

export default PageBtns