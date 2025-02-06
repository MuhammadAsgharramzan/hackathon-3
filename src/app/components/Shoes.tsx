import React from 'react'
import { RiArrowDropLeftLine, RiArrowDropRightLine } from 'react-icons/ri'
import Cards from './Cards'

const ShoesData = [
    {
        id : 1,
        imageSrc : "/shoes/Image1.png",
        title : "Nike Air Max Pulse",
        category : "Women's Shoes",
        price : 13995
    },
    {
        id : 2,
        imageSrc : "/shoes/Image2.png",
        title : "Nike Air Max Pulse",
        category : "Men's Shoes",
        price : 13995
    },
    {
        id : 3,
        imageSrc : "/shoes/Image3.png"  ,
        title : "Nike Air Max 97 SE",
        category : "Men's Shoes",
        price : 16995
    },
    {
        id : 4,
        imageSrc : "/shoes/Image3.png"  ,
        title : "Nike Air Max 97 SE",
        category : "Men's Shoes",
        price : 16995
    }
]

const Shoes = () => {
  return (
    <div className='container mx-auto font-medium text-[15px] leading-6 flex flex-col mt-14 gap-1'>
        {/* Text Div */}
        <div className='flex items-center justify-between  p-1 '>
            <p className='font-medium text-[22px] leading-7'>Best of Air Max</p>
            <div className='flex gap-3 items-center'>
                <p>Shop</p>
                <div className='bg-[#F5F5F5] flex items-center justify-center w-12 h-12 text-5xl  text-[#CCCCCC] rounded-[24px]'><RiArrowDropLeftLine className='hover:bg-gray-600 hover:text-white rounded-[24px] cursor-pointer'/>
                </div>
                <div className='bg-[#E5E5E5] flex items-center justify-center w-12 h-12 text-5xl rounded-[24px]'><RiArrowDropRightLine className='hover:bg-gray-500 hover:text-white rounded-[24px] cursor-pointer'/>
                </div>
            </div>
        </div>
        {/* Cards Div*/}
        <div className='mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2'>
            {ShoesData.map ((item ) => {
                return (
                    <div key={item.id}>
                        <Cards imageSrc={item.imageSrc} title={item.title} category={item.category} price={item.price}/>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Shoes