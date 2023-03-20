
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
function App() {
  const { user } = useContext(AuthContext)
  return (
    <>

      <Router>
        <Routes>
          <Route exact path="/" element={user ? <Home /> : <Login />} />
          <Route exact path="/register" element={user ? <Home /> : <Register />} />
          <Route exact path="/login" element={user ? <Home /> : <Login />} />
          <Route exact path="/admin/" element={user?.isAdmin == true ? <AdminHome /> : <Home />} />
          <Route exact path="/product/:id" element={user?.isAdmin == true ? <Update /> : <Home />} />
          <Route exact path="/add/product" element={user?.isAdmin == true ? <Addproduct /> : <Home />} />


        </Routes>
      </Router>
    </>
  );
}

export default App;
