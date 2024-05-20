import Image from "next/image";
import img from "../../../../public/Img/Frame 51.png";
import React from "react";

const SectionSiven = () => {
    return (
        <>
            <div className='bg-[#F9F9F7]'>
                <div className='flex justify-center items-center p-20 relative'>
                    <Image className="" src={img} alt=""/>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                        <div className='text-[#D62923] font-Inter text-xl font-medium my-4'>Our Subscribe</div>
                        <div className='text-[#333333] font-Inter font-semibold text-4xl my-4 '>Subscribe To Get The Latest Promotion from Sana</div>
                        <div className='text-[#7C7474] font-Inter font-medium text-base my-4 '>
                            We recommend you to subscribe to our promo program, drop your email below to get daily updates about us
                        </div>
                        <div>
                            <form className="max-w-md mx-auto my-4 ">
                                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                        </svg>
                                    </div>
                                    <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-[#8897AD] rounded-lg bg-gray-50 focus:border-[#8897AD]" placeholder="Search ..." required/>
                                    <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-[#8897AD] hover:bg-[#8897AD] focus:ring-[#8897AD] font-medium rounded-lg text-sm px-4 py-2">Search</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SectionSiven;
