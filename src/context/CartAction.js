
export const CartAdd = (item) => ({
    type: "CART_ADD",
    payload: item,
});

export const CartRemove = (id) => ({
    type: "CART_REMOVE",
    payload: id
});

export const ClearCart = () => ({
    type: "CLEAR_CART"
})