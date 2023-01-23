import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-16 px-4 text-gray-300 lg:grid-cols-3 grid mx-auto gap-8 max-w-[1240px]">
      <div>
        <h1 className="text-3xl text-[#00df91] font-bold w-full text-left">
          REACT.
        </h1>
        <p className="py-3 text-start">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
          expedita possimus quaerat molestiae, ex accusamus eligendi dolorum,
        </p>
        <div className="flex justify-between md:first-letter:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>

      <div className="lg:col-span-2 flex justify-between mt-6 lg:ml-20">
        <div>
          <h6 className="text-gray-400 font-medium"> Solutions</h6>
          <ul>
            <li className="py-2 text-sm">Analyics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="text-gray-400 font-medium"> Solutions</h6>
          <ul>
            <li className="py-2 text-sm">Analyics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="text-gray-400 font-medium"> Solutions</h6>
          <ul>
            <li className="py-2 text-sm">Analyics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
