import { useState } from "react";

import "./App.css";
import Navigation from "./cutomer/components/Navigation";
import HomeCarousel from "./cutomer/components/HomeCarousel";
import HomePage from "./cutomer/pages/HomePage";
import Footer from "./cutomer/components/Footer";
import Product from "./cutomer/components/product/Product";
import ProductDetails from "./cutomer/components/product/ProductDetails";
import Cart from "./cutomer/components/cart/Cart";
import Checkout from "./cutomer/components/checkout/Checkout";
import Order from "./cutomer/components/order/Order";
import OrderDetails from "./cutomer/components/order/OrderDetails";
import { Route, Routes } from "react-router-dom";
import CustomerRouters from "./Routers/CustomerRouters";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/*" element={<CustomerRouters />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
