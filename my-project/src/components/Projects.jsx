import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { projectData } from "../assets/assets";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Projects = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
    responsive: [
      { breakpoint: 10000, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full" data-aos='fade-up'id="Projects">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Completed
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-md mx-auto">
        Crafting Spaces, Building Legacies - Explore Our Portfolio
      </p>

      <div className="relative">
        <Slider {...settings}>
          {projectData.map((project, idx) => (
            <div key={idx} className="px-4">
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-60 object-cover shadow-md rounded-lg px"
              />
              <div className="bg-white p-4 shadow-md text-center mt-3">
                <h2 className="text-lg font-semibold text-gray-800">{project.title}</h2>
                <p className="text-gray-600 text-sm">{project.Price} | {project.location}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
