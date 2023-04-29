import React, { useEffect, useState } from 'react'
import Topbar from '../../components/Topbar/Topbar'
import axios from 'axios'
import { BASE_URL } from '../../constant/Base'

function AdminOrders() {
    const [orders, setOrders] = useState([])
    const [highestSales, setHighestSales] = useState({})
    const fetchOrders = async () => {
        await axios.get(`${BASE_URL}/api/order`)
            .then((res) => setOrders(res.data))
            .catch(err => console.log(err))
    }

    // const calculateSales = () => {
    //     let sales = null;
    //     orders.forEach((ord) => {
    //         let total, max = 0;

    //         ord.order.cart.forEach((item) => {
    //             total = item.price * item.qty;
    //             console.log("total", total)
    //         })
    //         if (total > max) {
    //             sales = ord
    //             console.log(sales)
    //         }
    //     })
    //     setHighestSales(sales)
    // }
    useEffect(() => {
        fetchOrders()
    }, [])
    // useEffect(() => {
    //     calculateSales()
    // }, [orders])
    return (
        <>
            <Topbar />
            {orders.map((ord) => <OrderList order={ord} />)}

        </>
    )
}
const OrderList = ({ order }) => {
    return (
        <>
            <div className='row container'>
                <div className='card parent'>
                    <div className='card-header'>
                        Name<b>{order.name}</b><br />
                        Date:<b>{order.order.date}</b>
                    </div>

                    {order.order.cart.map((order) => (

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
export default AdminOrders