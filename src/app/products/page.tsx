import React from "react";

// Icons

import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { allProductsArray } from "../components/productsArray";
import AllProductCards from "../cards/AllProductCard";
import { VscSettings } from "react-icons/vsc";

export default function Products() {
  return (
    <div className="container mx-auto mt-11 ">
      {/* Filter Div */}
      <div className="flex justify-between items-center mb-5 ">
        <h3 className="text-[24px] leading-[31px]">New (500)</h3>
        {/* Filter */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 cursor-pointer">
            <p className="text-[16px] font-normal leading-[28px]">
              Hide Filters
            </p>
            <VscSettings className="text-xl hover:text-gray-500" />
          </div>
          <div className="flex gap-2 cursor-pointer">
            <p className="text-[16px] font-normal leading-[28px]">Sort By</p>
            <RiArrowDropDownLine className="text-3xl hover:text-gray-500" />
          </div>
        </div>
      </div>

      {/* Items Div */}
      <div className="flex gap-4 ">
        {/* Slidbar */}
        <div className="hidden md:flex min-w-[260px] flex-row-reverse justify-between ">
          <div className="w-[7px] h-[329px] cursor-pointer bg-black opacity-50 rounded-md"></div>
          <div className="flex flex-col w-full text-[15px] font-medium ">
            <div className="flex flex-col items-start mb-16 gap-2 ">
              <p className="hover:underline underline-offset-2 hover:cursor-pointer">
                Shoes
              </p>
              <p className="hover:underline underline-offset-2 hover:cursor-pointer">
                Sport Bras
              </p>
              <p className="hover:underline underline-offset-2 hover:cursor-pointer">
                Tops & T-Shirts
              </p>
              <p className="hover:underline underline-offset-2 hover:cursor-pointer">
                Hoodies and Sweatshirts
              </p>
              <p className="hover:underline underline-offset-2 hover:cursor-pointer">
                Jackets
              </p>
              <p className="hover:underline underline-offset-2 hover:cursor-pointer">
                Trousers & Tights
              </p>
              <p className="hover:underline underline-offset-2 hover:cursor-pointer">
                Shorts
              </p>
              <p className="hover:underline underline-offset-2 hover:cursor-pointer">
                Tracksuits
              </p>
              <p className="hover:underline underline-offset-2 hover:cursor-pointer">
                Jumpsuits & Rompers
              </p>
              <p className="hover:underline underline-offset-2 hover:cursor-pointer">
                Skirts & Dresses
              </p>
              <p className="hover:underline underline-offset-2 hover:cursor-pointer">
                Socks
              </p>
              <p className="hover:underline underline-offset-2 hover:cursor-pointer">
                Accessories & Equipment
              </p>
            </div>
            <hr />
            <div className="flex flex-col gap-3 my-3">
              <div className="flex justify-between items-center">
                <h2 className="text-lg">Gender</h2>
                <RiArrowDropUpLine className="text-4xl" />
              </div>
              <div className="flex flex-col gap-1 items-start">
                <label htmlFor="" className="flex items-center gap-2 text-md">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Men</span>
                </label>

                <label htmlFor="" className="flex items-center gap-2 text-md">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Women</span>
                </label>

                <label htmlFor="" className="flex items-center gap-2 text-md">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Unisex</span>
                </label>
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <h2 className="text-lg">Kids</h2>
                <RiArrowDropUpLine className="text-4xl" />
              </div>
              <div className="flex flex-col gap-1 items-start">
                <label htmlFor="" className="flex items-center gap-2 text-md">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Boys</span>
                </label>

                <label htmlFor="" className="flex items-center gap-2 text-md">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Girls</span>
                </label>
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <h2 className="text-lg">Shop by Price</h2>
                <RiArrowDropUpLine className="text-4xl" />
              </div>
              <div className="flex flex-col gap-1 items-start">
                <label htmlFor="" className="flex items-center gap-2 text-md">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Under ₹ 2 500.00</span>
                </label>
                <label htmlFor="" className="flex items-center gap-2 text-md">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>₹ 2 501.00 - ₹ 7 500.00</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* Products */}
        <div className=" max-w-[1092px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {allProductsArray.map((item, key) => (
            <div key={item.id}>
              <AllProductCards
                imageSrc={item.imageSrc}
                title={item.title}
                category={item.category}
                color={item.color}
                price={item.price}
              />
            </div>
          ))}
          <div className="hidden lg:flex flex-col min-w-[996px] items-start mt-28 gap-3">
             <h1 className="text-[19px] font-medium">Related Catergories</h1>
            <div className="flex flex-col gap-2 text-[12px] font-normal">
              <div className="flex gap-1">
                <button className="px-1 py-2 rounded-xl border border-gray-300 ">Best Selling Products</button>
                <button className=" py-2 border border-gray-300  rounded-xl w-[155px] h-[34px]">Best Shoes</button>
                <button className="px-1 py-2 border border-gray-300  rounded-xl w-[155px] h-[34px]">New Basketball Shoes</button>
                <button className="px-1 py-2 border border-gray-300  rounded-xl w-[155px] h-[34px]">New Football Shoes</button>
                <button className="px-1 py-2 border border-gray-300  rounded-xl w-[155px] h-[34px]">New Men's Shoes</button>
                <button className="px-1 py-2 border border-gray-300  rounded-xl w-[155px] h-[34px]">New Running Shoes</button>
                <button className="px-1 py-2 border border-gray-300  rounded-xl w-[155px] h-[34px]">Best Men's Shoes</button>
              </div>
              <div className="flex gap-1">
                <button className="px-1 py-2 border border-gray-300  rounded-xl w-[155px] h-[34px]">New Jordan Shoes</button>
                <button className="px-1 py-2 border border-gray-300  rounded-xl w-[155px] h-[34px]">Best Women's Shoes</button>
                <button className="px-1 py-2 border border-gray-300  rounded-xl w-[155px] h-[34px]">Best Training & Gym</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}