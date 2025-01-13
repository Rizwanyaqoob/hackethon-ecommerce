import React from "react";
import Image from "next/image";
import touch from "../../../public/images/touch.png";
const Getintouch = () => {
  return (
    // <div className="flex flex-col  md:flex-row font-myfont">
    <div className="flex flex-col md:flex-row font-myfont">
      <div className="w-full md:w-[720px] h-auto px-4 md:px-12 py-8 flex flex-col justify-between">
        <div>
          <h1 className="text-[#2A254B] text-2xl md:text-2xl ">
            From a studio in London to a global brand with <br /> over 400
            outlets
          </h1>
          <p className="py-6 text-lg md:text-xl text-[#505977] ">
            When we started Avion, the idea was simple. Make high-quality
            furniture <br />
            affordable and available for the mass market.
          </p>
          <p className="text-base md:text-lg text-[#505977]">
            Handmade and lovingly crafted furniture and homeware is what we
            live, breathe, and design, so our Chelsea boutique became the hotbed
            for the <br />
            London interior design community.
          </p>
        </div>
        <div className="my-10">
          <button className="bg-[#F9F9F9] w-full md:w-[150px] h-[56px] py-4 px-4 rounded-[5px] text-[#2A254B] hover:scale-105 transition-transform duration-300 hover:bg-[#686198]">
            Get in touch
          </button>
        </div>
      </div>

      <div className=" w-full md:w-[890px] h-auto ">
        <Image
          src={touch}
          alt="picture"
          width={800}
          height={800}
          className="w-full h-full transition-transform duration-300 ease-linear hover:scale-105 "
        />
      </div>
    </div>
  );
};

export default Getintouch;
