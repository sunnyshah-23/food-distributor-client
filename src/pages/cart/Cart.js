import React, { useContext, useEffect, useState } from 'react'
import Topbar from '../../components/Topbar/Topbar'
import { CartContext } from '../../context/CartContext'
import "./cart.css"
import { useNavigate } from 'react-router-dom'
function Cart() {
    const { dispatch, cart } = useContext(CartContext)
    const [cartItem, setCartItem] = useState(cart)
    const navigate = useNavigate()
    const removeItem = (e, id) => {
        e.preventDefault()
        dispatch({ type: "CART_REMOVE", payload: id })
    }
    useEffect(() => {
        setCartItem(cart)
        console.log(cartItem.length)
    }, [cart])
    return (
        <>
            <Topbar />
            <div className='cart'>
                <div className="container row">
                    {cartItem.length === 0 && (
                        <div class="empty">
                            <img className='empty_cart' src={process.env.PUBLIC_URL + '/images/cart_empty.png'} />
                            <h3>Your Cart is Empty!</h3>
                            <button className='btn btn-primary' onClick={() => navigate("/")}>Shop Now</button>
                        </div>
                    )}
                    <div class="col-md-8">

                        {cartItem.map((p) => (
                            <div className='card' key={p.uuid}>
                                <div className='card-body'>
                                    <div className='row'>
                                        <div className='col-md-4'>
                                            <img src={process.env.PUBLIC_URL + '/images/food.jpeg'} />
                                        </div>
                                        <div className='col-md-8'>
                                            <h5>Name:{p.name}</h5>
                                            <h5>brand:{p.brand}</h5>
                                            <h5>Quantity:{p.quantity}</h5>
                                            <h5>Catgeory:{p.category}</h5>
                                            <button className="btn btn-danger" onClick={(e) => removeItem(e, p.uuid)}>Remove</button>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}

                    </div>
                </div>

            </div>
        </>
    )
}

export default Cart