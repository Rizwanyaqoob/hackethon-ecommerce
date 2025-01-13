import React from "react";
import Image from "next/image";
import delivery from "../../../public/images/Delivery (5).png";
import cart2 from "../../../public/images/Checkmark--outline.png";
import cart3 from "../../../public/images/Purchase.png";
import cart4 from "../../../public/images/Sprout.png";
const Card = () => {
  return (
    <div className="text-[#2A254B] px-4 md:px-8 py-6 md:py-12 font-myfont">
      {/* Title Section */}
      <div className="text-center mt-24">
        <h1 className="text-xl md:text-2xl font-bold">What makes our brand different</h1>
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        {/* 1st card */}
        <div className="max-w-sm p-6 rounded-lg  ">
          <a href="#">
            <Image
              src={delivery}
              alt="Delivery Image"
              width={50}
              height={50}
              className=""
            />
          </a>
          <h2 className="mt-4 text-lg font-semibold">Next day as standard</h2>
          <p className="mt-2 text-sm font-normal">
            Order before 3pm and get your order the next day as standard.
          </p>
        </div>

        {/* 2nd card */}
        <div className="max-w-sm p-6 ">
          <a href="#">
            <Image
              src={cart2}
              alt="Delivery Image"
              width={50}
              height={50}
              className=""
            />
          </a>
          <h2 className="mt-4 text-lg font-semibold">
          Made by true artisans            </h2>
          <p className="mt-2 text-sm font-normal">
          Hand-crafted goods made with real passion and craftsmanship.          </p>
        </div>

        {/* 3rd card */}
        <div className="max-w-sm p-6 ">
          <a href="#">
            <Image
              src={cart3}
              alt="Delivery Image"
              width={50}
              height={50}
              className=""
            />
          </a>
          <h2 className="mt-4 text-lg font-semibold">Unbeatable prices</h2>
          <p className="mt-2 text-sm font-normal">
          For our materials and quality you won’t find better prices anywhere   
          </p>
               </div>

        {/* 4th card */}
        <div className="max-w-sm p-6 ">
          <a href="#">
            <Image
              src={cart4}
              alt="Delivery Image"
              width={50}
              height={50}
              className=""
            />
          </a>
          <h2 className="mt-4 text-lg font-semibold">Recycled packaging</h2>
          <p className="mt-2 text-sm font-normal">
          We use 100% recycled packaging to ensure our footprint is manageable          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
