import React from "react";

const Newsletter = () => {
  return (
    <div className="text-white grid lg:grid-cols-3 w-full py-24 px-4 text-left max-w-[1240px] md:mx-auto md:py-20 lg:py-15">
      <div className="lg:col-span-2">
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
          Want tips & tricks to optimize
        </h1>
        <p className="">Sign up to our newsletter and styp up to date.</p>
      </div>

      <div className=" my-4">
        <div className="flex flex-col sm:flex-row items-center justify-center w-full">
          <input
            className="p-2 rounded-md w-full "
            placeholder="Enter Your Email"
            type={"email"}
          />
          <button className="bg-[#00df91] w-[200px] rounded text-black font-medium  my-6 sm:ml-4 p-3 mx-auto inline">
            Notify me
          </button>
        </div>
        <p>We care about the protection of your data.</p>
        <span className="text-[#00df9a] border-b">Read Our shit .</span>
      </div>
    </div>
  );
};

export default Newsletter;
