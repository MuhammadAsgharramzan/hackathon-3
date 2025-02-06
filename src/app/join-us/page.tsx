import React from "react";
import Image from "next/image";
import Link from "next/link";

// Images
import Logo from "../pics/login/logo.png";

const Join_Us = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center p-4">
      <div className="w-full max-w-[400px] bg-white p-6 rounded-lg shadow-md border border-gray-300">
        {/* Title Container */}
        <div className="text-center mb-6">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <Image src={Logo} alt="logo" width={300} height={300} />
          </div>
          {/* Title */}
          <h3 className="text-lg font-bold text-black">BECOME A NIKE MEMBER</h3>
          {/* Sub-Title */}
          <p className="text-sm text-gray-600 mt-2">
            Create your Nike Member profile and get first access to the very best
            of Nike products, inspiration, and community.
          </p>
        </div>
        {/* Form Container */}
        <form className="space-y-4">
          {/* Email */}
          <input
            type="text"
            placeholder="Email Address"
            className="w-full p-2 border border-gray-300 rounded-md text-black"
          />
          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded-md text-black"
          />
          {/* First Name */}
          <input
            type="text"
            placeholder="First Name"
            className="w-full p-2 border border-gray-300 rounded-md text-black"
          />
          {/* Last Name */}
          <input
            type="text"
            placeholder="Last Name"
            className="w-full p-2 border border-gray-300 rounded-md text-black"
          />
          {/* Date of Birth */}
          <div>
            <input
              type="date"
              className="w-full p-2 border border-gray-300 rounded-md text-black"
            />
            <p className="text-xs text-gray-500 mt-1">
              Get a Nike Member Reward every year on your Birthday.
            </p>
          </div>
          {/* Country */}
          <div className="relative">
            <select className="w-full p-2 border border-gray-300 rounded-md text-black">
              <option>India</option>
              <option>Pakistan</option>
              <option>USA</option>
            </select>
            {/* <RiArrowDropDownLine className="absolute right-2 top-3 text-xl text-gray-500" /> */}
          </div>
          {/* Gender */}
          <div className="flex gap-4">
            <button className="flex-1 p-2 border border-gray-300 rounded-md text-gray-700 hover:bg-black hover:text-white">
              Male
            </button>
            <button className="flex-1 p-2 border border-gray-300 rounded-md text-gray-700 hover:bg-black hover:text-white">
              Female
            </button>
          </div>
          {/* Checkbox */}
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <p className="text-xs text-gray-600">
              Sign up for emails to get updates from Nike on products, offers, and
              your Member benefits.
            </p>
          </div>
          {/* Terms */}
          <p className="text-xs text-gray-500 text-center">
            By creating an account, you agree to Nike's
            <span className="underline cursor-pointer"> Privacy Policy</span> and
            <span className="underline cursor-pointer"> Terms of Use.</span>
          </p>
          {/* Button */}
          <button className="w-full p-2 bg-black text-white rounded-md hover:bg-gray-800">
            JOIN US
          </button>
        </form>
        {/* Sign In */}
        <p className="text-center text-gray-600 text-sm mt-4">
          Already a Member? <span className="text-black underline cursor-pointer"><Link href="./login">Sign In</Link></span>
        </p>
      </div>
    </div>
  );
};

export default Join_Us;