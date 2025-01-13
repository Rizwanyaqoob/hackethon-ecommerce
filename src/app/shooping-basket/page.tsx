import React from "react";
import Image from "next/image";
import product from "../../../public/images/Product Image.png";
import tree from "../../../public/images/Product Image (1).png";
const Shopping = () => {
  return (
    <div>
      <div className="w-full h-auto px-6 md:px-44  mt-9 md:mt-12 mb-14 text-[#2A254B] font-myfont">
        <div>
          <h1 className="text-3xl md:text-4xl font-normal">
            Your shopping cart
          </h1>
        </div>
        {/* Product*/}
        <div className="hidden md:flex md:gap-[400px] md:mt-10 ">
<h1>Product</h1>
<h1 className="ml-24">Quantity</h1>
<h1 className="">Total</h1>
        </div>
      <div className="flex items-start justify-between mt-8">
    <div className="flex">
<Image src={product} alt="product" className="w-32 h-40 md:w-28 md:h-36 transition-transform hover:scale-105 duration-300 ease-linear"/>
<div className="ml-6">  
<h1 className="text-base md:text-xl md:font-semibold">Graystone vase</h1>
    
<p className="mt-3 text-base md:text-lg">A timeless ceramic vase with <br />
a tri color grey glaze.</p>
<p className="mt-3 text-base md:text-lg">£85</p>
</div>
    </div>
    <div className="">

    <p>£85</p>
    <p className="mt-20">£125</p>
    </div>
</div>

{/* product 2  */}
<div className="flex items-start justify-between mt-8 ">
    <div className="flex">
<Image src={tree} alt="product" className="w-32 h-40 md:w-28 md:h-36 transition-transform hover:scale-105 duration-300 ease-linear"/>
<div className="ml-6">  
<h1 className="text-base md:text-xl md:font-semibold">Basic white vase</h1>
    
<p className="mt-3 text-base md:text-lg">Beautiful and simple this is <br />
one for the classics</p>
<p className="mt-3 text-base md:text-lg">£85</p>
</div>
    </div>
    </div>

{/* sub-total */}
<div className="">

<div className="flex justify-end gap-10 pt-10 md:pt-20">
  <p className="text-xl">Subtotal</p>
  <p className="text-2xl">£210</p>
</div>
<div className="text-right text-base mt-4">
  <p>Taxes and shipping are calculated at checkout</p>
</div>
<div className="text-right mt-6">
  <button className="text-white w-full md:w-[172px] h-14 bg-[#2A254B] transition-transform hover:scale-105 hover:bg-[#5f5794]">Go to checkout</button>
</div>
</div>
      </div>
    </div>
  );
};

export default Shopping;

{
  /* <div className="">
    <div className="p-12">
<h1 className="text-base font-normal">Product</h1>
    </div>
</div> */
}
