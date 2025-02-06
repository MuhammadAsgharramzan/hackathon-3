import React from "react";
import Image from "next/image";

// Images
import Logo from "../pics/login/logo.png";
import Link from "next/link";

const Login = () => {
  return (
    <div className="flex items-center mt-10 justify-center min-h-screen px-4">
      <div className="w-full max-w-sm md:max-w-md lg:w-[380px] h-auto md:h-[489px] p-6 md:p-8 bg-white border border-transparent hover:border-black rounded-md shadow-lg">
        {/* Title */}
        <div className="text-center">
          {/* Logo */}
          <div className="flex justify-center">
            <Image src={Logo} alt="logo" />
          </div>

          {/* Title */}
          <h3 className="mt-6 font-bold text-[18px] leading-[26px]">
            YOUR ACCOUNT FOR EVERYTHING NIKE
          </h3>
        </div>

        {/* Form */}
        <form className="mt-6 space-y-4">
          {/* Email */}
          <input
            type="text"
            placeholder="Email Address"
            className="w-full px-4 py-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-gray-400"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-gray-400"
          />

          {/* Checkbox */}
          <div className="flex items-center">
            <input type="checkbox" className="w-4 h-4" />
            <p className="ml-2 text-sm text-gray-500">Keep me signed in</p>
          </div>

          {/* Terms */}
          <p className="text-xs text-gray-500 text-center">
            By logging in, you agree to Nike's Privacy Policy and
            <span className="underline cursor-pointer"> Terms of Use.</span>
          </p>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-2 text-white bg-black rounded-md hover:bg-gray-700"
          >
            SIGN IN
          </button>

          {/* Join Us */}
          <p className="text-center text-sm text-gray-500">
            Not a Member?
            <span className="text-black underline cursor-pointer">
              <Link href="./join-us"> Join Us.</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;