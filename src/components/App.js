import React, { useState } from 'react';
import Header from './Header';
import Body from './Body';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [currentUser, setCurrentUser] = useState(null)
    
    return (
        <>
        <Header currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        <Body setCurrentUser={setCurrentUser} currentUser={currentUser} />
        </>
    )
}

export default App