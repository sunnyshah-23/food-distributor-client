import React, { useContext, useEffect, useState } from 'react'
import { BASE_URL } from '../../constant/Base'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext'
import "./orderdisplay.css"
function OrderDisplay() {
    const [orders, setOrders] = useState([])
    const { user } = useContext(AuthContext)
    const [purchaseProducts, setPurchaseProducts] = useState([])

    const fetchPurchase = () => {
        // let products = []
        // order.map((ord) => {
        //     <PurchaseOrder ord></PurchaseOrder>

        // })
        // let individualOrder = []
        // var individualProductCost = 0;
        // ord.cart.forEach((pro) => {
        //     individualProductCost = pro.quantity * pro.price
        //     pro.total = individualProductCost
        //     individualOrder.push(pro)
        //     console.log("lengthfunc", products)

        // })
        // individualOrder.push({ date: ord.date })
        // products.push(individualOrder)
        // console.log("lengthfunc", individualOrder)

        // setPurchaseProducts(products)
    }
    const getOrder = async () => {
        await axios.get(`${BASE_URL}/api/order/${user.id}`,)
            .then((res) => {
                const data = res.data
                setOrders(data)

            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        const callAPI = async () => {
            await getOrder()
            // fetchPurchase()

        }
        callAPI()

    }, [])
    return (
        <>
            {orders.length > 0 ? orders.map((ord) => <PurchaseProductList order={ord} />) : (<h2>No Orders yet</h2>)}
            {/* {purchaseProducts.map((pro) => {
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='card'>
                            {pro.name}
                        </div>
                    </div>
                </div>
            })} */}
        </>

    )
}
const PurchaseProductList = ({ order }) => {
    console.log("purchaseproductlist")
    return (
        <>
            <div className='row container'>
                <div className='card parent'>
                    <div className='card-header'>
                        Date:{order.date}
                    </div>

                    {order.cart.map((order) => (

                        <div className='card inner-card'>
                            <div className='row'>

                                <p> Name:<b>{order.name}</b></p>
                                <p>Category:<b>{order.category}</b></p>
                                <p>Brand: <b>{order.brand}</b></p>
                                <p>Quantity:<b>{order.quantity}</b></p>
                                <p>Total:<b>${order.quantity * order.price}</b></p>
                            </div>
                        </div>
                    ))}


                </div>
            </div>



        </>
    )
}

export default OrderDisplay