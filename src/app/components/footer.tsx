import React from 'react';


const Footer = () => {
  return (
    <div className='bg-[#2A254B] w-full font-myfont text-white'>
       <footer className="footer  text-base-content p-10 flex flex-row gap-48">
  <nav className='flex flex-col font-normal text-sm gap-3 pl-5'>
    <h6 className="text-base">Menu</h6>
    <a className="">New arrivals</a>
    <a className="">Best sellers</a>
    <a className="">Recently viewed</a>
    <a className="">Popular this week</a>
    <p className=''>All products</p>
  </nav>
  <nav className='flex flex-col font-normal text-sm gap-3 pl-5'>
    <h6 className="text-base">Categories</h6>
    <a className="#">Crockery</a>
    <a className="#">Furniture</a>
    <a className="#">Homeware</a>
    <a className="#">Plant pots</a>
    <a className="#">Chairs</a>
  </nav>
  <nav className='flex flex-col font-normal text-sm gap-3 pl-5'>
    <h6 className="text-base">Our company</h6>
    <a className="#">About us</a>
    <a className="#">Vacancies</a>
    <a className="#">Contact us</a>
    <a className="#">Privacy</a>
    <a className="#">Returns policy</a>
  </nav>
  <form>
    <h6 className="">Join our mailing list</h6>
    <fieldset className="">
    <div className="mt-6 flex items-center ">
            <input
              type="email"
              placeholder="your@email.com"
              className="px-4 py-2  bg-[#FFFFFF26] h-[56px] text-[#2A254B] focus:outline-none  w-full sm:w-[450px]"
            />
            <button
              className="px-6 py-2 text-[#2A254B] bg-white h-[56px] hover:bg-[#af9d9d] transition duration-300"
            >
              Signup
            </button>
          </div>
      {/* <div className="">
        <input
          type="text"
          placeholder="your@email.com"
          className="" />
        <button className="bg-white text-[#2A254B] rounded-sm py-4 px-8">Sign up</button>
      </div> */}
    </fieldset>
  </form>
</footer>
      {/* Thin Line */}
      <div className="h-1 w-full bg-[#4E4D93]"></div>

      {/* Footer Content */}
      <div className="flex flex-col md:flex-row justify-between items-center py-4 px-6 text-white">
        <span className="text-sm md:text-base ">Copyright 2022 Avenir LTD</span>

        {/* Icons */}
        <div className="hidden sm:flex space-x-4 sm:mt-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2M8.09 18.74h-3v-9h3ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12a1.57 1.57 0 1 1 0 3.12m12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 12.85 13a2 2 0 0 0-.1.73v5h-3v-9h3V11a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06Z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M17 1H3c-1.1 0-2 .9-2 2v14c0 1.101.9 2 2 2h7v-7H8V9.525h2v-2.05c0-2.164 1.212-3.684 3.766-3.684l1.803.002v2.605h-1.197c-.994 0-1.372.746-1.372 1.438v1.69h2.568L15 12h-2v7h4c1.1 0 2-.899 2-2V3c0-1.1-.9-2-2-2"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13.028 2c1.125.003 1.696.009 2.189.023l.194.007c.224.008.445.018.712.03c1.064.05 1.79.218 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.012.266.022.487.03.712l.006.194c.015.492.021 1.063.023 2.188l.001.746v1.31a79 79 0 0 1-.023 2.188l-.006.194c-.008.225-.018.446-.03.712c-.05 1.065-.22 1.79-.466 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465l-.712.03l-.194.006c-.493.014-1.064.021-2.189.023l-.746.001h-1.309a78 78 0 0 1-2.189-.023l-.194-.006a63 63 0 0 1-.712-.031c-1.064-.05-1.79-.218-2.428-.465a4.9 4.9 0 0 1-1.771-1.153a4.9 4.9 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.428l-.03-.712l-.005-.194A79 79 0 0 1 2 13.028v-2.056a79 79 0 0 1 .022-2.188l.007-.194c.008-.225.018-.446.03-.712c.05-1.065.218-1.79.465-2.428A4.9 4.9 0 0 1 3.68 3.678a4.9 4.9 0 0 1 1.77-1.153c.638-.247 1.363-.415 2.428-.465c.266-.012.488-.022.712-.03l.194-.006a79 79 0 0 1 2.188-.023zM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 2a3 3 0 1 1 .001 6a3 3 0 0 1 0-6m5.25-3.5a1.25 1.25 0 0 0 0 2.5a1.25 1.25 0 0 0 0-2.5"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-2 -2 24 24"><path fill="currentColor" d="M19.126 11.425A9.26 9.26 0 0 0 8.534.834A5.596 5.596 0 0 0 .833 8.535a9.26 9.26 0 0 0 10.591 10.592c.854.525 1.86.831 2.939.831a5.596 5.596 0 0 0 4.763-8.534zm-4.75 2.766q-.59.846-1.72 1.321q-1.129.476-2.672.476q-1.85 0-3.058-.651a3.96 3.96 0 0 1-1.393-1.252q-.537-.784-.539-1.532c0-.294.112-.55.33-.759c.221-.21.505-.315.84-.315q.414 0 .704.247q.285.245.481.716q.236.548.508.912q.27.36.762.597q.487.236 1.297.236q1.11-.001 1.796-.476c.46-.318.68-.706.68-1.174c0-.374-.118-.67-.363-.902q-.368-.351-.96-.537a17 17 0 0 0-1.596-.4q-1.343-.293-2.252-.685q-.911-.393-1.45-1.074q-.54-.687-.539-1.7q0-.965.568-1.716q.57-.751 1.64-1.152t2.51-.4q1.152 0 1.994.265q.84.267 1.4.707q.558.443.818.93q.26.49.26.957q-.002.436-.33.782c-.22.23-.499.347-.825.346q-.443.002-.685-.211c-.156-.14-.32-.36-.497-.67q-.336-.645-.804-1.005c-.304-.235-.805-.358-1.502-.356q-.966 0-1.55.39c-.392.261-.58.565-.58.92c0 .224.065.412.194.573q.195.244.547.421q.353.18.713.28q.364.104 1.204.3q1.051.228 1.909.504q.855.276 1.46.674q.607.398.947 1.011q.342.614.342 1.495q0 1.062-.59 1.907z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><g fill="none"><g clip-path="url(#primeTwitter0)"><path fill="currentColor" d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"/></g><defs><clipPath id="primeTwitter0"><path fill="#fff" d="M0 0h14v14H0z"/></clipPath></defs></g></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13.372 2.094a10.003 10.003 0 0 0-5.369 19.074a7.8 7.8 0 0 1 .162-2.292c.185-.839 1.296-5.463 1.296-5.463a3.7 3.7 0 0 1-.324-1.577c0-1.485.857-2.593 1.923-2.593a1.334 1.334 0 0 1 1.342 1.508c0 .9-.578 2.262-.88 3.54a1.544 1.544 0 0 0 1.575 1.923c1.897 0 3.17-2.431 3.17-5.301c0-2.201-1.457-3.847-4.143-3.847a4.746 4.746 0 0 0-4.93 4.793a2.96 2.96 0 0 0 .648 1.97a.48.48 0 0 1 .162.554c-.046.184-.162.623-.208.785a.354.354 0 0 1-.51.253c-1.384-.554-2.036-2.077-2.036-3.816c0-2.847 2.384-6.255 7.154-6.255c3.796 0 6.319 2.777 6.319 5.747c0 3.909-2.176 6.848-5.393 6.848a2.86 2.86 0 0 1-2.454-1.246s-.579 2.316-.692 2.754a8 8 0 0 1-1.019 2.131c.923.28 1.882.42 2.846.416a9.99 9.99 0 0 0 9.996-10.002a10 10 0 0 0-8.635-9.904"/></svg>
        </div>
      </div>
  
    </div>
  )
}

export default Footer
