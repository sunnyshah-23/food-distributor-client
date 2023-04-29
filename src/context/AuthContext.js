import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || {
        id: "da12ecb7-2bc6-44c3-9135-161b6ad26cf0",
        name: "rikhav",
        address: "meloy",
        contact: "1234567890",
        emailId: "rik@gmail.com",
        password: "rikhav",
        isAdmin: false
    },
    isFetching: false,
    error: false,
    isAuthenticated: false
};


export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user))
        console.log("userffect", state.user)
    }, [state.user])

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                error: state.error,
                isFetching: state.isFetching,
                isAuthenticated: state.isAuthenticated,
                dispatch,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
