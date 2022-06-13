import React, { useState } from "react";

const BookContext = React.createContext();

function BookProvider({ children }) {
    const [book, setBook] = useState(null)
    const currentBook = {
        book,
        setBook
    }

    return <BookContext.Provider value={currentBook}>{children}</BookContext.Provider>;
}

export { BookContext, BookProvider };