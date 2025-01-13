import React from "react";
import Image from "next/image";
import banner from "../../../public/images/Frame 143.png";
import Imaging from "./product";
import Pro from "./product2";
const ProductListing = () => {
  return (
    <div>

    <div className="text-[#2A254B] font-myfont">
      <div className="py-6">
        {/* banner section */}
        <Image src={banner} alt="banner" className="" />
      </div>
{/* product list */}
      <div className="flex px-10 justify-between mb-10 xs:hidden md:flex">
        <div className="flex gap-20 text-xl">
    <select name="" id="">
      <option value="">Category</option>
      <option value="">Chairs</option>
      <option value="">Tables</option>
    </select>
    <select name="" id="">
      <option value="">Product type</option>
      <option value=""></option>
      <option value=""></option>
    </select>
    <select name="" id="">
      <option value="">Price</option>
      <option value="">Formal</option>
      <option value="">Casual</option>
    </select>
    <select name="" id="">
      <option value="">Brand</option>
      <option value="">Normal</option>
      <option value="">Top</option>
    </select>
  </div>
  <div className="flex gap-20 text-xl" >
    <p>Sorting by:</p>
    <select name="" id="">
      <option value="">Date added</option>
      <option value="">Today</option>
      <option value="">Tomorrow</option>
    </select>
  </div>
</div>
    </div>
    <Imaging/>
    <Pro/>
    <Imaging/>
    <div className='flex justify-center my-10 '>

 <button className='w-full h-[56px] md:w-[170px] bg-[#F9F9F9] py-4 px-8 hover:bg-[#d6b6b645] transition-transform hover:scale-105 duration-300 ' >
  <p className='text-[#2A254B]'>View collection</p>
 </button>
</div>
</div>
  );
};

export default ProductListing;
