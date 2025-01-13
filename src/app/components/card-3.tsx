'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';  // Import the useRouter hook from Next.js
import sofa from "../../../public/images/Product Card/Large.png"
import sofa1 from "../../../public/images/Right Image (1).png"
import sofa2 from "../../../public/images/Parent.png"

const Card3 = () => {
  const router = useRouter();  // Initialize useRouter to handle navigation

  const handleViewCollection = () => {
    router.push('/productListing');  // Navigate to the /productlisting page
  };

  return (
    <div className="font-myfont text-[#2A254B] py-12 px-8 mt-20">
      <div className=" text-[32px] font-normal">
        Our Popular Products
      </div>
      <div className="flex flex-col md:flex-row gap-8 mt-8 ">
        {/* Card 1 */}
        <div className="w-full md:w-[700px] h-auto group">
          <Image 
            src={sofa} 
            alt="The Popular Suede Sofa" 
            width={800} 
            height={800} 
            className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" 
          />
          <div className="p-4 text-center">
            <h5 className="mb-2 text-xl font-bold">The Popular Suede Sofa</h5>
            <p className="text-lg font-medium ">£960</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full md:w-[350px] h-auto group">
          <Image 
            src={sofa1} 
            alt="The Modern Armchair" 
            width={800} 
            height={800} 
            className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" 
          />
          <div className="p-4 text-center">
            <h5 className="mb-2 text-xl font-bold ">The Dandy chair</h5>
            <p className="text-lg font-medium ">£250</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full md:w-[350px] h-auto group">
          <Image 
            src={sofa2} 
            alt="The Classic Chair" 
            width={800} 
            height={800} 
            className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" 
          />
          <div className="p-4 text-center">
            <h5 className="mb-2 text-xl font-bold ">The Dandy chair </h5>
            <p className="text-lg font-medium ">£250</p>
          </div>
        </div>
      </div>
      
      {/* View Collection Button */}
      <div className="flex justify-center mt-10">
        <button 
          className="w-full h-[56px] md:w-[170px] bg-[#F9F9F9] rounded-md  hover:bg-[#7b7987] hover:scale-105 transition-transform duration-300"
          onClick={handleViewCollection}  // Handle the button click event
        >
          <p className="text-[#2A254B] ">View Collection</p>
        </button>
      </div>
    </div>
  );
};

export default Card3;
