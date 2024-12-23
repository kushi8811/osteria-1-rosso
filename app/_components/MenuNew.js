"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Arrow from "./Arrow";

const menuImages = [
  "/osteria-images/new-year-4.jpeg",
  "/osteria-images/new-year-3.jpeg",
  "/osteria-images/new-year-1.jpeg",
  "/osteria-images/new-year-2.jpeg",
];

const MenuCarousel = () => {
  return (
    <div className="w-full max-w-4xl mx-auto my-8">
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next", // Custom next button
          prevEl: ".swiper-button-prev", // Custom prev button
        }}
        modules={[Navigation]}
        className="rounded-lg overflow-hidden"
        spaceBetween={20}
        slidesPerView={1} // One image at a time
        breakpoints={{
          640: { slidesPerView: 1 }, // For small screens, still one image
        }}
      >
        {menuImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Menu ${index + 1}`}
              className="w-[80%] mx-auto object-cover rounded-lg -mt-4" // Make image smaller
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Arrow />
    </div>
  );
};

export default MenuCarousel;
