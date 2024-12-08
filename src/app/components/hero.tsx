"use client";
import Image from "next/image";
import { useState } from "react";
import hero1 from "../../../public/images/Right Image (1).png"; // Replace with your image path
import hero2 from "../../../public/images/Frame 2.png"; // Replace with your image path

const HeroSection = () => {
  const images = [hero1, hero2];

  const texts = [
    {
      title: "The furniture brand for the future, with timeless designs",
      description:
        "A new era in eco-friendly furniture with Avelon, the French luxury retail brand with nice fonts, tasteful colors and a beautiful way to display things digitally using modern web technologies.",
    },
    {
      title: "Transform your home into a stylish haven",
      description:
        "Discover top-rated homeware and furniture that reflect your style and quality.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative px-6 py-12 w-full h-auto bg-[#2a254b] font-myfont mt-16 ">
      {/* Content */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Text */}
        <div
          className={`w-full md:w-1/2 text-centerv md:text-left ${
            currentIndex === 1 ? "order-last md:order-first" : ""
          }`}
        >
          <h1 className="text-white text-4xl font-bold w-[504px] h-[90px] mb-24">
            {texts[currentIndex].title}
          </h1>
          <button className="bg-[#F9F9F926] text-white py-3 px-8 rounded-lg mb-28 hover:bg-gray-800 transition">
            View collection
          </button>
          <p className="text-white text-wrap">
            {texts[currentIndex].description}
          </p>
        </div>

        {/* Image */}
        <div
          className={`w-full md:w-1/2 relative ${
            currentIndex === 0 ? "hidden md:block" : ""
          }`}
        >
          <Image
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            width={520}
            height={584}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Mobile Image */}
        {currentIndex === 0 && (
          <div className="w-full md:hidden">
            <Image
              src={images[0]}
              alt={`Slide ${currentIndex + 1}`}
              width={520}
              height={584}
              className="rounded-lg shadow-lg"
            />
          </div>
        )}
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
