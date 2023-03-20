import axios from 'axios'
import React, { useRef } from 'react'
import { BASE_URL } from '../../constant/Base'
import "./addProduct.css"
import { useNavigate } from 'react-router-dom'
import Topbar from '../../components/Topbar/Topbar'
function Addproduct() {
    const name = useRef()
    const qty = useRef()
    const category = useRef()
    const brand = useRef()
    const price = useRef()
    const navigate = useNavigate()
    const handleAdd = async (e) => {
        e.preventDefault()
        await axios.post(`${BASE_URL}/admin/product/add`, {
            name: name.current.value,
            qty: qty.current.value,
            category: category.current.value,
            price: price.current.value,
            brand: brand.current.value
        }).then(() => {
            navigate('/admin')
        }).catch(err => console.log(err))
    }
    return (
        <div className='add'>
            <Topbar />
            <div className='row'>
                <div className='col-md-6'>
                    <form >
                        <div class="mb-3">
                            <label for="exampleFormControlInput" className="form-label">Name</label>
                            <input required type="text" className="form-control" id="exampleFormControlInput1" ref={name} />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput" className="form-label">Quantity</label>
                            <input required type="text" className="form-control" id="exampleFormControlInput1" ref={qty} />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput" className="form-label">Price</label>
                            <input required type="text" className="form-control" id="exampleFormControlInput1" ref={price} />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput" className="form-label">Category</label>
                            <input required type="text" className="form-control" id="exampleFormControlInput1" ref={category} />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput" className="form-label">Brand</label>
                            <input required type="text" className="form-control" id="exampleFormControlInput1" ref={brand} />
                        </div>
                        <button className="btn btn-primary" type="submit" onClick={handleAdd}>Add</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Addproduct