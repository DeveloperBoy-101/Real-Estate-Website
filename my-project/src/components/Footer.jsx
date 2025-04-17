import React from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <a href="#Header">
        <button
          className=" text-white justify-center  bg-gray-900 w-[100%] 
   h-10 flex items-center relative bottom-12 hover:bg-gray-800 hover:text-gray-200"
          id="Home"
        >
          Go To Home
        </button>
      </a>
      <div className="container mx-auto px-6 md:px-20 lg:px-32">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center md:text-left">
          {/* Brand Section */}
          <div>
            <div className="bg-black rounded-full w-12 h-12 flex items-center justify-center mb-3 mx-auto md:mx-0">
              <AiOutlineThunderbolt className="text-yellow-500 text-3xl" />
            </div>
            <span>Estate</span>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
              natus, repellat eius tenetur nobis!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Contact</h2>
            <p className="text-gray-400 text-sm">📍 123 Main Street, City</p>
            <p className="text-gray-400 text-sm">📧 info@example.com</p>
            <p className="text-gray-400 text-sm">📞 +123 456 7890</p>
          </div>

          {/* Email Subscription */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Stay Updated</h2>
            <p className="text-gray-400 text-sm mb-4">
              Enter your email to contact us
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full sm:w-auto px-4 py-3 text-black rounded-lg focus:outline-none"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-3 rounded-lg">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <hr className="border-t-1 border-gray-500  mt-12" />
        {/* Bottom Section */}
        <div className="text-center text-gray-500 text-sm mt-10">
          © 2025 Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
