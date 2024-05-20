import React from 'react';
import Image from "next/image";
import img from '../../../../public/Img/img.png';
import img2 from '../../../../public/Img/imginabout2.png';
import img3 from '../../../../public/Img/imginabout.png';
const SectionFive = () => {
    return (
        <>
            <div className='bg-[#F5F5F5] tablet:p-14 p-6 '>
                <div className='flex  flex-col  items-center justify-center  tablet:p-14 p-5'>
                    <div className='text-[#D62923] font-medium text-[24px]  font-Inter'>
                        Why Sana ?
                    </div>
                    <div className='text-[#000000] font-bold  text-[32px] my-2 font-Inter '>
                        Read About Us
                    </div>
                </div>

                <div className='tablet:grid grid-cols-2 laptop:px-52  flex flex-col items-center justify-center tablet:px-10  gap-10 '>
                    <div className=' tablet:my-0 my-10'>
                        <Image src={img2} alt=" Image" className='rounded-xl hover:scale-[1.02] shadow-xl '/>
                    </div>
                    <div className='laptop:my-10'>
                        <div className='text-[#414536] font-Inter tablet:text-2xl text-xl font-normal leading-normal '>
                            Experience Italian quality in the heart of Saudi Arabia with Sana, the first Italian cheese
                            factory in the Kingdom, blending Italian craftsmanship with Saudi excellence. Proudly
                            boasting Italian experts spec ialized in cheese making, we work together to deliver
                            unparalleled quality products
                        </div>
                        <div className='font-Inter text-[#000000] font-semibold tablet:text-4xl text-2xl  my-5 '>
                            Experience Italian quality
                        </div>
                    </div>
                </div>

                <div className='tablet:grid grid-cols-2  laptop:px-52 flex flex-col items-center justify-center   tablet:px-10  gap-10 my-20 '>
                    <div className=' tablet:my-0 my-10 tablet:hidden block'>
                        <Image src={img3} alt=" Image" className='rounded-xl hover:scale-[1.02] shadow-xl '/>
                    </div>
                    <div className='laptop:my-10'>
                        <div className='text-[#414536] font-Inter tablet:text-2xl text-xl font-normal leading-normal '>
                            Indulge in the unique flavor of Italian cheese and benefit from its health benefits. It's a
                            rich source of essential vitamins that promote overall health, support the immune system,
                            and strengthen bones and teeth. Explore the variety of flavors and enjoy the wonderful taste
                            and great health benefits in every bite
                        </div>
                        <div className='font-Inter text-[#000000] font-semibold tablet:text-4xl text-2xl  my-5 '>
                            unique flavor of Italian cheese
                        </div>
                    </div>
                    <div className=' tablet:block hidden'>
                        <Image src={img3} alt=" Image" className='rounded-xl hover:scale-[1.02] shadow-xl'/>
                    </div>
                </div>

                <div className='tablet:grid grid-cols-2  laptop:px-52  flex flex-col items-center justify-center  tablet:px-10  gap-10 my-20  '>
                    <div className=' '>
                    <Image src={img} alt=" Image" className=' tablet:my-0 my-10 hover:scale-[1.02]  '/>
                    </div>
                    <div className='laptop:my-10'>
                        <div className='text-[#414536] font-Inter tablet:text-2xl text-xl font-normal leading-normal '>
                            Indulge in a unique experience with Sana Italian cheese in Saudi Arabia, where high quality and authentic flavor come together to offer you an unparalleled taste. Choose Sana for its superior quality and impeccable cleanliness, as we take pride in delivering products crafted with utmost care to meet your high standards."
                        </div>
                        <div className='font-Inter text-[#000000] font-semibold tablet:text-4xl text-2xl  my-5 '>
                            Health details in every bite
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default SectionFive;