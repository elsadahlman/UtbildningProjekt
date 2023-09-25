import React, { useState } from 'react';
import { LoginState, UserContext } from './UserContext';

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [userState, setUserState] = useState<LoginState>({ isLoggedIn: false });

    return <UserContext.Provider value={{ userState, setUserState }}>
        {children}

    </ UserContext.Provider>
}

export default UserContextProvider;