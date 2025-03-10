import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../cutomer/pages/HomePage";
import Cart from "../cutomer/components/cart/Cart";
import Navigation from "../cutomer/components/Navigation";
import Footer from "../cutomer/components/Footer";
import Product from "../cutomer/components/product/Product";
import ProductDetails from "../cutomer/components/product/ProductDetails";
import Checkout from "../cutomer/components/checkout/Checkout";
import Order from "../cutomer/components/order/Order";
import OrderDetails from "../cutomer/components/order/OrderDetails";
import PaymentSuccess from "../cutomer/components/Payment/PaymentSuccess";

const CustomerRouters = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/login" element={<HomePage />}></Route>
        <Route path="/register" element={<HomePage />}></Route>

        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account/order" element={<Order />} />
        <Route path="/account/order/:orderId" element={<OrderDetails />} />
        <Route path="/payment/:orderId" element={<PaymentSuccess />}></Route>
        {/* <Order /> */}
        {/* <OrderDetails /> */}
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRouters;
