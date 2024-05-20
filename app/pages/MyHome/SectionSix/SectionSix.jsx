import Image from "next/image";
import img from "@/public/Img/img3.png";
import img2 from "@/public/Img/img.png";
import img3 from "@/public/Img/img2.png";
import React from "react";
import Link from "next/link";
const SectionSix = () => {
    return (
        <>
            <div className='md:flex  md:p-0 p-6 items-center justify-center gap-10'>
                <div className=' md:w-4/12'>
                    <div>
                        <h1 className="md:text-4xl text-3xl font-bold tracking-tight font-Inter text-[#2C2F24]  border-y-4   ">
                            <div className='my-8'>
                            <span className="block xl:inline ms-1   ">Our</span>
                            <span className="block text-[#D62923] xl:inline ms-1">special</span>
                            <span className="block xl:inline ms-1 ">Chesses</span>
                            </div>
                        </h1>
                    </div>
                    <Image className="mt-24 hover:scale-[1.02]" src={img} alt=""/>
                    <div className='my-5 font-Inter font-medium text-3xl  '>
                        Mozzarella, an unforgettable moment of pleasure at every meal.
                    </div>
                    <div>
                        <div className=" my-5">
                            <Link href="/Products/productDetails"
                                  className=" px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#8897AD] ">
                                order now
                            </Link>
                        </div>
                    </div>
                </div>
                <div className=' md:w-4/12'>
                    <div>
                        <Image className="hover:scale-[1.02]" src={img2} alt=""/>

                        <div className='my-5 font-Inter font-medium text-3xl  '>
                            Burrata, moments of quality and rich flavor in every piece.
                        </div>
                        <div>
                            <div className=" my-5">
                                <Link href="/Products/productDetails"
                                      className=" px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#8897AD] ">
                                    order now
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='my-14'>
                        <Image className="hover:scale-[1.02]" src={img3} alt=""/>
                        <div className='my-5 font-Inter font-medium text-3xl  '>
                            Burrata cream, moments of delight that exceed expectations in every taste.
                        </div>
                        <div>
                            <div className=" my-5">
                                <Link href="/Products/productDetails"
                                      className=" px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#8897AD] ">
                                    order now
                                </Link>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
};

export default SectionSix;