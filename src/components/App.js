import React from 'react';
import Header from './Header';
import Body from './Body';
import { UserProvider } from '../context/user';
import { BookProvider } from '../context/book';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    
    return (
        <UserProvider>
            <Header />
            <BookProvider>
                <Body />
            </BookProvider>
        </UserProvider>
    )
}

export default App