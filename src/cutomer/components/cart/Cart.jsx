import React, { useEffect } from "react";
import CartItem from "./CartItem";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../state/cart/Action";

const Cart = () => {
  const navigate = useNavigate();

  const { cart } = useSelector((store) => store);

  console.log(cart);

  const dispatch = useDispatch();

  function handleCheckOut() {
    navigate("/checkout?step=2");
  }

  useEffect(() => {
    dispatch(getCart());
  }, [cart.updateCartItem, cart.deleteCartItem]);

  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          {cart?.cartItems?.length > 0 ? (
            cart.cartItems
              .filter((item) => item) // Removes undefined values
              .filter((item) => item?.product) // Ensures item and product exist
              .map((item) => <CartItem key={item._id} item={item} />)
          ) : (
            <p className="text-center text-gray-500">Your cart is empty</p>
          )}
        </div>

        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <p className="uppercase font-bold opacity-60 pb-4">Price details</p>
            <hr />
            <div className="space-y-3 font-semibold mb-10">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>₹{cart.cart?.totalPrice}</span>
              </div>

              <div className="flex justify-between pt-3 ">
                <span>Discount</span>
                <span className="text-green-600">
                  -₹{cart.cart?.totalDiscountedPrice}
                </span>
              </div>

              <div className="flex justify-between pt-3 text-black">
                <span>Delivery Charge</span>
                <span className="text-green-600">Free</span>
              </div>

              <div className="flex justify-between pt-3  font-bold">
                <span>Total Amount</span>
                <span className="text-green-600">₹{cart.cart?.discounte}</span>
              </div>
            </div>
            <Button
              onClick={handleCheckOut}
              variant="contained"
              className="w-full mt-5"
              sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#9155fd" }}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
