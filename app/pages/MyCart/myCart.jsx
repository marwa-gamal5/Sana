'use client'
import img2 from '../../../public/Img/cardimg2.png';
import { RiDeleteBin6Line } from "react-icons/ri";
import Image from "next/image";
import React, { useState } from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import { FaMinus } from "react-icons/fa6";

function Cart() {
    const initialQuantities = Array(4).fill(0); // Initial quantities for 4 products
    const [quantities, setQuantities] = useState(initialQuantities);

    const handleIncrement = (index) => {
        const newQuantities = [...quantities];
        newQuantities[index] += 1;
        setQuantities(newQuantities);
    };

    const handleDecrement = (index) => {
        const newQuantities = [...quantities];
        if (newQuantities[index] > 0) {
            newQuantities[index] -= 1;
        }
        setQuantities(newQuantities);
    };

    const cartProducts = [
        { img: img2, title: 'Ricotta cream1', subTitle: "Lorem ipsum dolor sit amet", price: "103", total: "1000" },
        { img: img2, title: 'Ricotta cream2', subTitle: "Lorem ipsum dolor sit amet", price: "288", total: "5000" },
        { img: img2, title: 'Ricotta cream3', subTitle: "Lorem ipsum dolor sit amet", price: "130", total: "2000" },
        { img: img2, title: 'Ricotta cream4', subTitle: "Lorem ipsum dolor sit amet", price: "123", total: "3000" }
    ];

    return (
        <>
            <div className="mt-[5%] bg-gray-100 p-10">
                <h1 className="font-Inter text-2xl font-bold">Cartttt</h1>

                <div className="relative overflow-x-auto bg-white rounded-[18px]">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                        <thead className="text-xs text-gray-700">
                        <tr className="">
                            <th scope="col" className="p-9 th">Product</th>
                            <th scope="col" className="p-9 th">U.price</th>
                            <th scope="col" className="p-9 th">Quantity</th>
                            <th scope="col" className="p-9 th">Sub Total</th>
                        </tr>
                        </thead>
                        <tbody className="bg-white p-10 ">
                        {cartProducts.map((pro, index) => (
                            <tr key={index} className="tr ">
                                <th scope="row" className=" px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex gap-5 justify-center items-center ">
                                    <Image className="w-32 border p-5" src={pro.img} alt="" />
                                    <div>
                                        <h1 className="text-xl font-bold ">{pro.title}</h1>
                                        <p className="text-xs text-gray-500">{pro.subTitle}</p>
                                    </div>
                                </th>
                                <td className="p-2 sm:p-9 td">
                                    <h1 className="text-xl font-bold">{pro.price} <span
                                        className="text-sm font-normal">SAR</span></h1>
                                </td>
                                <td className="p-2 sm:p-9 td">
                                    <div className="flex items-center max-w-[8rem]">
                                        <button
                                            type="button"
                                            id="decrement-button"
                                            onClick={() => handleDecrement(index)}
                                            className="hover:bg-gray-200 border border-gray-300 rounded p-1 focus:ring-gray-100 focus:ring-2"
                                        >
                                            <FaMinus />
                                        </button>
                                        <input
                                            type="text"
                                            id="quantity-input"
                                            value={quantities[index]}
                                            readOnly
                                            aria-describedby="helper-text-explanation"
                                            className="bg-gray-50 border-1 border-gray-300 mx-1 rounded p-1 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 w-full"
                                        />
                                        <button
                                            type="button"
                                            id="increment-button"
                                            onClick={() => handleIncrement(index)}
                                            className="hover:bg-gray-200 border border-gray-300 rounded p-1 focus:ring-gray-100 focus:ring-2"
                                        >
                                            <AiOutlinePlus />
                                        </button>
                                    </div>
                                </td>
                                <td className="p-2 sm:p-9 td">
                                    <h1 className="text-xl font-bold">{pro.total} <span
                                        className="text-sm font-normal">SAR</span></h1>
                                </td>
                                <td className="text-fuchsia-800 p-10 td">
                                    <RiDeleteBin6Line className='p-2 bg-[#D62923] text-4xl rounded-full text-[#fff]' />
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Cart;