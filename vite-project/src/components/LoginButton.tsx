import { useUserContext } from '../context/UserContext';


export const LoginButton = () => {

    const {userState, setUserState} = useUserContext();
    
    const toggleLogin = () => {
        console.log("in togglelogin", userState);
        const newState = {...userState};
        newState.isLoggedIn = !newState.isLoggedIn;
        setUserState(newState);
    }

    return (
        <button className='login-button' onClick={toggleLogin} >{userState.isLoggedIn ? "Log out" : "Login"}</button>
    )

}