import React from "react";
import Image from "next/image";
import Link from "next/link";
import icon from "../../../public/images/Side Actions.png"; // Replace with your icon path

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 font-myfont text-[#2A254B]">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold  dark:text-white">
            Avion
          </span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex space-x-8">
          <Link
            href="#"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all"
          >
            Plant Pots
          </Link>
          <Link
            href="#"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all"
          >
            Ceramics
          </Link>
          <Link
            href="#"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all"
          >
            Tables
          </Link>
          <Link
            href="#"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all"
          >
            Chairs
          </Link>
          <Link
            href="#"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all"
          >
            Crockery
          </Link>
        </div>

        {/* Icon */}
        <div className="flex items-center space-x-4">
          <Image src={icon} alt="Icon" width={80} height={40} />
        </div>

        {/* Mobile Menu Button */}
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
  );
};

export default Navbar;
