const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                isFetching: true,
                error: false,
                isAuthenticated: false
            };
        case "LOGIN_SUCCESS":
            console.log("success", action.payload)
            return {
                user: action.payload,
                isFetching: false,
                error: false,
                isAuthenticated: true

            };
        case "LOGIN_FAILURE":
            return {
                user: null,
                isFetching: false,
                error: action.payload,
                isAuthenticated: false

            };
        case "REGISTER_START":
            return {
                user: null,
                isFetching: true,
                error: false,
                isAuthenticated: false,
            }
        case "REGISTER_SUCCESS":
            return {
                user: null,
                isFetching: false,
                error: false,
                isAuthenticated: false,
            }
        case "REGISTER_FAILURE":

            return {
                user: null,
                isFetching: false,
                error: action.payload,
                isAuthenticated: false,
            }
        case "LOGOUT":
            return {
                user: null,
                isFectching: false,
                error: false,
                isAuthenticated: false
            }

        default:
            return state;
    }
};

export default AuthReducer;
