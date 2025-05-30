import React from "react";

const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Our Brand
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Passionate About Properties, Dedicated to Your Vision
      </p>
      <div
        className="flex flex-col md:flex-row items-center md:gap-20"
        data-aos="fade-right"
      >
        <img
          src="/Banner.png"
          alt="Brand Banner"
          className="w-full sm:w-1/2 max-w-lg "
        />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Years of Excellence</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">500+</p>
              <p>Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">200+</p>
              <p>Mn. Sq. Ft. Deleivered</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">50+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>
          <p className="my-10 max-w-lg ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
            magnam optio nulla! Similique dolor deserunt voluptatem non. Laborum
            veritatis sequi aspernatur ex tempore dicta sit est, modi cum
            corrupti molestiae.
          </p>
          <button
            className="bg-blue-600 text-white py-2 px-2 rounded 
          hover:bg-blue-600 focus:bg-blue-500 active:bg-blue-700"
          >
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
