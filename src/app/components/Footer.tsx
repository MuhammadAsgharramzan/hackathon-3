import React from 'react'
import Link from 'next/link';

// React Icon

import { FaLocationDot, FaTwitter } from 'react-icons/fa6';
import { BiLogoFacebook } from 'react-icons/bi';
import { TfiYoutube } from "react-icons/tfi";
import { ImInstagram } from "react-icons/im";


const Footer = () => {
  return (
    <div className='flex flex-col mt-10 bg-black text-[#7E7E7E] leading-6 text-[11px]'>

        {/* Text Section */}

        <div id="1" className='container mx-auto mt-5'>
            <div className='grid grid-cols-1 sm:grid-cols-[3fr,1fr] '>
                
                {/* Text Div */}

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-2 gap-2  '>

                    {/* Store */}

                    <div className='text-white space-y-1 py-1 '>
                        <p className='hover:underline underline-offset-2 hover:cursor-pointer'>FIND A STORE</p>
                        <p className='hover:underline underline-offset-2 hover:cursor-pointer'>Become A Member</p>
                        <p className='hover:underline underline-offset-2 hover:cursor-pointer'>Sign Up for Email</p>
                        <p className='hover:underline underline-offset-2 hover:cursor-pointer'>Send Us Feedback</p>
                        <p className='hover:underline underline-offset-2 hover:cursor-pointer'>Student Discounts</p>
                    </div>

                    {/* Get Help */}

                    <div className='space-y-1 py-1'>
                    <p className='text-white hover:underline underline-offset-2 hover:cursor-pointer'>Get Help</p>
                        <p className='hover:underline underline-offset-2 hover:cursor-pointer'>Order Status</p>
                        <p className='hover:underline underline-offset-2 hover:cursor-pointer'>Delivery</p>
                        <p className=' hover:underline underline-offset-2 hover:cursor-pointer'>Returns</p>
                        <p className='hover:underline underline-offset-2 hover:cursor-pointer'>Payment Options</p>
                        <p className='hover:underline underline-offset-2 hover:cursor-pointer'>Contact Us On Nike.com Inquiries</p>
                        <p className='hover:underline underline-offset-2 hover:cursor-pointer'>Contact Us On All Other Inquiries</p>
                    </div>

                    {/* About Nike */}

                    <div className='space-y-1 py-1'>
                        <p className='text-white hover:underline underline-offset-2 hover:cursor-pointer'>About Nike</p>
                        <p className='hover:underline underline-offset-2 hover:cursor-pointer'>News</p>
                        <p className='hover:underline underline-offset-2 hover:cursor-pointer'>Careers</p>
                        <p className='hover:underline underline-offset-2 hover:cursor-pointer'>Investors</p>
                        <p className='hover:underline underline-offset-2 hover:cursor-pointer'>Sustainability</p>
                    </div>
                </div>

                {/* Social Links Div */}

                <div className='flex justify-center mt-10 sm:mt-0 sm:justify-end space-x-2 text-black text-lg'>
                    {/* Twitter */}
                    <Link href="https://x.com/?lang=en" target='_blank' className='bg-[#7E7E7E] w-[30px] h-[30px] flex items-center justify-center rounded-full hover:bg-blue-200'>
                        <FaTwitter />
                    </Link>
                    {/* Facebook */}
                    <Link href="https://www.facebook.com" target='_blank' className='bg-[#7E7E7E] w-[30px] h-[30px] flex items-center justify-center rounded-full hover:bg-blue-200'>
                        <BiLogoFacebook />
                    </Link>
                    {/* Youtube */}
                    <Link href="https://www.youtube.com" target='_blank' className='bg-[#7E7E7E] w-[30px] h-[30px] flex items-center justify-center rounded-full hover:bg-blue-200'>
                        <TfiYoutube />
                    </Link>
                    {/* Instagram */}
                    <Link href="https://www.instagram.com" target='_blank' className='bg-[#7E7E7E] w-[30px] h-[30px] flex items-center justify-center rounded-full text-base hover:bg-blue-200'>
                        <ImInstagram />
                    </Link>
                    
                </div>
            </div>
        </div>

        {/* Copyright Section */}

        <div id="2" className='container mx-auto mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 leading-3 pt-6 pb-3 '>
            <div className='flex justify-center sm:justify-start gap-6 '>
                <div className='flex gap-2 items-center ml-1 text-white'>
                    <FaLocationDot className='text-white' />
                    <p>India</p>
                </div>
                <p>© 2023 Nike, Inc. All Rights Reserved</p>
            </div>
            <div className='flex justify-center mt-4 sm:justify-end sm:mt-0 pr-2 gap-4 '>
                <Link href={''} className='hover:underline underline-offset-2'>Guides</Link>
                <Link href={''} className='hover:underline underline-offset-2'>Terms of Sale</Link>
                <Link href={''} className='hover:underline underline-offset-2'>Terms of Use</Link>
                <Link href={''} className='hover:underline underline-offset-2'>Nike Privacy Policy</Link>
            </div>
        </div>
    </div>
  )
}

export default Footer