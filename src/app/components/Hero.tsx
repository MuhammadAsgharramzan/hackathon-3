import React from 'react'
import Image from 'next/image'

// Images

import Image1 from "../pics/hero/Image1.png"

const Hero = () => {
  return (
    <div>
        <div className='container mx-auto bg-[#F5F5F5] flex flex-col items-center justify-evenly p-2 font-medium text-[12px] sm:text-[15px] leading-6'>
            <h2 className='pb-1'>Hello Nike App</h2>
            <p className='text-[9px] sm:text-[11px] font-light '>Download the app to access everything Nike. <span className='font-medium decoration decoration-solid underline undeline-2 cursor-pointer'>Get Your Great</span></p>
        </div>
        <div className='container mx-auto'>
            {/* Image */}
            <Image src={Image1} alt='image'></Image>
            {/* Text and Button */}
            <div className='flex flex-col items-center mt-10 space-y-3 text-center'>
                <p>First Look</p>
                <h2 className='text-[30px] sm:text-[56px] leading-[60px]'>NIKE AIR MAX PULSE</h2>
                <p className='font-normal text-[12px] sm:text-[15px] leading-6 pt-2'>Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse <br />
                <span className='font-normal [12px] sm:text-[15px] leading-6'>
                —designed to push you past your limits and help you go to the max.</span></p>
                <div className='flex text-white pt-2 gap-2 text-[12px] sm:text-[15px]'>
                    <div className='w-[90px] sm:w-[110px] bg-black py-[7.5px]  text-center rounded-[30px] hover:bg-gray-600'>
                        <button>Notify Me</button>
                    </div>
                    <div className='w-[118px] sm:w-[138px] bg-black py-[7.5px]  text-center rounded-[30px] hover:bg-gray-600'>
                        <button>Shop Air Max</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero