import Banner from "../../component/Banner/Banner";
import { LuMail } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { IoMdTime } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
function ContactUsComponent() {
    return (
        <div className=" bg-[#f5f5f5] ">
            <div className=" pb-[5%]">


                <Banner title="What is Sana And" subTitle="Who We Are?" route="Contact us"/>

                <div
                    className="w-[100%] md:w-[70%] m-auto mt-10 border-4 border-[light-gray] rounded-[19px] bg-[white]">

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463877.3124353742!2d47.15218102704119!3d24.725455370872776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2z2KfZhNix2YrYp9i2INin2YTYs9i52YjYr9mK2Kk!5e0!3m2!1sar!2seg!4v1716121153209!5m2!1sar!2seg"
                        height="450"  className="border-0 w-[100%] rounded-[19px]" allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>



                    <div className="mt-[20px] font-Inter ms-14">
                        <h1 className="font-bold text-3xl">Have A <span className="text-[red]"> Question ?</span></h1>
                        <p>we would love to learn about your needs… we ,re here for it all. </p>
                    </div>
                    <br/>

                    <form className="w-[80%] mx-auto  p-5 ">
                        <div className="mb-5">
                            <input type="text"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Name" required/>
                        </div>
                        <div className="mb-5">
                            <input type="email"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="name@flowbite.com" required/>
                        </div>
                        <div className="mb-5">
                            <input type="number"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="phone number"
                                   required/>
                        </div>
                        <div className="mb-5">
                            <input type="text"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Write your question ?"
                                   required/>
                        </div>

                        <button type="submit"
                                className="text-white bg-[#8897AD] w-[100%]  hover:bg-[gray]  focus:outline-none  font-medium rounded-lg text-sm   px-5 py-2.5 text-center  ">Submit
                        </button>
                    </form>

                    <div className="grid lg:grid-cols-2 gap-5 pb-10 m-auto w-[80%] px-5 md:grid-cols-1 grid-cols-4">
                        <div className="flex  gap-5 items-center  ">
                            <div className="border border-red-500 flex justify-center p-3 rounded-[12px] text-red-500">
                                <LuMail/>
                            </div>
                            <h3 className="text-gray-600 md:block hidden">info@sanafood.sa</h3>
                        </div>

                        <div className="flex  gap-5 items-center  ">
                            <div className="border border-red-500 flex justify-center p-3 rounded-[12px] text-red-500">
                                <GrLocation/>
                            </div>
                            <h2 className="text-gray-600  md:block hidden">Saudi Arabia, Riyadh</h2>
                        </div>

                        <div className="flex  gap-5 items-center  ">
                            <div className="border border-red-500 flex justify-center p-3 rounded-[12px] text-red-500">
                                <FiPhoneCall/>
                            </div>
                            <h2 className="text-gray-600 md:block hidden">+966534704108</h2>
                        </div>

                        <div className="flex  gap-5 items-center">
                            <div className="border border-red-500 flex justify-center p-3 rounded-[12px] text-red-500">
                                <IoMdTime/>
                            </div>
                            <h2 className="text-gray-600 md:block hidden">08:00 - 17:00</h2>
                        </div>


                    </div>


                </div>
            </div>
        </div>
    );
}

export default ContactUsComponent;