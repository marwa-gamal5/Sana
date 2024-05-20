import React from 'react';



const SectionThree = () => {
    return (
        <>
            <div className='flex  flex-col  items-center justify-center  md:p-14 p-5'>
                <div className='text-[#D62923] font-medium text-[24px]  font-Inter'>
                    statistics
                </div>
                <div className='text-[#000000] font-bold  text-[32px] my-2 font-Inter '>
                    Look About our video
                </div>
            </div>

            <div className='bg-[#242424] p-14  mb-14 '>
                <div className=' grid lg:grid-cols-4 gap-4 md:grid-cols-2 grid-cols-1  '>
                    <div className='text-center my-3 '>
                        <div className='text-[#fff] font-Montserrat text-4xl font-medium  '>
                            130+
                        </div>
                        <div className='text-2xl font-normal text-[#CBCBCB]  '>
                            Tones Made
                        </div>
                    </div>
                    <div className='text-center my-3 '>
                        <div className='text-[#fff] font-Montserrat text-4xl font-medium  '>
                            250+
                        </div>
                        <div className='text-2xl font-normal text-[#CBCBCB]  '>
                            Years Of Experience
                        </div>
                    </div>
                    <div className='text-center my-3 '>
                        <div className='text-[#fff] font-Montserrat text-4xl font-medium  '>
                            800+
                        </div>
                        <div className='text-2xl font-normal text-[#CBCBCB]  '>
                            Engineer And Worker
                        </div>
                    </div>
                    <div className='text-center my-3'>
                        <div className='text-[#fff] font-Montserrat text-4xl font-medium  '>
                            200+
                        </div>
                        <div className='text-2xl font-normal text-[#CBCBCB]  '>
                            Customer Served
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
};

export default SectionThree;