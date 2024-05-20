import SectionOne from "./SectionOne/SectionOne"
import SectionTwo from "./SectionTwo/SectionTwo"
 import SectionThree from "./SectionThree/SectionThree"
import SectionFour from "./SectionFour/SectionFour";
import SectionFive from "./SectionFive/SectionFive";
import SectionSix from "./SectionSix/SectionSix";
import SectionSiven from "./SectionSiven/SectionSiven";
 function Home() {
   return (
     <>
    < SectionOne/>
    <SectionTwo />
    <SectionThree/>
         <SectionFour/>
         <SectionFive/>
         <SectionSix/>
         <div className='lg:block hidden'>
             <SectionSiven/>
         </div>

     </>
   )
 }
 
 export default Home