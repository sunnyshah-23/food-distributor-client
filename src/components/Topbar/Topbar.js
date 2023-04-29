import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import "./topbar.css"
import { useNavigate } from "react-router-dom"
import { logout } from '../../ApiCall'
import AddIcon from '@mui/icons-material/Add';
import { CartContext } from '../../context/CartContext'
function Topbar() {
    const { isAuthenticated, user, dispatch } = useContext(AuthContext)
    const { cart } = useContext(CartContext)
    const navigate = useNavigate()
    return (
        <div className="navbar">
            <div className="left">
                <h4 onClick={() => user?.admin ? navigate("/admin") : navigate("/")}>Food Distributor System</h4>
            </div>
            <div className="right">
                {user && <h4>Hi {user.name}</h4>}
                {user && !user?.admin && <button className='btn btn-primary' onClick={() => navigate("/cart")}>Cart: <h7>{cart?.length}</h7></button>}
                {user && user.admin && <button className="btn btn-primary" onClick={() => navigate("/admin/orders")}>View Orders</button>}
                {user && !user.admin && <button className="btn btn-primary" onClick={() => navigate("/order")}>View Orders</button>}
                {user?.admin && < AddIcon style={{ color: "white" }} onClick={() => { navigate("/add/product") }} />}
                {user && <button className='btn btn-primary' onClick={(e) => logout(dispatch, navigate)}>Logout</button>}

            </div>

        </div>
    )
}

export default Topbar