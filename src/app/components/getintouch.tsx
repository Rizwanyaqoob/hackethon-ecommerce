import React from 'react'
import Image from 'next/image'
import touch from "../../../public/images/touch.png"
const Getintouch = () => {
  return (
    <div  className='flex flex-row font-myfont'>

        <div className='w-full h-[828px] sm:w-[624px] sm:h-auto md:w-[1024px] md:h-auto lg:w-[1440px] lg:h-auto mt-10'>
<div>
            <h1 className='text-[#2A254B] text-[20px] sm:mt-10 font-normal pl-6 w-[274px] h-[84px]pl-6 sm:h-[68px] sm:text-2xl sm:w-[514px]  '>From a studio in London to a global brand with
            over 400 outlets</h1>
            <p className='text-[#505977] mt-3 font-normal text-sm w-[342px] h-[84px] pl-6 sm:text-base sm:w-[536px] sm:h-[66px]  sm:mt-8'>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. </p>
                <p className='text-[#505977] mt-3 w-[342px] h-[84px] pl-6 sm:text-base sm:w-[536px] sm:h-[66px] sm:mt-8' > Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
</div>
        
<div className="   sm:pl-6 sm:mt-72 sm:mb-8">
            <button className='w-[250px] sm:w-[300px] md:w-[160px] bg-[#a3717138] rounded-md py-4 px-8 hover:bg-[#9f505038] hover:scale-105 transition-transform duration-300'>
                <p className='text-[#2A254B] text-center font-semibold'>Get in touch</p>
            </button> 
        </div>

</div>
<div className=' w-full '>
<Image src={touch} alt="picture" />
</div>

</div>
  )
}

export default Getintouch
