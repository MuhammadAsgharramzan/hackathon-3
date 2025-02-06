"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";


// Images
import Image1 from "../pics/header/Image1.png";

// React icons

import { MdOutlineFavoriteBorder } from "react-icons/md";
import { BsBag } from "react-icons/bs";
import { RiSearchLine } from "react-icons/ri";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#F5F5F5]">
      {/* Navbar */}
      <div className="container mx-auto flex justify-between px-2 py-2">
        {/* Image Section */}
        <div
          id="1"
          className="hover:transfomr hover:scale-125 duration-200 ease-in-out"
        >
          <Image src={Image1} alt="logo1"></Image>
        </div>
        {/* Navigation Section */}
        <div
          id="2"
          className="hidden sm:flex items-center gap-2 font-medium text-[11px]"
        >
          <div className="flex gap-[15px] ">
            <Link href="../products" className="hover:text-gray-700">
              Find a Store
            </Link>
            <span className="w-[2px] h-[14px] bg-black"></span>
          </div>
          <div className="flex gap-[15px]">
            <Link href="/contact" className="hover:text-gray-700">
              Help
            </Link>
            <span className="w-[2px] h-[14px] bg-black"></span>
          </div>
          <div className="flex gap-[15px]">
            <Link href="/join-us" className="hover:text-gray-700">
              Join Us
            </Link>
            <span className="w-[2px] h-[14px] bg-black"></span>
          </div>
          <div>
            {/* Clerk Authentication */}
            <SignedOut>
              <SignInButton mode="modal">
                <button className="hover:text-gray-700">Sign In</button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
       
        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden ">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu (toggle based on state) */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden flex flex-col my-5 font-base`}>
  <Link href="#home" className="px-3 py-2 font-normal text-sm hover:underline underline-offset-4">Find a Store</Link>
  <Link href="#about" className="px-3 py-2 font-normal text-sm hover:underline underline-offset-4">Help</Link>
  <Link href="#services" className="px-3 py-2 font-normal text-sm hover:underline underline-offset-4">Join Us</Link>
  
  <SignedOut>
    <SignInButton mode="modal">
      <button className="px-3 py-2 font-normal text-sm hover:underline underline-offset-4">Sign In</button>
    </SignInButton>
  </SignedOut>
  <SignedIn>
    <UserButton />
  </SignedIn>
</div>
     
      {/* Header */}
      <header className="bg-white">
        <div className="container mx-auto bg-white flex justify-between items-center">
          {/* Logo */}
          <div>
            <Link href="/">
              <Image
                src={"/header/Logo.png"}
                alt="logo"
                width={58}
                height={20}
                className="hover:transfomr hover:scale-110 duration-200 ease-in-out ml-2 w-7 h-3 md:w-[58px] md:h-5"
              ></Image>
            </Link>
          </div>
          {/* Headings */}
          <div className="hidden lg:flex space-x-8 font-medium text-sm leading-6">
            <p className="hover:underline underline-offset-2 cursor-pointer">
              New & Featured
            </p>
            <p className="hover:underline underline-offset-2 cursor-pointer">
              Men
            </p>
            <p className="hover:underline underline-offset-2 cursor-pointer">
              Women
            </p>
            <p className="hover:underline underline-offset-2 cursor-pointer">
              Kids
            </p>
            <p className="hover:underline underline-offset-2 cursor-pointer">
              Sale
            </p>
            <p className="hover:underline underline-offset-2 cursor-pointer">
              SNKRS
            </p>
          </div>
          {/* Searchbar */}
          <div className="flex items-center gap-2 ">
            {/* Input */}
            <div className="flex items-center w-[180px] h-10 space-x-3 bg-[#F5F5F5] rounded-[100px] hover:bg-gray-200">
              <RiSearchLine className="ml-2 cursor-pointer" />
              <input
                type="text"
                placeholder="Search"
                className="w-[84px] h-[18px] bg-[#F5F5F5] "
              />
            </div>
            {/* Icons */}
            <div
              id="3"
              className="flex items-center justify-center py-3 gap-3 "
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-[5px]">
                <MdOutlineFavoriteBorder className="w-7 h-7 text-[10px] hover:text-gray-600" />
              </div>
              <div className="flex items-center justify-center w-9 h-9 rounded-[5px]">
                <Link href="/Cart">
                  <BsBag className="w-8 h-6 hover:text-gray-600" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>

    // <div className="flex flex-col h-[96px] font-medium text-[11px] leading-[14px] ">
    //     {/* w-[1440px] */}
    //     <div id="navbar" className="flex h-9 bg-[#F5F5F5]">
    //         <div id="1" className="w-6 h-6  hover:border-[1px] border-black">
    //             <Image src={Image1} alt="logo1"></Image>
    //         </div>
    //         <div id="2" className="flex pl-2 font-medium text-[11px]">
    //             <div className="flex gap-[15px]">
    //                 <Link href="" >Find a Store</Link>
    //                 <span className="w-[3px] h-[14px] bg-black"></span>
    //             </div>
    //             <div className="flex gap-[15px]">
    //                 <Link href="" >Help</Link>
    //                 <span className="w-[3px] h-[14px] bg-black"></span>
    //             </div>
    //             <div className="flex gap-[15px]">
    //                 <Link href="" >Join Us</Link>
    //                 <span className="w-[3px] h-[14px] bg-black"></span>
    //             </div>
    //             <div className="flex gap-[15px]">
    //                 <Link href="" >Sign In</Link>
    //                 <span className="w-[3px] h-[14px] bg-black"></span>
    //             </div>
    //         </div>
    //     </div>
    //     {/* w-[1440px] */}
    //     {/* <div id="header" className="flex items-center  h-[60px] absolute top-9 bg-[#FFFFFF] ">
    //         <div className="flex w-[760px] h-[60px] absolute top-1 left-[340px] text-[15px] leading-6 ">
    //             <p className="w-[115.81px] h-[17px] absolute top-[17px] left-[160.06px] underline underline-transparent hover:underline hover:underline-offset-2">New & Featured</p>
    //             <p className="w-[31.33px] h-[17px] absolute top-[17px] left-[299.67px] hover:underline-offset-2">Men</p>
    //             <p className="w-[55.4px] h-[17px] absolute top-[17px] left-[354.8px] hover:underline-offset-2">Women</p>
    //             <p className="w-[31.33px] h-[17px] absolute top-[17px] left-[433.64px] hover:underline-offset-2">Kids</p>
    //             <p className="w-[32.23px] h-[17px] absolute top-[17px] left-[488.77px] hover:underline-offset-2">Sale</p>
    //             <p className="w-[55.33px] h-[17px] absolute top-[17px] left-[544.8px] hover:underline-offset-2 font-base">SNKRS</p>
    //         </div>
    //         <div className="flex items-center w-[1440px] h-[60px] ">
    //             <div id="1" className="w-[78-47px] h-[78-47px] absolute left-[38.26px] ">
    //                 <Image src={Image2} alt="logo"></Image>
    //             </div>
    //             <div id="2" className="flex items-center w-[1211px] h-[60px] absolute left-[107px] ">
    //                 <div className="w-[180px] h-10 absolute top-[10px] left-[1011px] ">
    //                     <div className="flex w-[180px] h-10 rounded-[100px] bg-[#F5F5F5] hover:border-[1px] border-black">
    //                         <div className="flex justify-center items-center w-10 h-9 absolute top-[2px] left-[2px] py-[6px] px-2 text-2xl">
    //                             <FiSearch />
    //                         </div>
    //                         <input className="w-[84px] h-[18px] absolute top-[11px] left-[48px] text-[15px] leading-[18.31px] bg-[#F5F5F5] text-[#CCCCCC]" type="text" placeholder="Search" />
    //                     </div>
    //                 </div>
    //             </div>
    //             <div id="3" className="flex items-center justify-center w-[84px] h-[60px] absolute left-[1318px] py-3 gap-3 ">
    //                 <div className="flex items-center justify-center w-9 h-9 rounded-[5px] hover:border-[1px] border-black">
    //                 <MdOutlineFavoriteBorder className="w-9 h-9 text-[10px]"/>
    //                 </div>
    //                 <div className="flex items-center justify-center w-9 h-9 rounded-[5px] hover:border-[1px] border-black">
    //                 <BsBag className="w-9 h-7 text-black" />
    //                 </div>
    //             </div>
    //         </div>
    //     </div> */}
    // </div>
  );
}
