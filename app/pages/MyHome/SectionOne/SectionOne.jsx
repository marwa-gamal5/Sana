import Image from "next/image";
import img from '../../../../public/Img/bg.jpg';
import Link from 'next/link';
function SectionOne() {
  return (
   
    <>
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
  <div className="absolute inset-0">
  
    <Image src={img} alt="Background Image" className="object-cover object-center w-full h-full" />

    <div className="absolute inset-0 "></div>
  </div>
  
  <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
    
 
       <div className="font-Poppins md:text-7xl text-[35px] font-semibold leading-tight text-[#fff] mb-10">
         Royal cheese from the <br/> heart of Saudi Arabia
       </div>
       <div className="flex justify-center items-center gap-10">
           <Link href="/Products">
         <button className="text-xl font-semibold bg-[#8897AD] p-4 text-[#fff] rounded-xl">
           Our Products
         </button>
           </Link>

           <Link href="/About">
         <button className="text-xl font-semibold border border-[#8897AD] p-4 text-[#fff] rounded-xl">
           About Sana
         </button>
           </Link>
       </div>
     
  </div>
</div>
    </>
  );
}

export default SectionOne;
