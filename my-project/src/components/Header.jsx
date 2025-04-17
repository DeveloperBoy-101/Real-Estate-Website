import React, { useEffect } from "react";
import Navbar from "./Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Header = () => {
  return (
    <div
      className="relative min-h-screen flex items-center w-full overflow-hidden"
      id="Header"
      style={{
        backgroundImage: "url('/l.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.9,
      }}
    >
      {/* Dark Overlay for better visibility */}
      <div className="absolute inset-0 bg-black/30"></div>

      <Navbar />

      {/* Content */}
      <div className="relative text-center mx-auto text-gray-200 z-2 px-6 mt-10">
        <h2
          className="text-5xl sm:text-6xl md:text-[72px] font-semibold"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          Explore homes that
        </h2>
        <h2
          className="text-5xl sm:text-6xl md:text-[72px] font-semibold"
          data-aos-duration="800"
          data-aos="fade-up"
        >
          fit your dreams
        </h2>
        <div
          className="space-x-6 mt-24"
          data-aos-duration="800"
          data-aos="fade-up"
        >
          <a
            href="#Projects"
            className="border border-white px-8 py-3 rounded transition duration-200 group hover:bg-white hover:text-black"
          >
            Projects
          </a>

          <a href="#Contact Us" className="bg-blue-500 px-8 py-3 rounded">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
