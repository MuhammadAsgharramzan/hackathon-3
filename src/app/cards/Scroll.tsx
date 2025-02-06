import React from "react";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";

interface Scroll {
  scrollName: string;
}

const Scroll = ({ scrollName }: Scroll) => {
  return (
    <div className="flex items-center justify-between  p-1 ">
      <p className="font-medium text-[22px] leading-7">{scrollName}</p>
      <div className="flex gap-3 items-center">
        <p>Shop</p>
        <div className="bg-[#F5F5F5] flex items-center justify-center w-12 h-12 text-5xl  text-[#CCCCCC] rounded-[24px]">
          <RiArrowDropLeftLine className="hover:bg-gray-600 hover:text-white rounded-[24px] cursor-pointer" />
        </div>
        <div className="bg-[#E5E5E5] flex items-center justify-center w-12 h-12 text-5xl rounded-[24px]">
          <RiArrowDropRightLine className="hover:bg-gray-500 hover:text-white rounded-[24px] cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Scroll;
