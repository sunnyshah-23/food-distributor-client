
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Topbar from './components/Topbar/Topbar';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import AdminHome from "./pages/admin/Home"
import Update from './pages/admin/Update';
import Addproduct from './pages/admin/Addproduct';
import Cart from './pages/cart/Cart';
import { CartContext } from './context/CartContext';
import Payment from './pages/payment/Payment';
import Order from './pages/order/Order';
import AdminOrders from './pages/admin/AdminOrders';

function App() {
  const { user } = useContext(AuthContext)
  const { cart } = useContext(CartContext)

  return (
    <>

      <Router>
        <Routes>
          <Route exact path="/" element={user ? <Home /> : <Login />} />
          <Route exact path="/register" element={user ? <Home /> : <Register />} />
          <Route exact path="/login" element={user ? <Home /> : <Login />} />
          <Route exact path="/admin/" element={user?.admin == true ? <AdminHome /> : <Home />} />
          <Route exact path="/product/:id" element={user?.admin == true ? <Update /> : <Home />} />
          <Route exact path="/add/product" element={user?.admin == true ? <Addproduct /> : <Home />} />
          <Route exact path="/cart" element={user?.admin == false ? <Cart /> : <AdminHome />} />
          <Route exact path="/payment" element={cart.length != 0 ? <Payment /> : <Home />} />
          <Route exact path="/order" element={user ? <Order /> : <Login />} />
          <Route exact path="/admin/orders" element={user?.admin == true ? <AdminOrders /> : <Home />} />





        </Routes>
      </Router>
    </>
  );
}

export default App;
