import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import "./topbar.css"
import { useNavigate } from "react-router-dom"
import { logout } from '../../ApiCall'
import AddIcon from '@mui/icons-material/Add';
function Topbar() {
    const { isAuthenticated, user, dispatch } = useContext(AuthContext)
    const navigate = useNavigate()
    return (
        <div className="navbar">
            <div className="left">
                <h4 onClick={() => user?.isAdmin ? navigate("/admin") : navigate("/")}>Food Distributor System</h4>
            </div>
            <div className="right">
                {user && <h4>Hi {user.name}</h4>}
                {user?.isAdmin && < AddIcon style={{ color: "white" }} onClick={() => { navigate("/add/product") }} />}
                {user && <button className='btn btn-primary' onClick={(e) => logout(dispatch, navigate)}>Logout</button>}

            </div>

        </div>
    )
}

export default Topbar