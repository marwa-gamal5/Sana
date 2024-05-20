import Image from "next/image";
import img from '../../../../public/Img/Video.png';

const SectionTwo = () => {
    return (
        <>
            <div className='bg-[#F5F5F5]'>
                <div className='flex flex-col items-center justify-center md:p-14 p-5  '>

                    <div className='text-[#D62923] font-medium text-[24px]  font-Inter'>
                        How we are ?
                    </div>
                    <div className='text-[#000000] font-bold  text-[32px] my-2 font-Inter '>
                        Look About our video
                    </div>
                    <Image src={img} alt=" Image" className='my-10' />
                </div>
            </div>

        </>
    );
};

export default SectionTwo;