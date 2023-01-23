import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="bg-white py-[10rem] px-4 w-full">
      <div className="max-w-[1240px] grid md:grid-cols-3 gap-8 p-4 mx-auto">
        <div className="p-4 my-4 rounded-lg flex flex-col  shadow-xl gap-4 w-full hover:scale-105 duration-300  md:m-0 ">
          <img
            src={Single}
            className="w-20 bg-white  mt-[-3rem] mx-auto"
            alt="/"
          />
          <h1 className="font-bold text-xl">Single User</h1>
          <p className="text-3xl font-bold">$149</p>
          <div className="w-full text-center flex flex-col gap-2 ">
            <p className="border-b mx-8  mt-8">500 GB Sotrage</p>
            <p className="border-b mx-8 ">1 Granted User</p>
            <p className="border-b mx-8 ">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3">
            Start Trial
          </button>
        </div>
        <div className="p-4 bg-gray-100 my-4 rounded-lg flex flex-col  shadow-xl gap-4 w-full hover:scale-105 duration-300  md:m-0 ">
          <img
            src={Double}
            className="w-20 bg-transparent  mt-[-3rem] mx-auto"
            alt="/"
          />
          <h1 className="font-bold text-xl">Single User</h1>
          <p className="text-3xl font-bold">$149</p>
          <div className="w-full text-center flex flex-col gap-2 ">
            <p className="border-b mx-8  mt-8">500 GB Sotrage</p>
            <p className="border-b mx-8 ">1 Granted User</p>
            <p className="border-b mx-8 ">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3">
            Start Trial
          </button>
        </div>
        <div className="p-4 my-4 rounded-lg flex flex-col  shadow-xl gap-4 w-full hover:scale-105 duration-300  md:m-0 ">
          <img
            src={Triple}
            className="w-20 bg-white  mt-[-3rem] mx-auto"
            alt="/"
          />
          <h1 className="font-bold text-xl">Single User</h1>
          <p className="text-3xl font-bold">$149</p>
          <div className="w-full text-center flex flex-col gap-2 ">
            <p className="border-b mx-8  mt-8">500 GB Sotrage</p>
            <p className="border-b mx-8 ">1 Granted User</p>
            <p className="border-b mx-8 ">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
