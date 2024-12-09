import React from 'react'

const Signup = () => {
  return (
    <div className='bg-[#F9F9F9] w-full h-auto flex items-center justify-center mt-10'>
      <div className="w-full h-auto md:w-[1234px] md:h-[364px] bg-white text-[#2A254B] flex flex-col  justify-center items-center p-6 my-20">
        <div className="w-full sm:w-[440px] md:w-[571px] flex flex-col items-center text-center ">
          <h1 className='font-normal text-[18px] leading-[28px] md:text-[30px] md:leading-[50.4px]'>
            Join the club and get the benefits
          </h1>
          <p className='font-normal text-sm text-center mt-6 leading-[21px] sm:text-base sm:leading-[24px]'>
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
          </p>
          
          <div className="mt-6 flex items-center ">
            <input
              type="email"
              placeholder="your@email.com"
              className="px-4 py-2 border rounded-md bg-[#F9F9F9] h-[56px] text-[#2A254B] focus:outline-none focus:ring-2 focus:ring-[#2A254B] w-full sm:w-[300px]"
            />
            <button
              className="px-6 py-2 bg-[#2A254B] text-white h-[56px] hover:bg-[#1c1b3d] transition duration-300"
            >
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
