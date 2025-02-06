import React from "react";
import Image from "next/image";

const Essential = () => {
  return (
    <div className="container mx-auto flex flex-col gap-3 mt-10 items-center sm:items-start">
      <p className="text-[23px]">The Essentials</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 overflow-hidden ">
        <div id="1" className="relative cursor-pointer transform scale-100 hover:scale-95 transition duration-300 ease-in-out ">
          <Image
            src={"/essential/Image2.png"}
            alt="Image"
            width={440}
            height={540}
          ></Image>
          <button className="absolute top-[452px] left-12 px-5 py-2 bg-[#FFFFFF] rounded-[30px] hover:bg-black hover:text-white">
            Mens
          </button>
        </div>
        <div id="2" className="relative cursor-pointer transform scale-100 hover:scale-95 transition duration-300 ease-in-out ">
          <Image
            src={"/essential/Image3.png"}
            alt="Image"
            width={440}
            height={540}
          ></Image>
          <button className="absolute top-[452px] left-12 px-5 py-2 bg-[#FFFFFF] rounded-[30px] hover:bg-black hover:text-white">
            Mens
          </button>
        </div>
        <div id="3" className="relative cursor-pointer transform scale-100 hover:scale-95 transition duration-300 ease-in-out">
          <Image
            src={"/essential/Image4.png"}
            alt="Image"
            width={440}
            height={540}
          ></Image>
          <button className="absolute top-[452px] left-12 px-5 py-2 bg-[#FFFFFF] rounded-[30px] hover:bg-black hover:text-white">
            Mens
          </button>
        </div>
      </div>
    </div>
  );
};

export default Essential;
