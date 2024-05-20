"use client"
import React, { useState } from 'react';
import Image from "next/image";
import img from "@/public/Img/1.png";
import img2 from "@/public/Img/2.png";
import img3 from "@/public/Img/3.png";
import img4 from "@/public/Img/4.png";

import img5 from "@/public/Img/5.png";
import img6 from "@/public/Img/6.png";

import img7 from "@/public/Img/7.png";
import img8 from "@/public/Img/8.png";

import img9 from "@/public/Img/9.png";
import img10 from "@/public/Img/10.png";

import img11 from "@/public/Img/11.png";
import img12 from "@/public/Img/12.png";
import img13 from "@/public/Img/13.png";
import img14 from "@/public/Img/14.png";
import Link from 'next/link';

import { RiShoppingBagLine } from "react-icons/ri";
import { FaFilter } from "react-icons/fa6";

import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const SectionTwo = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(true);
    const [isDropdownOpen2, setDropdownOpen2] = useState(true);
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    const toggleDropdown2 = () => {
        setDropdownOpen2(!isDropdownOpen2);
    };

    const items = [
        { title: 'Ricotta', price: 'See More ...', rating: 5, image: img },
        { title: 'Mozzarella', price: 'See More ...', rating: 4, image: img2 },
        { title: 'Burrata', price: 'See More ...', rating: 5, image: img3 },
        { title: 'Stracciatella', price: 'See More ...', rating: 4, image: img4 },
        { title: 'Cream Cheese', price: 'See More ...', rating: 5, image: img5 },
        { title: 'Gorgonzola', price: 'See More ...', rating: 3, image: img6 },
        { title: 'Parmesan', price: 'See More ...', rating: 5, image: img7 },
        { title: 'Cheddar', price: 'See More ...', rating: 4, image: img8 },
        { title: 'Cheddar', price: 'See More ...', rating: 4, image: img9 },
        { title: 'Cheddar', price: 'See More ...', rating: 4, image: img10 },
        { title: 'Cheddar', price: 'See More ...', rating: 4, image: img11 },
        { title: 'Cheddar', price: 'See More ...', rating: 4, image: img12 },
        { title: 'Cheddar', price: 'See More ...', rating: 4, image: img13 },
        { title: 'Cheddar', price: 'See More ...', rating: 4, image: img14 },
    ];


    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    return (
        <>
            <Modal open={open} onClose={onCloseModal} center>
                <div className='p-10 '>

                    <div className='text-[#0DA8CA] my-5'>Clear all</div>
                    <div>
                        <button
                            id="dropdownCheckboxButton"
                            onClick={toggleDropdown}
                            className="  text-3xl  font-medium rounded-lg x-5 py-4 pb-6 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            type="button">
                            Categories
                            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                 fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2" d="m1 1 4 4 4-4"/>
                            </svg>
                        </button>

                        <div id="dropdownDefaultCheckbox"
                             className={`z-10 ${isDropdownOpen ? 'block' : 'hidden'} w-48 bg-white divide-y divide-gray-100 rounded-lg  `}>
                            <ul className=" space-y-3 text-sm text-gray-700 "
                                aria-labelledby="dropdownCheckboxButton">
                                <li>
                                    <div className="flex items-center">
                                        <input id="checkbox-item-1" type="checkbox" value=""
                                               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                        <label htmlFor="checkbox-item-1"
                                               className=" ms-2 text-xl font-normal  text-[#1A191F]  ">Mozzarella
                                            (8)</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <input id="checkbox-item-2" type="checkbox" value=""
                                               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                        <label htmlFor="checkbox-item-2"
                                               className="ms-2 text-xl font-normal  text-[#1A191F]     ">Burrata
                                            (2)</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <input id="checkbox-item-3" type="checkbox" value=""
                                               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                        <label htmlFor="checkbox-item-3"
                                               className="ms-2 text-xl font-normal  text-[#1A191F]  ">Ricotta cream
                                            (2)</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <input id="checkbox-item-5" type="checkbox" value=""
                                               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                        <label htmlFor="checkbox-item-5"
                                               className="ms-2 text-xl font-normal  text-[#1A191F]  ">Ricotta (2)
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <input id="checkbox-item-4" type="checkbox" value=""
                                               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                        <label htmlFor="checkbox-item-4"
                                               className="ms-2 text-xl font-normal  text-[#1A191F]  ">Stracciatella
                                            (2)</label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='my-10'>
                        <button
                            id="dropdownCheckboxButton"
                            onClick={toggleDropdown2}
                            className="  text-3xl  font-medium rounded-lg x-5 py-4 pb-6 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            type="button">
                            Dietary
                            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                 fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2" d="m1 1 4 4 4-4"/>
                            </svg>
                        </button>

                        <div id="dropdownDefaultCheckbox"
                             className={`z-10 ${isDropdownOpen2 ? 'block' : 'hidden'} w-48 bg-white divide-y divide-gray-100 rounded-lg  `}>
                            <ul className=" space-y-3 text-sm text-gray-700 "
                                aria-labelledby="dropdownCheckboxButton">
                                <li>
                                    <div className="flex items-center">
                                        <input id="checkbox-item-9" type="checkbox" value=""
                                               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                        <label htmlFor="checkbox-item-9"
                                               className=" ms-2 text-xl font-normal  text-[#1A191F]  ">Offers
                                            (2)</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <input id="checkbox-item-7" type="checkbox" value=""
                                               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                        <label htmlFor="checkbox-item-7"
                                               className="ms-2 text-xl font-normal  text-[#1A191F]     ">Fat free
                                            (7)
                                        </label>
                                    </div>
                                </li>

                                <li>
                                    <div className="flex items-center">
                                        <input id="checkbox-item-8" type="checkbox" value=""
                                               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                        <label htmlFor="checkbox-item-8"
                                               className="ms-2 text-xl font-normal  text-[#1A191F]  ">Popular (13)
                                        </label>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </Modal>

            <div className='tablet2:hidden  gap-5 w-full bg-[#9ca3af] h-[80px] p-5 flex justify-between items-center '>
                <div>
                    <FaFilter onClick={onOpenModal} className='text-2xl text-[#D62923]'/>
                </div>

                <div>
                    <div className="relative">
                        <input
                            className="appearance-none border-2 pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Search..."
                        />
                        <div className="absolute right-0 inset-y-0 flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="-ml-1 mr-3 h-5 w-5 text-gray-400 hover:text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </div>

                        <div className="absolute left-0 inset-y-0 flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </div>
                    </div>
                </div>


            </div>
            <div className='flex'>

                <div className='tablet2:block hidden  '>
                    <div className='p-5 ms-14'>
                        <form className="max-w-md mx-auto">
                            <label htmlFor="default-search"
                                   className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                              stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div>
                                <input type="search" id="default-search"
                                       className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="Search ..." required/>
                            </div>
                        </form>
                        <div className='text-[#0DA8CA] my-5'>Clear all</div>
                        <div>
                            <button
                                id="dropdownCheckboxButton"
                                onClick={toggleDropdown}
                                className="  text-3xl  font-medium rounded-lg x-5 py-4 pb-6 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                type="button">
                                Categories
                                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                     fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2" d="m1 1 4 4 4-4"/>
                                </svg>
                            </button>

                            <div id="dropdownDefaultCheckbox"
                                 className={`z-10 ${isDropdownOpen ? 'block' : 'hidden'} w-48 bg-white divide-y divide-gray-100 rounded-lg  `}>
                                <ul className=" space-y-3 text-sm text-gray-700 "
                                    aria-labelledby="dropdownCheckboxButton">
                                    <li>
                                        <div className="flex items-center">
                                            <input id="checkbox-item-1" type="checkbox" value=""
                                                   className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                            <label htmlFor="checkbox-item-1"
                                                   className=" ms-2 text-xl font-normal  text-[#1A191F]  ">Mozzarella
                                                (8)</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center">
                                            <input id="checkbox-item-2" type="checkbox" value=""
                                                   className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                            <label htmlFor="checkbox-item-2"
                                                   className="ms-2 text-xl font-normal  text-[#1A191F]     ">Burrata
                                                (2)</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center">
                                            <input id="checkbox-item-3" type="checkbox" value=""
                                                   className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                            <label htmlFor="checkbox-item-3"
                                                   className="ms-2 text-xl font-normal  text-[#1A191F]  ">Ricotta cream
                                                (2)</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center">
                                            <input id="checkbox-item-5" type="checkbox" value=""
                                                   className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                            <label htmlFor="checkbox-item-5"
                                                   className="ms-2 text-xl font-normal  text-[#1A191F]  ">Ricotta (2)
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center">
                                            <input id="checkbox-item-4" type="checkbox" value=""
                                                   className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                            <label htmlFor="checkbox-item-4"
                                                   className="ms-2 text-xl font-normal  text-[#1A191F]  ">Stracciatella
                                                (2)</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='my-10'>
                            <button
                                id="dropdownCheckboxButton"
                                onClick={toggleDropdown2}
                                className="  text-3xl  font-medium rounded-lg x-5 py-4 pb-6 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                type="button">
                                Dietary
                                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                     fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2" d="m1 1 4 4 4-4"/>
                                </svg>
                            </button>

                            <div id="dropdownDefaultCheckbox"
                                 className={`z-10 ${isDropdownOpen2 ? 'block' : 'hidden'} w-48 bg-white divide-y divide-gray-100 rounded-lg  `}>
                                <ul className=" space-y-3 text-sm text-gray-700 "
                                    aria-labelledby="dropdownCheckboxButton">
                                <li>
                                        <div className="flex items-center">
                                            <input id="checkbox-item-9" type="checkbox" value=""
                                                   className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                            <label htmlFor="checkbox-item-9"
                                                   className=" ms-2 text-xl font-normal  text-[#1A191F]  ">Offers
                                                (2)</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center">
                                            <input id="checkbox-item-7" type="checkbox" value=""
                                                   className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                            <label htmlFor="checkbox-item-7"
                                                   className="ms-2 text-xl font-normal  text-[#1A191F]     ">Fat free
                                                (7)
                                            </label>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="flex items-center">
                                            <input id="checkbox-item-8" type="checkbox" value=""
                                                   className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                            <label htmlFor="checkbox-item-8"
                                                   className="ms-2 text-xl font-normal  text-[#1A191F]  ">Popular (13)
                                            </label>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-wrap items-center justify-center p-5 py-10 gap-5'>
                    {items.map((item, index) => (
                        <div key={index}
                             className="relative hover:scale-[1.02] m-5 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
                            <Image className="h-60 w-full object-cover object-end" src={item.image} alt={item.title}/>
                            <span
                                className="absolute top-0 right-0 px-3 py-1 rounded-lg translate-y-4 bg-[#D62923] text-center text-sm text-white">New</span>
                            <div className="mt-4 px-5 pb-5">
                                <div className='justify-between flex items-center'>
                                    <div>
                                        <div className='font-Inter font-normal text-xl'>{item.title}</div>
                                        <div className="mt-2.5 mb-5 flex items-center">
                                            {[...Array(item.rating)].map((_, starIndex) => (
                                                <svg key={starIndex} aria-hidden="true"
                                                     className="h-5 w-5 text-yellow-300"
                                                     fill="currentColor" viewBox="0 0 20 20"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                    <div><RiShoppingBagLine
                                        className="bg-[#D62923] p-3 rounded-full text-[#fff] text-5xl"/></div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p>
                                        <Link href="/Products/productDetails">
                                        <span
                                            className="text-2xl text-[#DA2E1F] font-semibold font-Inter">{item.price}</span>
                                    </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default SectionTwo;
