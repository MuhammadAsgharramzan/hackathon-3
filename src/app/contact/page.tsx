import React from "react";
import Image from "next/image";

// Icons

import { CiSearch } from "react-icons/ci";

// Images

import Frame1 from "../pics/contact/Frame1.png";
import Frame2 from "../pics/contact/Frame2.png";
import Frame3 from "../pics/contact/Frame3.png";
import Frame4 from "../pics/contact/Frame4.png";
import Frame5 from "../pics/contact/Frame5.png";

const contact = () => {
  return (
    <div className="w-[1428px] h-[1230px] absolute top-[144px] left-[6px]  text-[16px] font-normal leading-[28px] ">
      {/* Search Help */}

      <div className="flex flex-col items-center w-[1428px] h-[132px] ">
        <h2 className="text-[32px] leading-[36px]">GET HELP</h2>

        {/* Input */}

        <div className="flex items-center justify-between px-[10px] w-[457px] h-[56px] top-[56px] absolute rounded-[8px] border-[1px] border-black">
          <input
            type="text"
            placeholder="What can we help you with?"
            className="w-[199px] h-[17px] text-[#757575]"
          />

          {/* Search Icon */}

          <CiSearch className="text-black text-2xl hover:cursor-pointer" />
        </div>
      </div>

      {/* Main Div */}

      <div className="flex items-center w-[1308px] h-[1098px] absolute top-[132px] left-[59px]">
        {/* Content */}

        <div className="flex flex-col items-start justify-between w-[939px] h-[1042px]">
          <h3 className="font-medium text-[28px] leading-[32px]">
            WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
          </h3>

          <div className="flex flex-col items-start justify-between w-[923px] h-[958px]">
            <Image src={Frame5} alt=""></Image>
          </div>
        </div>

        {/* Contact */}

        <div className="w-[313px] h-[1042px] absolute left-[939px] ">
          <h2 className="absolute left-[90px] font-medium text-[28px] leading-[32px]">
            CONTACT US
          </h2>

          <div className="flex flex-col items-center justify-start w-[265px] h-[836px] absolute top-[52px] left-[48px] gap-4">
            <Image src={Frame1} alt=""></Image>

            <Image src={Frame2} alt=""></Image>

            <Image src={Frame3} alt=""></Image>

            <Image src={Frame4} alt=""></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;