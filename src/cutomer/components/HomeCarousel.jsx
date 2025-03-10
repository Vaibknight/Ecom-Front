import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = [
  <div className="item" data-value="1">
    <img
      src="https://img.freepik.com/free-vector/gradient-shopping-discount-horizontal-sale-banner_23-2150322008.jpg?t=st=1736101339~exp=1736104939~hmac=0a2850707a8735d29f8a2fd1c952e2727989d0524c688f10ad434924e4b6750b&w=1060"
      alt=""
      style={{ width: "-webkit-fill-available", height: "600px" }}
    />
  </div>,
  <div className="item" data-value="2">
    <img
      src="https://img.freepik.com/free-psd/horizontal-banner-template-big-sale-with-woman-shopping-bags_23-2148786755.jpg?t=st=1736100499~exp=1736104099~hmac=ca479796512332c0a4f2889e854a307b36ed30e6f30628a76bc7bc6c619f8e33&w=1060"
      alt=""
      style={{ width: "-webkit-fill-available", height: "600px" }}
    />
  </div>,
  <div className="item" data-value="3">
    <img
      src="https://img.freepik.com/free-vector/bank-customer-getting-loan-online-man-wheeling-cart-with-cash-from-gadget-screen-woman-flat-vector-illustration_74855-10543.jpg?t=st=1736101019~exp=1736104619~hmac=0d6464fc9a7313e970b29a3eb408f615ae008c6cf1837b7bf3f76aab87cdcb7d&w=1380"
      alt=""
      style={{ width: "-webkit-fill-available", height: "600px" }}
    />
  </div>,
  <div className="item" data-value="4">
    <img
      src="https://img.freepik.com/free-photo/shopping-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-smiling-looking-camera_1258-118763.jpg?t=st=1736101279~exp=1736104879~hmac=d1e39f2ca5111df7c4f0a65902338272d5c8e452c0ce7580af3dcf67bc81047d&w=1380"
      alt=""
      style={{ width: "-webkit-fill-available", height: "600px" }}
    />
  </div>,
  <div className="item" data-value="5">
    <img
      src="https://img.freepik.com/free-photo/excited-girl-open-up-shopping-bags-gasping-amazed-checking-out-gifts-her-with-happy-face-sta_1258-119591.jpg?t=st=1736100594~exp=1736104194~hmac=79ac22ca8f7a0c75f011416b6904ea062a1a0fdf5f6df91892832d921f7c0c9e&w=1380"
      alt=""
      style={{ width: "-webkit-fill-available", height: "600px" }}
    />
  </div>,
];

const HomeCarousel = () => (
  <AliceCarousel items={items} autoPlay autoPlayInterval={1000} infinite />
);

export default HomeCarousel;
