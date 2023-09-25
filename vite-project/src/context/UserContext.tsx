import { createContext, useContext } from 'react';

export type LoginState = {
    isLoggedIn: boolean,
    loggedInUser?: {
        accessToken: string,
        refreshToken: string
    }
}

export type UserContextType = {
    userState: LoginState,
    setUserState: (newState: LoginState) => void
}

export const UserContext = createContext<UserContextType >({
    userState: {
        isLoggedIn: false
    },
    setUserState: () => {console.log('not implemented');
    }
});

export const useUserContext = () => {
    const ctx = useContext(UserContext);
    console.log(ctx);
    return ctx;
    
};