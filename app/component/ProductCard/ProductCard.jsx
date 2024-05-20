import React from 'react';
import Image from "next/image";
import { RiShoppingBagLine } from "react-icons/ri";

const ProductCard = ({ imgSrc, label, productName, rating, price }) => {
    return (
        <div className="relative hover:scale-[1.02] m-5 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
            <Image className="h-60 w-full object-cover object-end" src={imgSrc} alt="" />
            <span className="absolute top-0 right-0 px-3 py-1 rounded-lg translate-y-4 bg-[#D62923] text-center text-sm text-white">{label}</span>
            <div className="mt-4 px-5 pb-5">
                <div className='justify-between flex items-center'>
                    <div>
                        <div className='font-Inter font-medium text-xl'>{productName}</div>
                        <div className="mt-2.5 mb-5 flex items-center">
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    aria-hidden="true"
                                    className={`h-5 w-5 ${i < rating ? 'text-yellow-300' : 'text-gray-300'}`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                            ))}
                        </div>
                    </div>
                    <div>
                        <RiShoppingBagLine className="bg-[#D62923] p-3 rounded-full text-[#fff] text-5xl" />
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <p>
                        <span className="text-2xl text-[#DA2E1F] font-semibold font-Inter">{price}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
