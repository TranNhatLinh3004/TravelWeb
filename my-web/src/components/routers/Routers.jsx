import React from "react";
import Cart from "../pages/cart/Cart";
import Home from "../pages/home/Home";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "../pages/productdetails/ProductDetails";

function Routers(props) {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="tour/:id" element={<ProductDetails />} />
    </Routes>
  );
}

export default Routers;
