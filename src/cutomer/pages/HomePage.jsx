import React, { useEffect } from "react";
import HomeCarousel from "../components/HomeCarousel";
import HomeSectionCarousel from "../components/HomeSectionCarousel";
import { mens_kurta } from "../../Data/mens_kurta";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../state/Product/Action";

import { customerProductReducer } from "../../state/Product/Reducer";

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
        <HomeSectionCarousel
          data={product?.allProducts}
          sectionName={"Men's Kurta"}
          category={"mens_kurta"}
        />
        <HomeSectionCarousel
          data={product?.allProducts}
          sectionName={"Women's Top"}
          category={"top"}
        />
        {/* <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shirt"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Saree"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Dress"} /> */}
      </div>
    </div>
  );
};

export default HomePage;
