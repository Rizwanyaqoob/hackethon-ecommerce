import React from 'react'
import Image from 'next/image'
import card from "../../../public/images/Right Image (1).png"
import card2 from "../../../public/images/Photo.png"
import card3 from "../../../public/images/Photo (1).png"
import card4 from "../../../public/images/Photo (2).png"

const Imaging = () => {
  return (
    <div className='font-myfont text-[#2A254B]'>
    
    <div className='font-myfont text-[#2A254B] px-10'>
         
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10"> 
      {/* Card 1 */}
      <div className='w-full h-auto'>
        
          <Image src={card} alt='picture' width={700} height={700} className='w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 '/>
          <div className="mt-5 font-normal">
            <h5 className="py-2">The Dandy chair</h5>
            <p>£250</p>
          </div>
      </div>

      {/* Card 2 */}
      <div className='w-full h-auto'>
        
          <Image src={card2} alt='picture' width={700} height={700} className='w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 '/>
          <div className="mt-5 font-normal">
            <h5 className="py-2">Rustic Vase Set</h5>
            <p>£155</p>
          </div>
      </div>
      {/* Card 3 */}
      <div className='w-full h-auto'>
        
          <Image src={card3} alt='picture' width={700} height={700} className='w-full h-[80%] object-cover transition duration-300 ease-in-out hover:scale-105 '/>
          <div className="mt-5 font-normal">
            <h5 className="py-2">The Silky Vase</h5>
            <p>£125</p>
          </div>
      </div>
      {/* Card 4 */}
      <div className='w-full h-auto'>
        
        <Image src={card4} alt='picture' width={700} height={700} className='w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 '/>
        <div className="mt-5 font-normal">
          <h5 className="py-2">The Lucy Lamp</h5>
          <p>£399</p>
        </div>
    </div>
    </div>
    </div>

</div>
)
}



export default Imaging