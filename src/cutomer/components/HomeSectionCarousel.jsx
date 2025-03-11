import React, { useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "./HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { mens_kurta } from "../../Data/mens_kurta";

const HomeSectionCarousel = ({ data, sectionName, category }) => {
  console.log(data);

  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0); // State to track current index
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5 },
  };

  const items = data
    .filter((item) => item.category?.name === category) // ✅ Filter items based on category name
    .slice(0, 10) // ✅ Get the first 10 items after filtering
    .map((item) => <HomeSectionCard key={item.id} product={item} />);

  const totalItems = items.length;
  const maxVisibleItems = responsive[1024].items; // Adjust based on screen size
  const lastIndex = totalItems - maxVisibleItems;

  const slidePrev = () => {
    if (activeIndex > 0) {
      carouselRef.current.slidePrev();
      setActiveIndex(activeIndex - 1);
    }
  };

  const slideNext = () => {
    if (activeIndex < lastIndex) {
      carouselRef.current.slideNext();
      setActiveIndex(activeIndex + 1);
    }
  };

  // Sync index on manual slide change
  const handleSlideChange = (e) => {
    setActiveIndex(e.item);
  };

  return (
    <div className="border">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">
        {sectionName}
      </h2>
      <div className="relative p-5">
        <div
          style={{
            // width: "65%", // Default for Desktop (No changes)
            ...(window.innerWidth < 768 && {
              width: "60%", // Mobile: 70% width
              maxWidth: "100%",
              margin: "0 auto",
            }),
            ...(window.innerWidth >= 768 &&
              window.innerWidth < 1024 && {
                width: "80%", // Tablet: 80% width
                maxWidth: "100%",
                margin: "0 auto",
              }),
          }}
        >
          <AliceCarousel
            ref={carouselRef}
            items={items}
            disableButtonsControls
            responsive={responsive}
            disableDotsControls
            infinite={false}
            onSlideChanged={handleSlideChange}
          />
        </div>

        {/* Next Button - Hidden on Last Slide */}
        {activeIndex < lastIndex && (
          <Button
            onClick={slideNext}
            variant="contained"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "white",
            }}
            className="z-50"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}

        {/* Previous Button - Hidden on First Slide */}
        {activeIndex > 0 && (
          <Button
            onClick={slidePrev}
            variant="contained"
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(90deg)",
              bgcolor: "white",
            }}
            className="z-50"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(-90deg)", color: "black" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
