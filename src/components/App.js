import React, { useState } from 'react';
import Header from './Header';
import Body from './Body';
import { UserProvider } from '../context/user';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    //const [currentUser, setCurrentUser] = useState(null)
    //const UserContext = createContext()
    //setCurrentUser={currentUser.setUser} currentUser={currentUser.user}
    
    return (
        <UserProvider>
            <Header />
            <Body />
        </UserProvider>
    )
}

export default App