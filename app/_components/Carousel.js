"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import ReviewCard from "./ReviewCard";

import React, { createContext } from "react";

const Carousel = ({ reviews }) => {
  return (
    <div className="mt-10 px-4 sm:px-10">
      <h2 className="text-2xl font-bold text-center mb-6 text-white">
        Customer Reviews
      </h2>
      <Swiper
        modules={[Navigation]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        className="rounded-lg shadow-lg"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.author_name}>
            <ReviewCard review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
