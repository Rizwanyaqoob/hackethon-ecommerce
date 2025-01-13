import React from "react";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
<div className="text-[#2A254B]" >
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 font-myfont text-[#2A254B]">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="hidden md:block" width="24" height="24" viewBox="0 0 24 24 ">
	<path fill="currentColor" fill-rule="evenodd" d="M14.385 15.446a6.75 6.75 0 1 1 1.06-1.06l5.156 5.155a.75.75 0 1 1-1.06 1.06zm-7.926-1.562a5.25 5.25 0 1 1 7.43-.005l-.005.005l-.005.004a5.25 5.25 0 0 1-7.42-.004" clip-rule="evenodd" />
</svg>
        <Link href="/" className="flex items-center ">
          <span className="text-2xl font-bold  dark:text-white">
            Avion
          </span>
        </Link>
<div className="hidden md:flex">

        <svg xmlns="http://www.w3.org/2000/svg" className="" width="24" height="24" viewBox="0 0 24 24">
	<g fill="none" stroke="currentColor">
		<circle cx="10" cy="19" r="1.5" />
		<circle cx="17" cy="19" r="1.5" />
		<path strokeLinecap="round" strokeLinejoin="round" d="M3.5 4h2l3.504 11H17" />
		<path strokeLinecap="round" strokeLinejoin="round" d="M8.224 12.5L6.3 6.5h12.507a.5.5 0 0 1 .475.658l-1.667 5a.5.5 0 0 1-.474.342z" />
	</g>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	<path fill="currentColor" d="M6 17c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6m9-9a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2" />
</svg>
</div>

                {/* Icon */}

        {/* Mobile Menu Button */}
        {/* search Icon  */}
        <svg xmlns="http://www.w3.org/2000/svg" className="md:hidden " width="24" height="24" viewBox="0 0 24 24 ">
	<path fill="currentColor" fillRule="evenodd" d="M14.385 15.446a6.75 6.75 0 1 1 1.06-1.06l5.156 5.155a.75.75 0 1 1-1.06 1.06zm-7.926-1.562a5.25 5.25 0 1 1 7.43-.005l-.005.005l-.005.004a5.25 5.25 0 0 1-7.42-.004" clipRule="evenodd" />
</svg>
        <button
          className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
    {/* Links */}
    <div className="hidden md:flex space-x-8 justify-center mt-6 gap-7">
    <Link
      href="/About"
      className=""
    >
      Plant Pots
    </Link>
    <Link
      href="/ListOfProduct"
      className="text-[#2A254B]"
    >
      Ceramics
    </Link>
    <Link
      href="/productLising"
      className="text-[#2A254B]"
    >
      Tables
    </Link>
    <Link
      href="/shooping-basket"
      className="text-[#2A254B]"
    >
      Chairs
    </Link>
    <Link
      href="#"
      className="text-[#2A254B]"
    >
      Crockery
    </Link>
    <Link
      href="#"
      className=""
    >
Tableware
    </Link>
    <Link
      href=""
      className=""
    >
Cutlery
    </Link>
  </div>
</div>

  );
};

export default Navbar;
