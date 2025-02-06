import React from "react";
import Image from "next/image";
import Link from "next/link";

// Icons
import { IoCartOutline } from "react-icons/io5";

// Images
import Image1 from "../pics/details/Image1.png";

const P_Details = () => {
  return (
    <div className="mt-10 md:mt-20 container mx-auto flex flex-col lg:flex-row items-center justify-center w-full lg:w-[1440px] min-h-screen font-normal text-[15px] leading-[28px] p-4 lg:p-0">
      <div className="flex flex-col lg:flex-row justify-between w-full lg:w-[1200px]">
        {/* Image */}
        <div className="group w-full lg:w-[653px] h-auto lg:h-[653px] flex justify-center">
          <Image
            src={Image1}
            alt="Shoes"
            className="rounded-lg transition-transform duration-200 group-hover:scale-105"
          />
        </div>

        {/* Information */}
        <div className="w-full lg:w-[376px] h-auto lg:h-[1041px] mt-6 lg:mt-0 text-center lg:text-left">
          <h3 className="text-[28px] lg:text-[48px] font-medium leading-[32px] lg:leading-[48px]">
            Nike Air Force 1 PLT.AF.ORM
          </h3>

          <div className="mt-4 lg:mt-[24px]">
            <p className="text-[14px] lg:text-[15px]">
              Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside out"-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials, and aged midsole aesthetic give this release an artisan finish.
            </p>
            <p className="mt-4 text-[24px] lg:text-[36px] font-medium">
              ₹ 8 695.00
            </p>
          </div>

          {/* Button */}
          <div className="mt-6 flex justify-center lg:justify-start">
            <div className="hover:bg-gray-600 flex items-center gap-2 hover:cursor-pointer px-6 py-3 rounded-full bg-black text-white text-[14px] lg:text-[15px]">
              <IoCartOutline className="text-lg lg:text-2xl text-white" />
              <button>
                <Link href="../cart">Add to Cart</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default P_Details;