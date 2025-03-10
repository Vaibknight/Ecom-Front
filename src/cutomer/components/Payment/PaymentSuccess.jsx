import { Alert, AlertTitle } from "@mui/material";
import React, { useEffect, useState } from "react";
import OrderTracker from "../order/OrderTracker";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../../state/Order/Action";

import { Avatar, Box, Grid, Rating, TextField } from "@mui/material";
import { updatePayment } from "../../../state/payment/Action";
import AddressCard from "../AddressCard/AddressCard";
import { clearCart } from "../../../state/cart/Action";

export default function PaymentSuccess() {
  const navigate = useNavigate();

  const [paymentId, setPaymentId] = useState();

  const [referenceId, setReferenceId] = useState();

  const [paymentStatus, setPaymentStatus] = useState();

  const { orderId } = useParams();

  const dispatch = useDispatch();

  const { orders } = useSelector((store) => store);

  console.log("order ", orders);

  useEffect(() => {
    const urlParam = new URLSearchParams(window.location.search);

    setPaymentId(urlParam.get("razorpay_payment_id"));

    setPaymentStatus(urlParam.get("razorpay_payment_link_status"));
  }, []);

  useEffect(() => {
    if (paymentId) {
      const data = { orderId, paymentId };

      dispatch(getOrderById(orderId));
      dispatch(updatePayment(data));

      const timer = setTimeout(() => {
        dispatch(clearCart());
        navigate("/"); // This will navigate to the root page, i.e., "http://localhost:5173/"
        // ✅ Redirect after clearing cart
      }, 20000);
    }
  }, [orderId, paymentId]);

  return (
    <div>
      <div className="px-2 lg:px-36">
        <div className="flex flex-col justify-center items-center">
          <Alert
            variant="filled"
            severity="success"
            sx={{ mb: 6, width: "fit-content" }}
          >
            <AlertTitle>Payment Success</AlertTitle>
            Congratulations Your Order Get Placed
          </Alert>
        </div>

        <OrderTracker activeStep={1} />

        <Grid container className="space-y-5 py-5 pt-20">
          {orders?.order?.orderItems.map((item) => (
            <Grid
              container
              item
              className="shadow-xl rounded-md p-5"
              sx={{ alignItems: "center", justifyContent: "space-between" }}
            >
              <Grid item xs={6}>
                <div className="flex items-center">
                  <img
                    className="w-[5rem] h-[5rem] object-cover object-top"
                    src={item.product.imageUrl}
                    alt=""
                  />

                  <div className="ml-5 space-y-2">
                    <p>{item.product.title}</p>
                    <div className="opacity-50 text-xs font-semibold space-x-5">
                      <span>Color : {item.product.color}</span>
                      <span>Size : {item.size}</span>
                    </div>
                    <p>Seller : {item.product.brand}</p>
                    <p>₹{item.price}</p>
                  </div>
                </div>
              </Grid>

              <Grid item>
                <AddressCard address={orders.order.shippingAddress} />
              </Grid>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
