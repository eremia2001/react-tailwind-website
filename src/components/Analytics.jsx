import React from "react";
import laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto  grid md:grid-cols-2">
        <img src={laptop} className="sm:max-w-[500px] mx-auto my-4" alt="/" />

        <div className="flex flex-col items-start text-left justify-center">
          <p className="text-[#00df91] font-bold uppercase">
            Data Analytics Dashboard
          </p>
          <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            {" "}
            Manage Data Analytics Centrally{" "}
          </h1>
          <p className="font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            asperiores impedit quod explicabo aliquam adipisci ratione totam
            ipsum, expedita quisquam ea assumenda a error delectus hic, ipsam
            debitis soluta odio!
          </p>
          <button className="bg-black w-[200px] rounded text-[#00df91] font-medium  my-6 p-3 mx-auto md:mx-0">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
