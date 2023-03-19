export const LoginStart = () => ({
    type: "LOGIN_START",
});

export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
});

export const LoginFailure = (err) => ({
    type: "LOGIN_FAILURE",
    payload: err
});

export const RegisterStart = () => ({
    type: "REGISTER_START",

})
export const RegisterSuccess = () => ({
    type: "REGISTER_SUCCESS",

})

export const RegisterFailure = (msg) => ({
    type: "REGISTER_FAILURE",
    payload: msg
})

export const logout = () => ({
    type: "LOGOUT"
})