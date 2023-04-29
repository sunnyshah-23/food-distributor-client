import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../../constant/Base'
import { useNavigate } from 'react-router-dom'
function Table() {
    const [products, setProducts] = useState([])
    const navigate = useNavigate()
    let count = 0;
    const getProducts = async () => {
        await axios.get(`${BASE_URL}/api/products`).then((res) => {
            console.log(res)
            setProducts(res.data)
        }).catch((e) => console.log(e))

    }
    const deleteProduct = async (e, id) => {
        e.preventDefault()
        console.log(typeof (id))
        await axios.delete(`${BASE_URL}/api/delete/${id}`).then((res) => { window.location.reload() }).catch((e) => console.log(e))
    }
    useEffect(() => {
        getProducts()
    }, [])
    useEffect(() => {
        console.log(products)
    }, [products])
    return (
        <div className='admin_table'>
            <div className='row'>
                <div className='col-md-12'>
                    <table className="table">
                        <thead className='thead-light'>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price</th>
                                <th scope="col">Category</th>
                                <th scope="col">Brand</th>
                                <th scope="col">Update</th>
                                <th scope="col">Delete</th>

                            </tr>
                        </thead>
                        <tbody>
                            {products.map((p) => {
                                return (
                                    <tr key={p.uuid}>
                                        <th scope="row">{count = count + 1}</th>
                                        <td>{p.name}</td>
                                        <td>{p.qty}</td>
                                        <td>${p.price}</td>
                                        <td>{p.category}</td>
                                        <td>{p.brand}</td>
                                        <td><button className='btn btn-primary' onClick={(e) => navigate(`/product/${p.uuid}`)}>Update</button></td>
                                        <td><button className='btn btn-primary' onClick={(e) => deleteProduct(e, p.uuid)}>Delete</button></td>
                                    </tr>
                                )

                            })}


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Table