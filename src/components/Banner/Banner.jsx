import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="bg-[#9538E2] h-[650px]  rounded-b-xl">
        <div className="hero-content text-neutral-content text-center ">
          <div className="">
            <h1 className="mb-5 text-6xl leading-normal font-[700] mt-20">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories.
            </h1>
            <p className="text-base font-400 w-3/4 mt-5 mx-auto mb-8">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <Link to="/">
              <button className="bg-white px-8 py-4 text-xl rounded-3xl text-[#9538E2]">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-[500px] w-3/4 -mt-28 mx-auto p-6 bg-transparent border-2 rounded-3xl">
        <img
          className="w-full h-full"
          src="https://res.cloudinary.com/dn9bladxx/image/upload/v1732988827/Rectangle_1_3_oribw5.png"
          alt=""
        />
      </div>
    </>
  );
};

export default Banner;
