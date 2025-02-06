import React from "react";
import Image from "next/image";

// Images

import Image1 from "../pics/featured/Image1.png";

export default function Featured() {
  return (
    <div className="text-center md:text-left mt-16 container mx-auto">
        <p className="mb-8 text-[23px] leading-7">Featured</p>
        <div className="flex flex-col items-center">
            <Image src={Image1} alt="Image1" className="cursor-pointer"></Image>
            <div className="flex flex-col justify-between items-center mt-12 gap-5">
                <p className="text-4xl md:text-[54px] leading-[60px] text-center">
                    STEP INTO WHAT FEELS GOOD
                </p>
                <p className=" font-normal text-[15px] ">
                    Cause everyone should know the feeling of running in that perfect
                    pair.
                </p>
                <div className="px-6 py-1.5 cursor-pointer rounded-[30px]  bg-[#111111] hover:bg-gray-700">
                    <p className="text-center text-[15px] text-[#FFFFFF]">
                    Find Your Shoe
                    </p>
                </div>
            </div>
      </div>
    </div>
  );
}

