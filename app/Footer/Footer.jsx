import React from 'react';
import Image from "next/image";
import logo from'../../public/Img/Logo.png'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import Link from "next/link";
import {RiShoppingBagLine} from "react-icons/ri";
const Footer = () => {
    return (
        <>
            <footer className="w-full bg-[#1B1D21]">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    {/* Grid */}
                    <div
                        className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-8 py-14 max-w-xs mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-full">
                        <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
                            <Image className="" src={logo} alt=""/>
                            <p className="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">Trusted in
                                From the heart of the Kingdom, a beautiful Italian story began with the first Italian
                                cheese factory in the Kingdom of Saudi Arabia, to become an unforgettable experience. We
                                brought Italian experts and a highly trained team to ensure Italian quality and taste. A
                                taste that suits all tastes..</p>
                            <div className="flex flex-wrap mt-4 space-x-4 justify-center lg:justify-start sm:mt-0 ">
                               <FaFacebookF className="  bg-[#fff] p-2 rounded-full  text-[#A82D49]  text-4xl"/>


                            <FaTwitter className="  bg-[#fff] p-2 rounded-full  text-[#A82D49]  text-4xl" />
                            <FaInstagram className="  bg-[#fff] p-2 rounded-full  text-[#A82D49]  text-4xl" />
                            <FaYoutube className="  bg-[#fff] p-2 rounded-full  text-[#A82D49]  text-4xl" />


                        </div>
                    </div>
                    {/*End Col*/}
                    <div className="lg:mx-auto text-center sm:text-left">
                        <h4 className="text-lg text-[#fff] font-medium mb-7">Chesses</h4>
                            <ul className="text-sm  transition-all duration-500">
                                <li className="mb-6"><a href="javascript:;"
                                                        className=" text-[#fff] hover:text-gray-300">food quality</a></li>
                                <li className="mb-6"><a href="javascript:;"
                                                        className=" text-[#fff]  hover:text-gray-300">food price</a></li>
                                <li className="mb-6"><a href="javascript:;"
                                                        className=" text-[#fff]  hover:text-gray-300">popular food</a></li>

                            </ul>
                        </div>
                        {/*End Col*/}
                        <div className="lg:mx-auto text-center sm:text-left">
                            <h4 className="text-lg text-[#fff]  font-medium mb-7">Information</h4>
                            <ul className="text-sm  transition-all duration-500">
                                <li className="mb-6"><a href="javascript:;"
                                                        className="text-[#fff] hover:text-gray-300">FAQ</a></li>
                                <li className="mb-6"><a href="javascript:;"
                                                        className=" text-[#fff] hover:text-gray-300">Blog</a>
                                </li>
                                <li className="mb-6"><a href="javascript:;"
                                                        className=" text-[#fff] hover:text-gray-300">Support</a></li>

                            </ul>
                        </div>
                        {/*End Col*/}
                        <div className="lg:mx-auto text-center sm:text-left">
                            <h4 className="text-lg text-[#fff] font-medium mb-7">Company</h4>
                            <ul className="text-sm  transition-all duration-500">
                                <Link href="/About">
                                <li className="mb-6"><a href="javascript:;"
                                                        className="text-[#fff] hover:text-gray-300">About us</a></li>
                                </Link>
                                <Link href="/Products">
                                <li className="mb-6"><a href="javascript:;"
                                                        className=" text-[#fff] hover:text-gray-300">Products</a>
                                </li>
                                </Link>
                                    <Link href="/ContactUs">
                                <li className="mb-6"><a href="javascript:;"
                                                        className="text-[#fff] hover:text-gray-300">Contact us</a>
                                </li>
                                    </Link>

                            </ul>
                        </div>

                    </div>
                    {/*Grid */}

                    <div className="py-7 border-t border-[#494a4d]">
                        <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
                            <span className="text-md text-[#fff] ">©All Rights Resaved 2024 </span>
                            <ul className="flex items-center gap-9 mt-4 lg:mt-0">
                                <li><a href="javascript:;" className="text-sm text-[#fff] ">Terms</a></li>
                                <li><a href="javascript:;" className="text-sm text-[#fff] ">Privacy</a></li>
                                <li><a href="javascript:;" className="text-sm text-[#fff] ">Cookies</a></li>
                            </ul>
                            <Link href="https://alrowadit.com/">
                            <span className="text-md text-[#fff] my-2 "> © Powered by Alrowad </span>
                            </Link>
                        </div>
                    </div>

                </div>
            </footer>

        </>
    );
};

export default Footer;