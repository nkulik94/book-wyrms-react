import React, { useState } from 'react';
import Header from './Header';
import Body from './Body';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [currentUser, setCurrentUser] = useState(null)
    return (
        <>
        <Header currentUser={currentUser}/>
        <Body setCurrentUser={setCurrentUser} />
        </>
    )
}

export default App