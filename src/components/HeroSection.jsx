import React from "react";
import Typed from "react-typed";

const HeroSection = () => {
  return (
    <div className="text-white flex flex-col w-full mx-auto  h-screen max-w-[800px] justify-center mt-[-96px] items-center   ">
      <p className=" font-bold text-1xl p-2 uppercase text-[#00df91]">
        Growing with Data Analytics
      </p>
      <h1 className="font-bold md:text-7xl sm:text-6xl  text-4xl md:py-6">
        Grow with data.
      </h1>
      <div className="flex justify-center py-4">
        <p className="md:text-5xl sm:text-4xl text-xl font-bold">
          Fast,flexbile financing for{" "}
        </p>
        <Typed
          className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 items-center text-gray-500"
          strings={["BTB", "BTC", "SASS"]}
          typeSpeed={120}
          backSpeed={140}
          loop
        />
      </div>
      <p className="md:text-2xl text-xl font-bold text-gray-500 ">
        Monitor your data analytics to increase revenue for BTB, BTC & SASS
        platforms
      </p>
      <button className="bg-[#00df91] w-[200px] rounded text-black font-medium  my-6 p-3">
        Get Started
      </button>
    </div>
  );
};

export default HeroSection;
