import React from "react";
import "../../HeroSection.css"; // Import the CSS file for styling

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-[#ffe2e4]">
      <div className=" text-center md:text-left">
        <h1
          className="text-6xl font-bold text-white mb-2 lg:ml-20"
          style={{
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)", // Custom shadow
          }}
        >
          YOUR ONLINE SHOP
        </h1>
        <p
          className="text-2xl text-white mb-4 lg:ml-20"
          style={{
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)", // Custom shadow
          }}
        >
          24/7 Shop and Deliver anytime!
        </p>
        <hr className="border-t-2 border-red-500 w-1/2 mx-auto md:mx-0 lg:ml-20 mt-5" />
      </div>
      <div className="mt-6 md:mt-0 ">
        <img
          src="https://img.freepik.com/free-vector/christmas-shopping-scene-wearing-masks_52683-50221.jpg"
          alt="Shopping Illustration"
          className="w-100 h-64 md:w-[500px] md:h-80 object-contain"
        />
      </div>
    </div>
  );
};

export default HeroSection;
