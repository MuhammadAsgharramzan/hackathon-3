import React from "react";
import Image from "next/image";

interface CardTypes {
  imageSrc: string;
  title: string;
  category: string;
  price: number;
  width?: number; 
  height?: number;
}

const ShoesCard: React.FC<CardTypes> = ({
  imageSrc,
  title,
  category,
  price,
  width = 441,
  height = 441,
}) => {
  return (
    <div className="p-1 cursor-pointer group">
      <Image
        src={imageSrc}
        alt="Shoes1"
        width={width}
        height={height}
        className="flex items-center rounded-md object-cover transform scale-100 group-hover:scale-110 transition duration-300 ease-in-out "
      />
      <div className="flex flex-col items-center md:flex md:flex-row md:justify-between mt-2">
        <div className="gap-1 flex flex-col items-center md:items-start ">
          <h3>{title}</h3>
          <p className="text-[#757575] font-normal">{category}</p>
        </div>
        <p>₹ {price}</p>
      </div>
    </div>
  );
};

export default ShoesCard;

