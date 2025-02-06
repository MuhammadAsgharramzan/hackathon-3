import Image from "next/image";

const AllProductCards = ({
  imageSrc,
  title,
  category,
  color,
  price,
}: {
  imageSrc: any;
  title: string;
  category: string;
  color: string;
  price: number;
}) => {
  return (
    <div className="flex flex-col items-center md:items-start pb-5 text-[15px] overflow-hidden shadow-sm leading-6 gap-3 font-normal group ">
      <Image
        src={imageSrc}
        alt="logo"
        width={348}
        height={348}
        className="transition-transform duration-300 group-hover:scale-105 object-cover "
      ></Image>
      <div className="flex flex-col items-start gap-1">
        <p className="text-[#9E3500] font-medium text-[15px] leading-7">
          Just In
        </p>
        <h3 className="font-medium">{title}</h3>
        <p className="text-[#757575] font-normal">{category}</p>
        <p className="text-[#757575] font-normal">{color}</p>
        <p className="leading-7">MRP : ₹ {price}</p>
      </div>
    </div>
  );
};

export default AllProductCards;