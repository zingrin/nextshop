"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    image: "https://i.postimg.cc/26CcyLwQ/men-dress.png",
    title: "Men's Fashion Collection",
    text: "Explore our latest men's casual, formal and party wear dresses.",
    button: "Shop Men's",
  },
  {
    image: "https://i.postimg.cc/9fKjRm2n/women-dress.png",
    title: "Women's Trendy Dresses",
    text: "From elegant gowns to chic casual wear, discover women's fashion that inspires.",
    button: "Shop Women's",
  },
  {
    image: "https://i.postimg.cc/tCqQbzdP/kids-dress.png",
    title: "Kids Wear Collection",
    text: "Comfortable and stylish dresses for kids of all ages, perfect for every occasion.",
    button: "Shop Kids",
  },
];

export default function Hero() {
  return (
    <div className="w-full mx-auto my-8 max-w-7xl">
      <div className="mx-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500 }}
          className="shadow-lg rounded-2xl"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-[500px] object-cover rounded-2xl"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white bg-black/40 rounded-2xl">
                  <h2 className="mb-4 text-3xl font-bold md:text-5xl drop-shadow-lg">
                    {slide.title}
                  </h2>
                  <p className="max-w-2xl text-lg md:text-xl">
                    {slide.text}
                  </p>
                  <button className="px-6 py-3 mt-6 transition bg-amber-500 rounded-lg hover:bg-amber-600 font-semibold">
                    {slide.button}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
