import React from "react";
import Image from "next/image";
import left from "../../../public/images/Image Left.png";
import CardImage from "../components/card-image";
import Card from "../components/card";
import Signup from "../components/signup";
const Product = () => {
  return (
    <div className="font-myfont">
      {/*  */}
      <div className="w-full h-[54px] bg-[#2A254B] flex justify-center font-myfont my-10 md:h-10">
        <div className="flex justify-center items-center text-left px-4 md:text-center hover:scale-105 transition-transform duration-200 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 30 30"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              color="white"
            >
              <path d="M19.5 17.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-10 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0" />
              <path d="M14.5 17.5h-5m10 0h.763c.22 0 .33 0 .422-.012a1.5 1.5 0 0 0 1.303-1.302c.012-.093.012-.203.012-.423V13a6.5 6.5 0 0 0-6.5-6.5M2 4h10c1.414 0 2.121 0 2.56.44C15 4.878 15 5.585 15 7v8.5M2 12.75V15c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201M2 7h6m-6 3h4" />
            </g>
          </svg>
          <p className="text-white text-sm font-normal md:text-base">
            Free delivery on all orders over £50 with code easter checkout
          </p>
        </div>
      </div>
      <div className="px-4 md:px-8 lg:px-12 py-8 md:py-12">
        {/* main page */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* image section */}
          <div className="w-full md:w-1/2 h-auto">
            <Image
              src={left}
              alt="left"
              width={700}
              height={700}
              className="w-full h-auto transition-transform duration-300 ease-in-out hover:scale-105 object-cover"
            />
          </div>
          {/* text section */}
          <div className="w-full md:w-1/2 px-4 md:px-10 py-6 flex flex-col justify-center text-[#2A254B]">
            <div>
              <p className="font-medium text-xl md:text-3xl ">
                The Dandy Chair
              </p>
              <p className="py-4 text-lg md:text-xl">£250</p>
            </div>
            <div className="text-[#505977] text-sm md:text-base mt-3 md:mt-10">
              <h1 className="font-medium ">Description</h1>
              <div className="my-4">
                <p>
                  A timeless design, with premium materials features as one of
                  our most popular and iconic pieces. The dandy chair is perfect
                  for any stylish living space with beech legs and lambskin
                  leather upholstery.
                </p>
              </div>
              <div className="ml-3">
                <p>
                  <li>Premium material</li>
                  <li>Handmade upholstery</li>
                  <li>Quality timeless classic</li>
                </p>
              </div>
            </div>
            <div className="my-8">
              <h1 className="text-base font-medium text-[#505977]">Dimensions</h1>
            </div>
            <div className="text-[#505977] flex gap-12 md:gap-16 text-sm md:text-lg  ">
              <div>
                <h1>Height</h1>
              <p>110cm</p>
              </div>
              <div>

              <h1>Width</h1>
              <p>75cm</p>
              </div>
              <div>
                
              <h1>Depth</h1>
              <p>50cm</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-between items-center">
              <div className="flex items-center mt-8 text-[#2A254B] gap-8">
                <h1 >Amount:</h1>
                <button className="bg-[#F9F9F9] flex gap-4 px-4 py-2 hover:bg-[#f9f9f902] transition-transform scale-105 duration-300">
                  <span>+</span>1 <span>-</span>
                </button>
              </div>
              <button className="bg-[#2A254B] w-full md:w-[143px] h-[56px]  mt-4 md:mt-10 text-white transition-transform duration-300 scale-105 hover:bg-[#574d99] ">
                Add to cart</button>
            </div>
          </div>
        </div>
      </div>
      <CardImage/>
      <Card/>
      <Signup/>
    </div>
  );
};

export default Product;
