"use client"

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LiaCartArrowDownSolid } from "react-icons/lia";
import LogoImage  from '../../public/Img/Logo.png'
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
      <>
        <div className="z-50">
          <nav className="bg-[#fff] dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <Image  src={LogoImage}  alt=" Logo" />
              </Link>
              <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <Link href="/Cart" >
                  <button type="button" className="mx-3">
                    <LiaCartArrowDownSolid className='p-2 bg-[#8897AD] text-4xl rounded-full text-[#fff]' />
                  </button></Link>
                <button
                    type="button"
                    className="text-[#D62923]    border  border-[#D62923] font-medium rounded-lg text-sm px-4 py-2 text-center "
                >
                  Login
                </button>

                <button
                    onClick={toggleMenu}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-sticky"
                    aria-expanded={isOpen ? 'true' : 'false'}
                >
                  <span className="sr-only">{isOpen ? 'Close main menu' : 'Open main menu'}</span>
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    {isOpen ? (
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 1L1 13M1 1l15 12" />
                    ) : (
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    )}
                  </svg>
                </button>

              </div>


              <div
                  className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
                      isOpen ? 'block' : 'hidden'
                  }`}
                  id="navbar-sticky"
              >
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li>
                    <Link
                        href="/"
                        className="block py-2 px-3 text-white bg-[#8897AD] rounded md:bg-transparent md:text-[#8897AD] md:p-0 md:dark:text-blue-500"
                        aria-current="page"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                        href="/About"
                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#8897AD] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                        href="/Products"
                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#8897AD] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link
                        href="/ContactUs"
                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#8897AD] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                        href="/profile"
                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#8897AD] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Profile
                    </Link>
                  </li>
                </ul>

              </div>

            </div>
          </nav>
        </div>
      </>
  );
}

export default Navbar;