import React from 'react'
import Image from 'next/image'
import sofa from "../../../public/images/Product Card/Large.png"
import sofa1 from "../../../public/images/Right Image (1).png"
import sofa2 from "../../../public/images/Parent.png"

const Card3 = () => {
  return (
    <div className="font-myfont text-[#2A254B] px-5 mt-20">
      <div className="mt-5 text-[32px] font-bold ">
        Our Popular Products
      </div>
      <div className="flex justify-center gap-4 mt-6 ">
        {/* Card 1 */}
        <div className="w-full sm:w-[40%] md:w-[40%] lg:w-[40%] flex flex-col items-center shadow-lg rounded-lg">
          <Image 
            src={sofa} 
            alt="The Popular Suede Sofa" 
            width={675} 
            height={489} 
            className="rounded-lg object-cover" 
            />
          <div className="p-4 text-center">
            <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">The Popular Suede Sofa</h5>
            <p className="text-lg font-medium text-gray-700 dark:text-gray-400">£960</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full sm:w-[30%] md:w-[30%] lg:w-[30%] flex flex-col items-center shadow-lg rounded-lg">
          <Image 
            src={sofa1} 
            alt="The Modern Armchair" 
            width={300} 
            height={300} 
            className="rounded-lg object-cover" 
          />
          <div className="p-4 text-center">
            <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">The Modern Armchair</h5>
            <p className="text-lg font-medium text-gray-700 dark:text-gray-400">£250</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full sm:w-[30%] md:w-[30%] lg:w-[30%] flex flex-col items-center shadow-lg rounded-lg">
          <Image 
            src={sofa2} 
            alt="The Classic Chair" 
            width={300} 
            height={300} 
            className="rounded-lg object-cover" 
            />
          <div className="p-4 text-center">
            <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">The Classic Chair</h5>
            <p className="text-lg font-medium text-gray-700 dark:text-gray-400">£150</p>
          </div>
        </div>
      </div>
      <div className='flex justify-center mt-10'>

 <button className='w-full h-[56px] md:w-[170px] bg-[#a3717138] rounded-md py-4 px-8 hover:bg-[#9f505038] hover:scale-105 transition-transform duration-300' >
  <p className='text-[#2A254B]'>View collection</p>
 </button>
</div>
            </div>
    
  )
}

export default Card3;
