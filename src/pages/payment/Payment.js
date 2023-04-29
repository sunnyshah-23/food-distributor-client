import React, { useContext, useRef, useState } from 'react'
import './payment.css'
import Topbar from '../../components/Topbar/Topbar'
import axios from 'axios'
import { BASE_URL } from '../../constant/Base'
import { CartContext } from '../../context/CartContext'
import { useInRouterContext } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from "react-router-dom"

function Payment() {
    const { dispatch, cart } = useContext(CartContext)
    const { user } = useContext(AuthContext)
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const cardnumber = useRef()
    const expiry = useRef()
    const cvv = useRef()

    const handlePay = (e) => {

        e.preventDefault()
        if (!cardnumber.current.value || !expiry.current.value || !cvv.current.value) {
            setError("Fill all values")
        }
        else {
            console.log("cart", cart)
            const order = {
                userId: user.id,
                cart: cart
            }
            axios.post(`${BASE_URL}/api/order`, order).then((res) => {
                dispatch({ type: "CLEAR_CART" })
                navigate("/order")
            }).catch(err => console.log(err))
        }

    }
    return (
        <div>
            <Topbar />
            <div className="payment">
                <div className='row'>
                    <h2 style={{ color: "red" }}>{error}</h2>
                    <div className='col-md-6'>
                        <div className='mt-3 card'>
                            <div className='card-body'>
                                <form >
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Card number</label>
                                        <input required type="input" className="form-control" id="exampleFormControlInput1" ref={cardnumber} placeholder="card number" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Expiry</label>
                                        <input required type="input" className="form-control" id="exampleFormControlInput1" ref={expiry} placeholder="expiry" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">CVV</label>
                                        <input required type="input" className="form-control" id="exampleFormControlInput1" ref={cvv} placeholder="CVV" />
                                    </div>
                                    <button className='btn btn-primary' onClick={handlePay}>Pay</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payment