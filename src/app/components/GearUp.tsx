import React from "react";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import ShoesCard from "./Cards";

const gearUpArray = [
  {
    id: 1,
    imageSrc: "/gearup/Image1.png",
    title: "Nike Air Max Pulse",
    category: "Women's Shoes",
    price: 13995,
    width: 300,
    height: 300,
  },
  {
    id: 2,
    imageSrc: "/gearup/Image2.png",
    title: "Nike Air Max Pulse",
    category: "Men's Shoes",
    price: 13995,
    width: 300,
    height: 300,
  },
  {
    id: 3,
    imageSrc: "/gearup/Image3.png",
    title: "Nike Air Max 97 SE",
    category: "Men's Shoes",
    price: 16995,
    width: 300,
    height: 300,
  },
  {
    id: 4,
    imageSrc: "/gearup/Image4.png",
    title: "Nike Air Max 97 SE",
    category: "Men's Shoes",
    price: 16995,
    width: 300,
    height: 300,
  },
];

export default function GearUp() {
  return (
    <div className="container mx-auto mt-20 flex flex-col gap-4 text-black ">
      {/* Text */}
      <p className="text-center md:text-start text-[23px] leading-7 font-medium">
        Gear Up
      </p>
      {/* Products */}
      <div className="grid grid-col-1 md:grid-cols-2 gap-1 ">
        <div id="frame1" className="flex flex-col flex-wrap items-end gap-2 ">
          {/* {Scroll} */}
          <div className="flex gap-3 items-center mr-10">
            <p>Shop Men's</p>
            <div className="bg-[#F5F5F5] flex items-center justify-center w-12 h-12 text-5xl  text-[#CCCCCC] rounded-[24px]">
              <RiArrowDropLeftLine className="hover:bg-gray-600 hover:text-white rounded-[24px] cursor-pointer" />
            </div>
            <div className="bg-[#E5E5E5] flex items-center justify-center w-12 h-12 text-5xl rounded-[24px]">
              <RiArrowDropRightLine className="hover:bg-gray-500 hover:text-white rounded-[24px] cursor-pointer" />
            </div>
          </div>
          {/* Dressing */}
          <div className="grid grid-col-1 items-center sm:grid-cols-2 ml-10 mb-10">
            {gearUpArray.slice(0, 2).map((item, key) => (
              <div key={item.id}>
                <ShoesCard
                  imageSrc={item.imageSrc}
                  title={item.title}
                  category={item.category}
                  price={item.price}
                  width={item.width}
                  height={item.height}
                />
              </div>
            ))}
          </div>
        </div>
        <div id="frame2 " className="flex flex-col items-end gap-2">
          {/* {Scroll} */}
          <div className="flex gap-3 items-center mr-10">
            <p>Shop Womes's</p>
            <div className="bg-[#F5F5F5] flex items-center justify-center w-12 h-12 text-5xl  text-[#CCCCCC] rounded-[24px]">
              <RiArrowDropLeftLine className="hover:bg-gray-600 hover:text-white rounded-[24px] cursor-pointer" />
            </div>
            <div className="bg-[#E5E5E5] flex items-center justify-center w-12 h-12 text-5xl rounded-[24px]">
              <RiArrowDropRightLine className="hover:bg-gray-500 hover:text-white rounded-[24px] cursor-pointer" />
            </div>
          </div>
          {/* Dressing */}
          <div className="flex ml-10 mb-10">
            {gearUpArray.slice(2, 5).map((item, key) => (
              <div key={item.id} className="flex justify-center">
                <ShoesCard
                  imageSrc={item.imageSrc}
                  title={item.title}
                  category={item.category}
                  price={item.price}
                  width={item.width}
                  height={item.height}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
