import axios from "axios";
import { BASE_URL } from "./constant/Base"

export const loginCall = async (userCredential, dispatch, navigate) => {
    dispatch({ type: "LOGIN_START" });
    try {
        const res = await axios.post(`${BASE_URL}/api/login`, userCredential);
        console.log(res)
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        // console.log("dispacthed")
        if (res?.data.isAdmin) {
            navigate("/admin")
        }
        else {
            navigate("/")
        }
    } catch (err) {
        console.log(err.response.data.details)
        dispatch({ type: "LOGIN_FAILURE", payload: err.response.data.details });
    }
};

export const registerCall = async (userCredential, dispatch, navigate) => {
    dispatch({ type: "REGISTER_START" })
    try {
        await axios.post(`${BASE_URL}/api/register`, userCredential)
        dispatch({ type: "REGISTER_SUCCESS" })
        navigate("/login")
    } catch (err) {
        dispatch({ type: "REGISTER_FAILURE", payload: err })

    }
}

export const logout = async (dispatch, navigate) => {
    dispatch({ type: "LOGOUT" })
    navigate("/login")

}
