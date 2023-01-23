import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [navBarShow, setNavBarShow] = useState(false);
  const handleClick = () => setNavBarShow(!navBarShow);

  return (
    <div className="text-white w-100 flex items-center justify-between px-4 max-w-[1240px] mx-auto h-24 ">
      <h1 className="text-3xl text-[#00df91] font-bold w-full text-left">
        REACT
      </h1>
      <ul className="hidden md:flex ">
        <li className="p-4 cursor-pointer">Home</li>
        <li className="p-4 cursor-pointer">Company</li>
        <li className="p-4 cursor-pointer">Resources</li>
        <li className="p-4 cursor-pointer">About</li>
        <li className="p-4 cursor-pointer">Contact</li>
      </ul>
      <div>
        {navBarShow ? (
          <AiOutlineClose
            className="cursor-pointer "
            size={20}
            onClick={handleClick}
          />
        ) : (
          <AiOutlineMenu
            className="cursor-pointer md:hidden block"
            size={20}
            onClick={handleClick}
          />
        )}

        <div
          className={
            navBarShow
              ? "fixed top-0 left-0 w-[60%] border-r border-r-gray-600 h-full bg-[#000300] ease-in-out duration-500"
              : " fixed left-[-100%]"
          }
        >
          <h1 className="text-3xl text-[#00df91] font-bold">REACT</h1>

          <ul className="p-4 uppercase text-start">
            <li className="p-4 border-b border-b-gray-600 ">Home</li>
            <li className="p-4 border-b border-b-gray-600 ">Company</li>
            <li className="p-4 border-b border-b-gray-600 ">Resources</li>
            <li className="p-4 border-b border-b-gray-600 ">About</li>
            <li className="p-4">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
