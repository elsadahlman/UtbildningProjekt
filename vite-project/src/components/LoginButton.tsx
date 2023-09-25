import { useUserContext } from '../context/UserContext';


export const LoginButton = () => {

    const {userState, setUserState} = useUserContext();
    
    const toggleLogin = () => {
        setUserState();
    }

    return (
     <button onClick={toggleLogin} >{userState.isLoggedIn ? "Log out" : "Login"}</button>
    
    )

}