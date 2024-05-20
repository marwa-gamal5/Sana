'use client'
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/effect-coverflow';
import SwiperCore from 'swiper';
import axiosInstance from "@/app/Network/axiosInstance";
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
import { RiShoppingBagLine } from "react-icons/ri";

const SectionFour = () => {
    SwiperCore.use([Navigation]);
    const [products, setProduct] = useState([]);

    const viewNewProducts = async () => {
        await axiosInstance.post('store/view_latest_products', {
            lang: 'en',
        }).then(res => {
            setProduct(res.data.success);
            console.log("viewNewProducts", res.data)
        }).catch((err) => {
            console.log("err", err)
        });
    }

    useEffect(() => {
        viewNewProducts();
    }, []);

    return (
        <>
            <div className='p-20'>
                <div className='md:flex justify-between items-center'>
                    <div>
                        <h1 className="md:text-4xl text-3xl tracking-tight font-Inter text-[#2C2F24] font-medium">
                            <span className="block xl:inline">Explore our  </span>
                            <span className="block text-[#D62923] xl:inline">Products</span>
                        </h1>
                        <div className='text-[#535353] text-xl font-normal font-Inter my-5'>Experience Italy with unforgettable unique offers</div>
                    </div>
                    <div>
                        <div className="rounded-md shadow">
                            <Link href="/Products" className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#8897AD] hover:scale-[1.02] md:text-lg md:px-10">
                                All Products
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='flex flex-wrap items-center justify-center'>
                    <Swiper
                        loop={true}
                        slidesPerView={1}
                        navigation={{
                            nextEl: '.next-arrow',
                            prevEl: '.prev-arrow',
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            1300: {
                                slidesPerView: 5,
                            },
                            1021: {
                                slidesPerView: 4,
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
                            {products.map((product, index) => (
                                <SwiperSlide key={index} className="relative hover:scale-[1.02] m-5 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
                                    <Image
                                        className="h-60 w-full object-cover object-end"
                                        src={`data:image/jpeg;base64,${product.image}`}
                                        alt={product.name}
                                        width={240}
                                        height={240}
                                    />
                                    <span className="absolute top-0 right-0 px-3 py-1 rounded-lg translate-y-4 bg-[#D62923] text-center text-sm text-white">New</span>
                                    <div className="mt-4 px-5 pb-5 md:h-28 h-32 ">
                                        <div className='justify-between flex items-center'>
                                            <div>
                                                <div className='font-Inter font-medium text-xl'>{product.name}</div>
                                                <div className="mt-2.5 mb-5 flex items-center">
                                                    {[...Array(5)].map((star, i) => (
                                                        <svg key={i} aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                                        </svg>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <RiShoppingBagLine className="bg-[#D62923] p-3 rounded-full text-[#fff] text-5xl" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </div>
                    </Swiper>
                </div>

                <div className='flex items-center justify-center gap-3 my-10'>
                    <BsArrowLeftSquareFill className='prev-arrow text-3xl text-[#D62923] hover:opacity-80' />
                    <BsArrowRightSquareFill className='next-arrow text-3xl text-[#D62923] hover:opacity-80' />
                </div>
            </div>
        </>
    );
};

export default SectionFour;
