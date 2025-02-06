// Components

import Hero from "./components/Hero";
import Shoes from "./components/Shoes";
import Featured from "./components/Featured";
import GearUp from "./components/GearUp";
import Flight from "./components/Flight";
import Category from "./components/Catergories";
import Essential from "./components/Essentials";
import { Inter } from "next/font/google";
import ProductCards from "./fetchdata/page";

const inter = Inter(
  { subsets: ["latin"] }
);

// Responsive Project

export default function Home() {
  return (
    <div className={`font-medium ${inter.className}`}>
      <Hero />

      {/* <Shoes /> */}
      <ProductCards/>

      <Featured />

      <GearUp />

      <Flight />

      <Essential />

      <Category />
    </div>
  );
}
