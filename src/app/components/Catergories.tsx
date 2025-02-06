import React from "react";
import {CategoriesCard} from "../cards/CatergoriesCard";

const CatergoryArray = [
    {
        id : 1,
        h3 : "Icons",
        p1 : "Air Force 1",
        p2 : "Huarache",
        p3 : "Air Max 90",
        p4 : "Air Max 95"
    },
    {
        id : 2,
        h3 : "Shoes",
        p1 : "All Shoes",
        p2 : "Custom Shoes",
        p3 : "Jordan Shoes",
        p4 : "Ruuning Shoes"
    },
    {
        id : 3,
        h3 : "Clothing",
        p1 : "All Clothing",
        p2 : "Modest Wear",
        p3 : "Hoodies & Pullovers",
        p4 : "Shirts & Tops" 
    },
    {
        id : 4,
        h3 : "Kids",
        p1 : "Infant & Toddler Shoes",
        p2 : "Kids Shoes",
        p3 : "Kids Jordan Shoes",
        p4 : "Kids Basketball Shoes"
    }
]

const Category = () => {
  return (
    <div className="container mx-auto max-w-[880px] grid justify-items-start px-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 sm:justify-items-center gap-5 mt-16">
        {CatergoryArray.map ((item, key) => (
            <div key={item.id}>
                <CategoriesCard h3={item.h3} p1={item.p1} p2={item.p2} p3={item.p3} p4={item.p4}/>
            </div>
        ))}
    </div>
  );
};

export default Category;

