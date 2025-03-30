import React, { useEffect } from "react";
import HomeCarousel from "../components/HomeCarousel";
import HomeSectionCarousel from "../components/HomeSectionCarousel";
import { mens_kurta } from "../../Data/mens_kurta";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../state/Product/Action";

import { customerProductReducer } from "../../state/Product/Reducer";

import { ColorRing } from "react-loader-spinner";

const HomePage = () => {
  const { product } = useSelector((store) => store);

  const dispatch = useDispatch();

  // console.log(product);

  useEffect(() => {
    dispatch(fetchAllProducts()); // ✅ Call the function correctly
  }, [dispatch]);

  return (
    <div>
      <div>
        <HomeCarousel />
      </div>

      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        {!product?.allProducts || product.allProducts.length === 0 ? (
          <div className="flex justify-center items-center h-64">
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="color-ring-loading"
              wrapperStyle={{}}
              wrapperClass="color-ring-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
          </div>
        ) : (
          <>
            <HomeSectionCarousel
              data={product.allProducts}
              sectionName={"Men's Kurta"}
              category={"mens_kurta"}
            />
            <HomeSectionCarousel
              data={product.allProducts}
              sectionName={"Women's Top"}
              category={"top"}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
