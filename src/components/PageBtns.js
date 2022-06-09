import React, { useState } from 'react';
import { Pagination } from 'react-bootstrap';

function PageBtns( { setPage, pageAmt, currentPage } ) {
    let showNextPrevious
    let prevDisabled
    let nextDisabled
    const [renderedBtns, setBtns] = useState({
        start: 0,
        end: 5
    })

    const allPages = []
    for (let i = 1; i <= pageAmt; i++) {
        allPages.push({
            page: i,
            start: (i - 1) * 10,
            end: i * 10
    })}


    if (allPages.length > 5) showNextPrevious = true
    const renderedPages = allPages.slice(renderedBtns.start, renderedBtns.end)

    if (renderedPages.length > 0 && renderedPages[0].page === 1) prevDisabled = true
    if (renderedPages.length > 0 && renderedPages[renderedPages.length - 1].page === pageAmt) nextDisabled = true

    function handleNextPrev(next) {
        const start = next ? renderedBtns.start + 1 : renderedBtns.start - 1
        const end = next ? renderedBtns.end + 1 : renderedBtns.end - 1
        setBtns({start, end})
    }

    return (
        <Pagination>
            {showNextPrevious && !prevDisabled ? <Pagination.Prev onClick={() => handleNextPrev(false)} /> : null}
            {renderedPages.map(page => {
                return (
                    <Pagination.Item
                        key={page.page}
                        active={currentPage.page === page.page}
                        onClick={() => setPage(page)}
                    >
                        {page.page}
                    </Pagination.Item>
                )
            })}
            {showNextPrevious && !nextDisabled ? <Pagination.Next onClick={() => handleNextPrev(true)} /> : null}
        </Pagination>
    )
}

export default PageBtns