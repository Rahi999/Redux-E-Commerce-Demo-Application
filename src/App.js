import { Link, Route, Router, Routes, Redirect } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Login from "./components/Login";
import Pdetails from "./components/Pdetails";
import Products from "./components/Products";
import "./styles.css";
import Ui from "./Ui";
import { loadData } from "./utils/accessLocalStorage";
export default function App() {
  const token = loadData("token");

  //http://fakestoreapi.com/products
  // reqres.in ;-- https://reqres.in/api/login
  return (
    <div className="App">
      <Link to="/">Home</Link> | <Link to="/login">Login</Link> |{" "}
      <Link to="/products">Products</Link> | <Link to="/cart">Cart</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={token ? <Products /> : <Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path={"/products/:id"} element={<Pdetails />} />{" "}
      </Routes>
    </div>
  );
}
