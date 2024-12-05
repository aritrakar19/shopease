import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NoPage from "./pages/noPage/NoPage";
import ProductInfo from "./pages/productInfo/ProductInfo";
import ScrollTop from "./components/scrollTop/ScrollTop";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import CartPage from "./pages/cart/CartPage";
import Dashboard from "./pages/admin/dashboard/Dashboard";

function App() {
  return (
    <>
      <div>
        <Router>
          <ScrollTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/nopage" element={<NoPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="/productinfo" element={<ProductInfo />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
