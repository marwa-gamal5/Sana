import Image from "next/image";
import img from '../../../../public/Img/Image.png';
import Link from "next/link";
import { LuPhone } from "react-icons/lu";
import { MdOutlineLocationOn } from "react-icons/md";
import { CiMail } from "react-icons/ci";

function SectionThree() {
  return (
    <>
      <section className="mx-auto bg-[#f9f9f7] p-5">
        <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex items-center gap-20 lg:flex-justify lg:flex flex-col lg:flex-row">
          {/* Image Section */}
          <div className="relative lg:w-1/2 my-4">
            <div className="absolute md:flex hidden right-[-10%] bottom-[-10%]   flex-col items-center justify-center w-[411px] h-auto rounded-xl bg-[#474747]">
                <div className="p-5  ">
                     <div className="  font-Inter text-[#fff] my-10 font-bold text-xl ">Come and visit us</div>
                <div>
                    <div className="flex items-center gap-2 font-Inter text-[#fff] my-3 font-normal text-base ">
                    <LuPhone className="text-2xl"  />
                    +966534704108
                    </div>
                    <div className="flex items-center gap-2 font-Inter text-[#fff] my-3 font-normal text-base ">
                    <CiMail className="text-2xl"  />

                        info@sanafood.sa
                    </div>
                    <div className="flex items-center gap-2 font-Inter text-[#fff] my-3 font-normal text-base ">
                    <MdOutlineLocationOn className="text-4xl" />
                        Saudi Arabia, Riyadh
                    </div> 
                    </div>
                </div>
              
            </div>
            <Image className="rounded-lg" src={img} alt="" />
          </div>
          {/* End of Image Section */}
          <div className="text-left md:p-0 p-4">
            <h1 className="md:text-4xl text-3xl tracking-tight font-Inter text-[#2C2F24] font-bold">
              <span className="block xl:inline">We provide for your </span>
              <span className="block text-[#D62923] xl:inline">healthy Cheeses</span>
              <span className="block xl:inline">family. </span>
            </h1>
            <p className="mt-3 md:text-lg font-medium font-Inter text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0">
              Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.
            </p>
            {/* Button Section */}
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Link href="/About" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#8897AD] hover:scale-[1.02] md:text-lg md:px-10">
                  More about us
                </Link>
              </div>
            </div>
            {/* End of Button Section */}
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionThree;
