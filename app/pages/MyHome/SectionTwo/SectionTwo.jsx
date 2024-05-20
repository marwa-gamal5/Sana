
import { GiKnifeFork } from "react-icons/gi";
import { ImSpoonKnife } from "react-icons/im";
import { TbTruckDelivery } from "react-icons/tb";
 function SectionTwo() {
   return (
    <>
<div>
<section className=" md:p-20 p-10 ">
    <div className="container mx-auto text-center px-4">
        
        <div className="text-[#D62923] text-2xl font-medium font-Inter " >sana </div>
        <div className="text-[#000000] text-4xl font-bold font-Inter my-5 ">
        Why Choose Our Favorite Chesses
        </div>
        <div className="flex flex-wrap -mx-4 my-14">
            <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="bg-[#fff] p-8 py-20  hover:shadow-xl shadow-md hover:scale-[1.02] border border-[#B6B6B6] rounded-xl flex items-center justify-center flex-col">
                <GiKnifeFork className="  bg-[#D62923] p-4 rounded-full  text-[#fff] opacity-[0.7] text-7xl" />
                    <i className="fas fa-lock text-4xl text-blue-500 mb-4 my-3"></i>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Qualityfull Chesses</h3>
                    <p className="text-gray-600">We recommended you to subscribe 
We recommur promo program, 
drop your email below t us</p>
                </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="bg-[#fff] p-8 py-20  hover:shadow-xl shadow-md hover:scale-[1.02]   border border-[#B6B6B6] rounded-xl flex items-center justify-center flex-col  ">
                <ImSpoonKnife  className="  bg-[#D62923] p-4 rounded-full  text-[#fff] opacity-[0.7] text-7xl" />
                    <i className="fas fa-globe-americas text-4xl text-blue-500 mb-4"></i>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Healthy Chesses</h3>
                    <p className="text-gray-600">We recommended you to subscribe 
We recommur promo program, 
drop your email below t us</p>
                </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="bg-[#fff] p-8 py-20   hover:shadow-xl shadow-md hover:scale-[1.02]   border border-[#B6B6B6] rounded-xl flex items-center justify-center flex-col">
                <TbTruckDelivery   className="  bg-[#D62923] p-4 rounded-full  text-[#fff] opacity-[0.7] text-7xl" />
                    <i className="fas fa-users text-4xl text-blue-500 mb-4"></i>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Fast Delivery</h3>
                    <p className="text-gray-600">We recommended you to subscribe 
We recommur promo program, 
drop your email below t us</p>
                </div>
            </div>
        </div>
    </div>
</section>
</div>
    </>
   )
 }
 
 export default SectionTwo