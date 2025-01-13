import Image from "next/image";
import hero1 from "../../../public/images/Right Image (1).png";

const HeroSection=()=>{
  return (
    <div>

    <div className="px-6 py-12 font-myfont bg-[#2a254b] mt-10">
  
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div
          className="w-full md:w-[70%] h-auto md:h-[584px] border-black bg-[#2a254b]   text-white md:text-left px-4 py-6 md:py-16  md:px-16 " 
          
          >
          <h1 className="text-4xl font-medium ">
          The furniture brand for the  future, <br/> with timeless designs
          </h1>
          <div className='flex-end md:justify-start'>
                  <button className='w-[170px] h-[56px] bg-[#F9F9F926] text-white  font-bold mt-12 transition-transform duration-300 scale-105 hover:bg-[#f9f9f986]'>
                    View collection
                  </button>
                </div>
             
          <div className="my-4 pt-10 md:pt-28">

          <p className="text:sm md:text-lg md:text-left">
          A new era in eco friendly furniture with Avelon, the French luxury retail brand
with nice fonts, tasteful colors and a beautiful way to display things digitally <br />
using modern web technologies.
          </p>
          </div>
        </div>

        {/* Image */}
      <div className=" md:w-[40%] h-auto md:h-[584px] flex  justify-center items-end ">
        <Image src={hero1} alt="chair" width={500} height={800}/>
      </div>
      </div>
    </div>
            </div>
  );
};

export default HeroSection;
