import React, { useContext, useRef } from 'react'
import { loginCall } from '../../ApiCall'
import { AuthContext } from '../../context/AuthContext'
import "./login.css"
import { useNavigate } from "react-router-dom"
import Topbar from '../../components/Topbar/Topbar'

function Login() {
    const username = useRef()
    const password = useRef()
    const { dispatch, error, user } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        loginCall({
            username: username.current.value,
            password: password.current.value
        }, dispatch, navigate)

    }
    return (
        <>
            <Topbar />
            <div className='login'>
                <div className='row'>
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit}>
                            {error && <h3 color="red">{error}</h3>}
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Username</label>
                                <input required type="input" className="form-control" id="exampleFormControlInput1" ref={username} placeholder="username" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput" className="form-label">Password</label>
                                <input required type="password" className="form-control" id="exampleFormControlInput1" ref={password} placeholder="password" />
                            </div>
                            <button className='btn btn-primary'>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Login