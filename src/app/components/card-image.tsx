import React from 'react'
import Image from 'next/image'
import card from "../../../public/images/Right Image (1).png"
import card2 from "../../../public/images/Photo.png"
import card3 from "../../../public/images/Photo (1).png"
import card4 from "../../../public/images/Photo (2).png"

const CardImage = () => {
  return (
    <div className='font-myfont text-[#2A254B]'>
         <div className="text-left ml-10 mt-20 text-[32px] xs:text-xl">
      New ceramics
      </div>

    <div className="flex flex-wrap justify-center gap-8 mt-10 font-myfont text-[#2A254B]"> 
      {/* Card 1 */}
      <div className='font-myfont text-[#2A254B] w-full sm:w-1/2 md:w-1/4 lg:w-1/4'>
        <a href="#" className="flex flex-col items-center shadow-lg">
          <Image src={card} alt='picture' width={340} height={304} className='rounded-lg'/>
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">The Dandy chair</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">£250</p>
          </div>
        </a>
      </div>

      {/* Card 2 */}
      <div className='font-myfont text-[#2A254B] w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
        <a href="#" className="flex flex-col items-center shadow-lg">
          <Image src={card2} alt='picture' width={310} height={304} className='rounded-lg'/>
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">The Dandy chair</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">£250</p>
          </div>
        </a>
      </div>

      {/* Card 3 */}
      <div className='font-myfont text-[#2A254B] w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
        <a href="#" className="flex flex-col items-center shadow-lg">
          <Image src={card3} alt='picture' width={310} height={304} className='rounded-lg'/>
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">The Dandy chair</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">£250</p>
          </div>
        </a>
      </div>

      {/* Card 4 */}
      <div className='font-myfont text-[#2A254B] w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
        <a href="#" className="flex flex-col items-center shadow-lg">
          <Image src={card4} alt='picture' width={310} height={304} className='rounded-lg'/>
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">The Dandy chair</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">£250</p>
          </div>
        </a>
      </div>

    </div>
    </div>
  )
}

export default CardImage
