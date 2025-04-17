import React from "react";
import { testimonialData } from "../assets/assets"; // Apni path sahi check kar lena

const Testimonial = () => {
  return (
    <div className="max-w-7xl mx-auto py-20 px-4 sm:px-8 md:px-12 lg:px-16 text-center" id="Testimonials" data-aos='flip-up' duration='3000'>
      <h1 className="text-2xl sm:text-4xl font-bold">
        Customer{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Testimonials
        </span>
      </h1>
      <p className="text-gray-500 mb-12 max-w-md mx-auto">
        Real Stories From Those Who Found Home With Us
      </p>

      {/* Testimonials Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {testimonialData.map((testimonial, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img 
              src={testimonial.img} 
              alt={testimonial.alt} 
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold text-gray-800 text-le">{testimonial.name}</h3>
            <p className="text-gray-600 text-sm">{testimonial.title}</p>
            <p className="text-gray-700 text-left mt-3">{testimonial.text}</p>
            <p className="text-yellow-500 text-left mt-2">{"★".repeat(testimonial.rating)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
