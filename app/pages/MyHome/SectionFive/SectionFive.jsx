'use client'

import React from 'react';
import Link from "next/link";
import Image from "next/image";
import img from "@/public/Img/cardimg6.png";
import {RiShoppingBagLine} from "react-icons/ri";
import img2 from "@/public/Img/cardimg4.png";
import img3 from "@/public/Img/cardimg5.png";
import img4 from "@/public/Img/1.png";
import img5 from "@/public/Img/7.png";
import img6 from "@/public/Img/3.png";

import {BsArrowLeftSquareFill, BsArrowRightSquareFill} from "react-icons/bs";
import {Swiper, SwiperSlide} from "swiper/react";




import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/effect-coverflow';


import { Pagination , Navigation , Autoplay } from 'swiper/modules';
const SectionFive = () => {

    const slides = [
        {title:"Recota" ,img:img},
        {title:"Recota2" ,img:img3},
        {title:"Recota3" ,img:img2},
        {title:"Recota4" ,img:img4},
        {title:"Recota5" ,img:img5},
        {title:"Recota6" ,img:img6}]
    return (
        <>
            <div className='p-20'>
                <div className='md:flex justify-between items-center'>
                    <div>
                        <h1 className="md:text-4xl text-3xl tracking-tight font-Inter text-[#2C2F24] font-medium">
                            <span className="block xl:inline">Explore our  </span>
                            <span className="block text-[#D62923] xl:inline">Popular</span>
                            <span className="block xl:inline ms-1">Products </span>
                        </h1>
                        <div className='text-[#535353] text-xl font-normal font-Inter my-5 '>Explore THE WORLD OF RICH ITALIAN TASTE EXPERIENCES</div>
                    </div>
                    <div>
                        <div className="rounded-md shadow">
                            <Link href="/Products" className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#8897AD] hover:scale-[1.02] md:text-lg md:px-10">
                                All Products
                            </Link>
                        </div>
                    </div>
                </div>

                <div>


                    <div className='flex flex-wrap items-center justify-center  '>
                        <Swiper
                            loop={true}
                            slidesPerView={1}
                            navigation={{
                                nextEl: '.nextt-arrow',
                                prevEl: '.prevv-arrow',
                                // clickable:true
                            }}
                            autoplay={{
                                delay: 2100,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                1300: {
                                    slidesPerView:5 ,

                                },
                                1021: {
                                    slidesPerView:4 ,

                                },
                                860: {
                                    slidesPerView: 3,

                                },
                                620: {
                                    slidesPerView: 2,

                                },
                            }}
                            modules={[Autoplay, Pagination, Navigation]}
                        >
                            <div>
                                {slides.map((elem,index)=>{
                                    return(
                                        <SwiperSlide key={index}
                                                     className="relative hover:scale-[1.02] m-5 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
                                            <Image className="h-60 w-full object-cover object-end" src={elem.img} alt=""/>
                                            <span
                                                className="absolute top-0 right-0 px-3 py-1 rounded-lg  translate-y-4    bg-[#D62923] text-center text-sm text-white">New</span>
                                            <div className="mt-4 px-5 pb-5">
                                                <div className='justify-between flex items-center'>


                                                    <div>
                                                        <div className='font-Inter font-medium text-xl  '>
                                                            {elem.title}
                                                        </div>
                                                        <div className="mt-2.5 mb-5 flex items-center">

                                                            <svg aria-hidden="true" className="h-5 w-5 text-yellow-300"
                                                                 fill="currentColor"
                                                                 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                                            </svg>
                                                            <svg aria-hidden="true" className="h-5 w-5 text-yellow-300"
                                                                 fill="currentColor"
                                                                 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                                            </svg>
                                                            <svg aria-hidden="true" className="h-5 w-5 text-yellow-300"
                                                                 fill="currentColor"
                                                                 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                                            </svg>
                                                            <svg aria-hidden="true" className="h-5 w-5 text-yellow-300"
                                                                 fill="currentColor"
                                                                 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                                            </svg>
                                                            <svg aria-hidden="true" className="h-5 w-5 text-yellow-300"
                                                                 fill="currentColor"
                                                                 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div><RiShoppingBagLine
                                                        className="  bg-[#D62923] p-3 rounded-full  text-[#fff]  text-5xl"/></div>

                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <p>
                                        <span
                                            className="text-2xl text-[#DA2E1F]  font-semibold  font-Inter "></span>
                                                    </p>

                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}
                            </div>











                        </Swiper>

                    </div>
                    <div className='flex items-center justify-center gap-3 my-10 '>
                        <BsArrowLeftSquareFill  className='nextt-arrow text-3xl text-[#D62923] hover:opacity-80 ' />
                        <BsArrowRightSquareFill className='prevv-arrow text-3xl text-[#D62923] hover:opacity-80' />

                    </div>

                </div>
            </div>
        </>
    );
};

export default SectionFive;