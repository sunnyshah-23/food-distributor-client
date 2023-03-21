import { createContext, useEffect, useReducer } from "react";
import CartReducer from "./CartReducer";

const INITIAL_STATE = {
    cart: []

};


export const CartContext = createContext(INITIAL_STATE);

export const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, INITIAL_STATE);

    useEffect(() => {
        console.log("userffect", state.cart)
    }, [state.cart])

    return (
        <CartContext.Provider
            value={{
                cart: state.cart,
                dispatch,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
