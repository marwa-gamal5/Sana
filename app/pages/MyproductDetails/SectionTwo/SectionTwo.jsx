import React from 'react';
import img from "@/public/Img/cardimg.png";
import img2 from '@/public/Img/12.png'
import img3 from '@/public/Img/11.png'
import img4 from '@/public/Img/13.png'
import img5 from "@/public/Img/6.png";
import img6 from '@/public/Img/7.png'
import img7 from '@/public/Img/8.png'
import img8 from '@/public/Img/1.png'
import ProductCard from "@/app/component/ProductCard/ProductCard";
const SectionTwo = () => {
    return (
        <>


                <div className='flex flex-col items-center justify-center md:p-14 p-6'>
                    <div className='text-[#D62923] font-medium text-[24px] font-Inter'>
                        Other Products
                    </div>
                    <div className='text-[#000000] font-bold text-[32px] my-2 font-Inter'>
                        Other cheeses for you
                    </div>
                </div>
                <div className="flex flex-wrap justify-center mx-14">
                    <ProductCard imgSrc={img} label="New" productName="Ricotta" rating={5} price="10 RAS" />
                    <ProductCard imgSrc={img2} label="New" productName="Mozzarella" rating={4} price="12 RAS" />
                    <ProductCard imgSrc={img3} label="New" productName="Cheddar" rating={4} price="15 RAS" />
                    <ProductCard imgSrc={img4} label="New" productName="Gouda" rating={5} price="14 RAS" />
                    <ProductCard imgSrc={img5} label="New" productName="Ricotta" rating={5} price="10 RAS" />
                    <ProductCard imgSrc={img6} label="New" productName="Mozzarella" rating={4} price="12 RAS" />
                    <ProductCard imgSrc={img7} label="New" productName="Cheddar" rating={4} price="15 RAS" />
                    <ProductCard imgSrc={img8} label="New" productName="Gouda" rating={5} price="14 RAS" />
                </div>

        </>
    );
};

export default SectionTwo;