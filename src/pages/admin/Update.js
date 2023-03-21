import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import Topbar from '../../components/Topbar/Topbar'
import { BASE_URL } from '../../constant/Base'
import "./update.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Update() {
    const id = useParams().id
    const [product, setProduct] = useState()
    const name = useRef()
    const qty = useRef()
    const category = useRef()
    const brand = useRef()
    const price = useRef()

    const getProduct = async () => {
        await axios.get(`${BASE_URL}/admin/product/${id}`).then((res) => {
            setProduct(res.data)
            name.current.value = product.name
            qty.current.value = product.qty
            price.current.value = product.price
            category.current.value = product.category
            brand.current.value = product.brand
        }).catch((err) => { console.log(err) })
    }
    const handleUpdate = async (e) => {
        e.preventDefault()

        await axios.put(`${BASE_URL}/admin/product/${id}`, {
            name: name.current.value, qty: qty.current.value, price: price.current.value, category: category.current.value, brand: brand.current.value, uuid: id
        }, {
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        })
            .then(() => toast("Product Updated"))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        getProduct()
    }, [])
    return (
        <>
            <Topbar />
            <div className='update'>
                <ToastContainer />
                <div className='row'>
                    <div className='col-md-6'>
                        <form >
                            <div class="mb-3">
                                <label for="exampleFormControlInput" className="form-label">Name</label>
                                <input required type="text" className="form-control" id="exampleFormControlInput1" ref={name} defaultValue={product?.name} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput" className="form-label">Quantity</label>
                                <input required type="text" className="form-control" id="exampleFormControlInput1" ref={qty} defaultValue={product?.qty} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput" className="form-label">Price</label>
                                <input required type="text" className="form-control" id="exampleFormControlInput1" ref={price} defaultValue={product?.price} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput" className="form-label">Category</label>
                                <input required type="text" className="form-control" id="exampleFormControlInput1" ref={category} defaultValue={product?.category} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput" className="form-label">Brand</label>
                                <input required type="text" className="form-control" id="exampleFormControlInput1" ref={brand} defaultValue={product?.brand} />
                            </div>
                            <button className="btn btn-primary" onClick={handleUpdate} type="submit">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Update