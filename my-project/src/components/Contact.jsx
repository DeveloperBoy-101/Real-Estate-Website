import React from "react";

const Contact = () => {
  return (
    <div id="Contact Us" className="py-20 px-6 lg:px-32 " data-aos='flip-left'>
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-2xl sm:text-4xl font-bold" >
          Contact{" "}
          <span className="underline underline-offset-4 decoration-1 font-light">
            With Us
          </span>
        </h1>
        <p className="text-gray-500 max-w-lg mx-auto mt-3">
          Ready to make a Move? Let's Build Your Future Together.
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto transparent  p-8 rounded-lg" >
        <form>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name Field */}
            <div>
              <label className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black-400"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black-400"
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="mt-6">
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              rows="8"
              placeholder="Type your message..."
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:black-blue-400"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button className="bg-blue-600 text-white py-2 px-10 rounded-md hover:bg-blue-700 transition">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
