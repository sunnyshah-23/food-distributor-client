const addProductToCart = (product, state) => {
    const updatedCart = [...state.cart];
    const updatedItemIndex = updatedCart.findIndex(
        item => item.uuid === product.uuid
    );

    if (updatedItemIndex < 0) {
        updatedCart.push({ ...product, quantity: 1 });
        console.log("updated", updatedCart)
    } else {
        const updatedItem = {
            ...updatedCart[updatedItemIndex]
        };
        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
    }

    return { ...state, cart: updatedCart };
};

const removeProductFromCart = (productId, state) => {
    console.log("remove product: " + productId);
    const updatedCart = [...state.cart];
    const updatedItemIndex = updatedCart.findIndex(item => item.uuid === productId);

    const updatedItem = {
        ...updatedCart[updatedItemIndex]
    };
    updatedItem.quantity--;
    if (updatedItem.quantity <= 0) {
        updatedCart.splice(updatedItemIndex, 1);
    } else {
        updatedCart[updatedItemIndex] = updatedItem;
    }

    return { ...state, cart: updatedCart };
};
const clearCart = (state) => {
    console.log("clearcart")
    const updatedCart = []
    return { ...state, cart: updatedCart };
};
const AuthReducer = (state, action) => {
    switch (action.type) {
        case "CART_ADD":
            return addProductToCart(action.payload, state);
        case "CART_REMOVE":
            return removeProductFromCart(action.payload, state);
        case "CLEAR_CART":
            return clearCart(state);
        default:
            return state;
    }
};

export default AuthReducer;
