import React, { useEffect, useState } from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        {/* Logo Section */}
        <div className="flex items-center md:mr-8">
          <div className="bg-black rounded-full w-10 h-10 flex items-center justify-center mb-1">
            <AiOutlineThunderbolt className="text-white text-4xl md:text-3xl" />
          </div>
          <span className="text-white font-semibold text-xl md:text-3xl mb-2 ml-2">
            Estate
          </span>
        </div>

        {/* Navigation Links */}
        <ul
          className="hidden md:flex gap-8 text-white"
          data-aos="zoom-in"
          data-aos-duration="800"
        >
          <li>
            <a href="#Home" className="cursor-pointer hover:text-gray-200">
              Home
            </a>
          </li>
          <li>
            <a href="#About" className="cursor-pointer hover:text-gray-200">
              About
            </a>
          </li>
          <li>
            <a href="#Projects" className="cursor-pointer hover:text-gray-200">
              Projects
            </a>
          </li>
          <li>
            <a
              href="#Testimonials"
              className="cursor-pointer hover:text-gray-200"
            >
              Testimonials
            </a>
          </li>
        </ul>

        {/* Sign-Up Button */}
        <button className="hidden md:block bg-white px-6 py-2 rounded-full text-black font-semibold">
          Sign Up
        </button>

        {/* Mobile Menu Button */}
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl cursor-pointer hover:text-gray-300"
        >
          {menuOpen ? <IoClose /> : <CiMenuFries />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-60 transparent backdrop-blur-md transition-transform duration-300  ${
          menuOpen ? "translate-x-0 -z-40" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center gap-5 mt-20 text-lg text-white font-medium">
          <li>
            <a
              href="#Header"
              className="px-4 py-2 cursor-pointer hover:text-gray-300"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#About"
              className="px-4 py-2 cursor-pointer hover:text-gray-300"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#Projects"
              className="px-4 py-2 cursor-pointer hover:text-gray-300"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#Testimonials"
              className="px-4 py-2 cursor-pointer hover:text-gray-300"
              onClick={() => setMenuOpen(false)}
            >
              Testimonials
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
