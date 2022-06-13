import React, { useState } from 'react';
import PageBtns from './PageBtns';
import BookList from './BookList';

function UserList( { list, listType } ) {
    const [currentPage, setPage] = useState({
        page: 1,
        start: 0,
        end: 10
    })

    const pageAmt = Math.ceil(Object.keys(list).length / 10)
    const booksArr = Object.keys(list).map(key => list[key])
    
    if (pageAmt === 0) return <h5 style={{marginTop: '10px'}}>You have no books on this list yet</h5>

    return (
        <>
            <PageBtns pageAmt={pageAmt} setPage={setPage} currentPage={currentPage} />
            <BookList books={booksArr} isSearchResult={false} keyName={'cover'} listType={listType} />
        </>
    )
}

export default UserList