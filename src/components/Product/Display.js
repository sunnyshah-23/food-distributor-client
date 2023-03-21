import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { BASE_URL } from '../../constant/Base'
import { CartContext } from '../../context/CartContext'
import "./display.css"

function Display() {
    const [products, setProducts] = useState([])
    const { dispatch, cart } = useContext(CartContext)
    const getProducts = async () => {
        await axios.get(`${BASE_URL}/admin/product`)
            .then((res) => setProducts(res.data))
            .catch((err) => console.log(err))

    }
    const add_product = (e, product) => {
        e.preventDefault()
        dispatch({ type: "CART_ADD", payload: product })

    }
    useEffect(() => {
        getProducts()
    }, [])
    useEffect(() => {
        console.log("cart", cart)
    }, [cart])
    return (
        <div className='display_prod'>
            <div className='container'>
                <div class="row">
                    {products.map((p) => (
                        <div className='col-md-4' key={p.uuid}>
                            <div className='card'>
                                <div className='card-header'><h3>{p.name}</h3></div>
                                <img className="card-img-top" src={process.env.PUBLIC_URL + '/images/food.jpeg'} />
                                <div className='card-body'>
                                    <h5>Brand:{p.brand}</h5>
                                    <h5>Category:{p.category}</h5>
                                    <h3>Price:${p.price}</h3>
                                    <button className="btn btn-primary" onClick={(e) => add_product(e, p)}>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

        </div>
    )
}

export default Display