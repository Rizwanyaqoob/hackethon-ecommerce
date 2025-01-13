import React from "react";
import Image from "next/image";
import image from "../../../public/images/Image Block.png";
import hyper from "../../../public/images/Image.png";
import Card from "../components/card";
import Signup from "../components/signup";

const About = () => {
  return (
    <div className="font-myfont">
      {/* hero section */}
      <div className="w-full h-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-16 py-8 mt-10">
        <div className="md:w-2/4 text-center md:text-left text-[#2A254B] font-normal text-2xl md:text-3xl">
          A brand built on the love of craftmanship, quality and outstanding
          customer service
        </div>
        <div className="w-full md:w-[192px] h-[56px] text-center bg-[#f9f9f0] text-[#2A254B] mt-6 md:mt-0 rounded-sm ">
          <button className=" py-4 px-8 hover:bg-[#f9f9f939] transition-transform hover:scale-105 duration-300 ">
            View our products
          </button>
        </div>
      </div>
      {/* Image Section */}
      <div className="flex flex-col md:flex-row w-full h-auto items-center justify-between px-4 py-8">
  {/* Text Block */}
  <div className="bg-[#2A254B] text-white w-full md:w-[48%] h-[300px] md:h-[478px] p-6 md:p-16 mb-6 md:mb-0">
    <h1 className="text-xl md:text-4xl">It started with a small idea</h1>
    <p className="text-sm md:text-lg mt-5">
      A global brand with local beginnings, our story began in a small
      studio in South London in early 2014
    </p>
    <button className="bg-[#F9F9F926] w-full md:w-[256px] h-14 py-4 px-8 rounded-sm mt-[68px] md:mt-[160px] transition-transform hover:scale-105 ease-in-out duration-300 hover:bg-[#f9f9f96c]">
      View collection
    </button>
  </div>

  {/* Image Block */}
  <div className="w-full h-[259px] md:h-[478px] md:w-[48%]">
    <Image
      src={image}
      alt="image"
      className="w-full h-full object-cover transition-transform hover:scale-105 ease-in-out duration-300"
    />
  </div>
</div>

      {/* hyper section */}
      <div className="flex flex-col md:flex-row w-full h-auto items-center px-4 py-16">
        <Image
          src={hyper}
          alt="hyper"
          className="w-full md:w-1/2 transition-transform hover:scale-105 ease-in-out duration-300"
          />
        <div className="w-full md:w-1/2 h-auto bg-[#F9F9F9] text-[#2A254B] p-8 py-16 space-y-8 md:space-y-0">
          <h1 className="text-xl md:text-2xl font-normal">
            Our service isn’t just personal, it’s actually hyper personally
            exquisite
          </h1>
          <p className="text-[#505977] text-sm md:text-lg  pt-9 text-left ">
            When we started Avion, the idea was simple. Make high quality
            furniture affordable and available for the mass market. </p>
          <p className="text-[#505977] text-sm md:text-lg  text-left pt-10">
            Handmade, and lovingly crafted furniture and homeware is what we
            live, breathe and design so our Chelsea boutique become the hotbed
            for the London interior design community.
          </p>
          <div className="md:pt-[110px]">
            <button className="bg-white w-full md:w-[150px] h-[56px] py-4 px-6  text-[#2A254B] hover:scale-105 transition-transform duration-300 hover:bg-[#686198]">
              Get in touch
            </button>
          </div>
        </div>
      </div>
      <Card/>
      <Signup/>
      </div>
  );
};

export default About;
