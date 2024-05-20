
import Image from "next/image";
import img from '../../../../public/Img/ObjectPhoto.png';
import { RiQuestionnaireLine } from "react-icons/ri";
import React from "react";
import {GiKnifeFork} from "react-icons/gi";
const SectionSex = () => {

    return (
        <>
            <div className='flex flex-col items-center justify-center md:p-14 p-5  '>

                <div className='text-[#D62923] font-medium text-[24px]  font-Inter'>
                    How we are ?
                </div>
                <div className='text-[#000000] font-bold  text-[32px] my-2 font-Inter '>
                    Look About our video
                </div>
            </div>
            <div className='p-10 tablet:px-20  tablet:flex   justify-center items-center gap-20 '>
                <div className={``}>
                    <Image src={img} alt=" Image" className=' my-4 mx-auto'/>
                </div>
                <div>
                    <div className='flex gap-2 items-center text-[#1F1F1F] font-Poppins font-normal text-lg '>
                        <RiQuestionnaireLine
                            className="  bg-[#D62923] p-1 rounded-xl  text-[#fff] opacity-[0.7] text-4xl"/>

                        FAQ Question
                    </div>
                    <div className='text-[#1F1F1F] font-Poppins font-semibold text-3xl my-5'>
                        Frequently asked questions
                    </div>

                    <div>
                        <div className=" max-w-2xl mt-14">
                            <div className="divide-y-[3px] divide-[#EDEDED]">
                                <details className="group border-l-4 border-[#EDEDED] rounded-2xl ps-5  " open>
                                    <summary
                                        className="text-[#D62923] font-Poppins text-xl flex cursor-pointer list-none items-center justify-between py-4  font-medium text-secondary-900 group-open:text-primary-500">
                                        Does the price of ricotta cheese vary from place to place and from quality to
                                        quality?
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5"
                                                 stroke="currentColor" className="block h-5 w-5 group-open:hidden">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M12 4.5v15m7.5-7.5h-15"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5"
                                                 stroke="currentColor" className="hidden h-5 w-5 group-open:block">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15"/>
                                            </svg>
                                        </div>
                                    </summary>
                                    <div
                                        className="pb-4 text-[#666C89] font-Poppins text-lg font-medium  text-secondary-500">This
                                        Yes, the price of ricotta cheese can vary depending on various factors including
                                        the region, quality, production method, and demand. In some places, where
                                        ricotta cheese is produced locally and in abundance, it might be more
                                        affordable. However, in areas where it's imported or considered a specialty
                                        item, the price could be higher.
                                    </div>
                                </details>
                                <details className="group  border-l-4 border-[#EDEDED] rounded-2xl ps-5  " >

                                    <summary
                                        className="flex cursor-pointer text-[#D62923] font-Poppins text-xl  list-none items-center justify-between py-4  font-medium text-secondary-900 group-open:text-[#D62923]">
                                        What types of cheese are available...?
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5"
                                                 stroke="currentColor" className="block h-5 w-5 group-open:hidden">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M12 4.5v15m7.5-7.5h-15"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5"
                                                 stroke="currentColor" className="hidden h-5 w-5 group-open:block">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15"/>
                                            </svg>
                                        </div>
                                    </summary>
                                    <div
                                        className="pb-4 text-[#666C89] font-Poppins text-lg font-medium   text-secondary-500 ms-5">
                                        1-Mozzarella <br/>
                                        2-Ricotta <br/>
                                        3-Burrata <br/>
                                        4-Burrata cream <br/>
                                        5-Stracciatella <br/>


                                    </div>
                                </details>
                                <details className="group  border-l-4 border-[#EDEDED] rounded-2xl ps-5  ">
                                    <summary
                                        className="flex text-[#D62923] font-Poppins text-xl  cursor-pointer list-none items-center justify-between py-4 font-medium text-secondary-900 group-open:text-primary-500">
                                        what Burrata cheese cooking method?
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5"
                                                 stroke="currentColor" className="block h-5 w-5 group-open:hidden">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M12 4.5v15m7.5-7.5h-15"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5"
                                                 stroke="currentColor" className="hidden h-5 w-5 group-open:block">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15"/>
                                            </svg>
                                        </div>
                                    </summary>
                                    <div
                                        className="pb-4 text-[#666C89] font-Poppins text-lg font-medium  text-secondary-500">
                                        1-Serve it Fresh: Burrata is traditionally served fresh at room temperature.
                                        Simply slice it open and serve it with fresh tomatoes, basil leaves, a drizzle
                                        of good quality olive oil, and a sprinkle of salt and pepper for a classic
                                        Caprese salad. <br/>
                                        <br/>
                                        2-On Toast: Spread burrata on toasted bread slices and top with ingredients like
                                        roasted cherry tomatoes, sautéed mushrooms, or prosciutto for a quick and tasty
                                        appetizer or light meal.<br/><br/>

                                        3-With Pasta: Toss cooked pasta with a creamy burrata sauce made by melting
                                        burrata with a bit of reserved pasta water and seasoning it with salt, pepper,
                                        and fresh herbs. Top with some roasted vegetables or cherry tomatoes for extra
                                        flavor.<br/>
                                        <br/>
                                        4-On Pizza: Add dollops of burrata onto a freshly baked pizza just before
                                        serving. The residual heat from the pizza will warm the cheese slightly without
                                        melting it completely.<br/>
                                        <br/>
                                        5-In Risotto: Stir chunks of burrata into creamy risotto just before serving to
                                        add richness and creaminess to the dish.<br/>
                                        <br/>
                                        6-With Grilled Vegetables: Serve grilled vegetables like zucchini, eggplant, or
                                        bell peppers with a generous dollop of burrata on top. The warmth of the grilled
                                        veggies will slightly soften the cheese while still maintaining its creamy
                                        texture.<br/>
                                        <br/>
                                        Remember, burrata is best enjoyed when it's just slightly warmed or at room
                                        temperature, so avoid cooking it for extended periods or subjecting it to high
                                        heat.


                                    </div>
                                </details>

                                <details className="group border-l-4 border-[#EDEDED] rounded-2xl ps-5 ">
                                    <summary
                                        className="text-[#D62923] font-Poppins text-xl flex cursor-pointer list-none items-center justify-between py-4  font-medium text-secondary-900 group-open:text-primary-500">
                                        Mozzarella cheese is made from which type of milk?
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5"
                                                 stroke="currentColor" className="block h-5 w-5 group-open:hidden">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M12 4.5v15m7.5-7.5h-15"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5"
                                                 stroke="currentColor" className="hidden h-5 w-5 group-open:block">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15"/>
                                            </svg>
                                        </div>
                                    </summary>
                                    <div
                                        className="pb-4 text-[#666C89] font-Poppins text-lg font-medium  text-secondary-500">
                                        Mozzarella cheese is traditionally made from the milk of water buffalo in Italy.
                                        However, it can also be made from cow's milk, which is more common outside of
                                        Italy. Both types of milk produce delicious mozzarella cheese, but buffalo milk
                                        is known for yielding a richer and creamier cheese.
                                    </div>
                                </details>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
};

export default SectionSex;