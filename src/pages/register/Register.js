import React, { useContext, useRef } from 'react'
import { registerCall } from '../../ApiCall'
import Topbar from '../../components/Topbar/Topbar'
import "./register.css"
import { useNavigate } from "react-router-dom"
import { AuthContext } from '../../context/AuthContext'
function Register() {
    const name = useRef()
    const address = useRef()
    const contact = useRef()
    const username = useRef()
    const password = useRef()
    const email = useRef()
    const navigate = useNavigate()
    const { dispatch } = useContext(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        registerCall({ name: name.current.value, address: address.current.value, contact: contact.current.value, username: username.current.value, password: password.current.value, email: email.current.value }, dispatch, navigate)
    }
    return (
        <>
            <Topbar />
            <div className='register'>
                <div className='row'>
                    <div className='col-md-6'>
                        <form onSubmit={handleSubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Name</label>
                                <input required type="input" className="form-control" id="exampleFormControlInput1" ref={name} placeholder="name" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Address</label>
                                <input required type="input" className="form-control" id="exampleFormControlInput1" ref={address} placeholder="address" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Contact</label>
                                <input required type="input" className="form-control" id="exampleFormControlInput1" ref={contact} placeholder="contatc" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Username</label>
                                <input required type="input" className="form-control" id="exampleFormControlInput1" ref={username} placeholder="username" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email</label>
                                <input required type="email" className="form-control" id="exampleFormControlInput1" ref={email} placeholder="emailId" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Password</label>
                                <input required type="password" className="form-control" id="exampleFormControlInput1" ref={password} placeholder="password" />
                            </div>
                            <button className='btn btn-primary'>Register</button>
                        </form>

                    </div>
                </div>


            </div>
        </>

    )
}

export default Register