import React from "react";

export const CategoriesCard = ({
  h3,
  p1,
  p2,
  p3,
  p4,
}: {
  h3: string;
  p1: string;
  p2: string;
  p3: string;
  p4: string;
}) => {
  return (
    <div className="text-black font-medium leading-6 space-y-3 justify-between  text-[15px]">
      <h3 className="hover:underline underline-offset-2 hover:cursor-pointer">{h3}</h3>
      <p className="text-[#757575] hover:underline underline-offset-2 hover:cursor-pointer">{p1}</p>
      <p className="text-[#757575] hover:underline underline-offset-2 hover:cursor-pointer">{p2}</p>
      <p className="text-[#757575] hover:underline underline-offset-2 hover:cursor-pointer">{p3}</p>
      <p className="text-[#757575] hover:underline underline-offset-2 hover:cursor-pointer">{p4}</p>
    </div>
  );
};