'use client'

import img1 from '../../../../public/Img/7.png';
import img2 from '../../../../public/Img/12.png';
import img3 from '../../../../public/Img/1.png';
import img4 from '../../../../public/Img/5.png';
import React, { useState } from 'react';
import Image from "next/image";

const SectionThree = () => {
    const [selectedImage, setSelectedImage] = useState(img1); // Default image
    const [quantity, setQuantity] = useState(0);

    const images = [img1, img2, img3, img4];

    const handleDecrement = () => {
        setQuantity(prevQuantity => Math.max(prevQuantity - 1, 0)); // Minimum quantity is 1
    };

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    return (
        <>
        
        <div className='tablet:flex justify-around items-center tablet:gap-0 gap-5'>
            <div className="tablet:flex hidden justify-center items-center my-10 ps-14">
                <div className="flex flex-col space-y-4">
                    {images.map((img, index) => (
                        <div key={index} className="w-[150px] h-[150px] cursor-pointer border-2 border-[#F0F0F0] p-3">
                            <Image
                                src={img}
                                alt={`img-${index + 1}`}
                                className="object-cover w-full h-full"
                                onClick={() => setSelectedImage(img)}
                            />
                        </div>
                    ))}
                </div>
                <div className="ml-10 w-[600px] h-[600px] bg-[#F5F5F5] p-14">
                    <Image
                        src={selectedImage}
                        alt="Selected"
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
            <div className='tablet:hidden block'>
                <div className="flex flex-col items-center my-10">
                    <div className="w-60 h-60 mb-4">
                        <Image
                            src={selectedImage}
                            alt="Selected"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4 tablet:grid-cols-4 tablet:gap-4">
                        {images.map((img, index) => (
                            <div key={index} className="w-24 h-24 cursor-pointer">
                                <Image
                                    src={img}
                                    alt={`img-${index + 1}`}
                                    className="object-cover w-full h-full"
                                    onClick={() => setSelectedImage(img)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-center'>
                <div className='tablet:p-0 p-5 '>
                    <div className='font-Inter text-[#191919] text-3xl font-medium'>
                        adipiscing elit, sed do eiusmod tempor
                    </div>
                    <div className='my-5'>
                        <div className="flex gap-0.5">
                            <svg className="h-8 w-8 shrink-0 fill-amber-400" viewBox="0 0 256 256">
                                <path
                                    d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
                                </path>
                            </svg>
                            <svg className="h-8 w-8 shrink-0 fill-amber-400" viewBox="0 0 256 256">
                                <path
                                    d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
                                </path>
                            </svg>
                            <svg className="h-8 w-8 shrink-0 fill-amber-400" viewBox="0 0 256 256">
                                <path
                                    d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
                                </path>
                            </svg>
                            <svg className="h-8 w-8 shrink-0 fill-amber-400" viewBox="0 0 256 256">
                                <path
                                    d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
                                </path>
                            </svg>
                            <svg className="h-8 w-8 shrink-0 fill-gray-300" viewBox="0 0 256 256">
                                <path
                                    d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
                                </path>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <ul className="list-disc ml-5 font-Inter text-[#191919] font-light text-lg">
                            <li>Mozzarella cheese provides a good amount of protein and calcium</li>
                            <li>Fresh Flavor: Mozzarella cheese is known for its fresh and delicious taste.</li>
                            <li>Melting Capability: Mozzarella cheese melts perfectly when exposed to heat.</li>
                            <li>Mozzarella cheese provides a good amount of protein and calcium</li>
                        </ul>
                    </div>
                    <div className='flex gap-10 my-8'>
                        <div className='border-2 p-3 px-10 border-[#D62923] rounded-xl text-[#D62923]'>
                            50 K (70)
                        </div>
                        <div className='p-3 text-[#6F6F6F]'>
                            50 K (70)
                        </div>
                    </div>
                    <div className='flex   '>
                        <div>
                            USD(incl. of all taxes)
                            <div>600.72 SAR</div>
                        </div>

                        <form className="max-w-xs mx-auto">

                            <div className="relative flex items-center max-w-[8rem]">
                                <button
                                    type="button"
                                    onClick={handleDecrement}
                                    className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                                >
                                    <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                              stroke-width="2" d="M1 1h16"/>
                                    </svg>
                                </button>
                                <input
                                    type="text"
                                    id="quantity-input"
                                    value={quantity}
                                    onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                                    aria-describedby="helper-text-explanation"
                                    className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={handleIncrement}
                                    className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                                >
                                    <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                              stroke-width="2" d="M9 1v16M1 9h16"/>
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className='flex gap-10 my-8'>
                        <div className='border-2 p-3 px-10 border-[#8897AD] rounded-xl text-[#8897AD]'>
                            Add To Cart
                        </div>
                        <div className='border-2 p-3 px-10 border-[#8897AD] bg-[#8897AD] rounded-xl text-[#FFF]'>
                            Buy Now
                        </div>
                    </div>
                </div>
            </div>

        </div>

</>


    );
};

export default SectionThree;
