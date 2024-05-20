
import Link from 'next/link';
function Banner({title,subTitle ,route , route2}) {
    return (

        <>
            <div className=' h-auto' style={{backgroundImage: `url(/Img/Header.jpg) `, backgroundSize: 'cover'}}>

                <div className='flex items-center justify-start lg:p-28 md:p-14 p-10'>


                    <div className='border-l-[5px] border-[#D62923] rounded-md mt-20' >


                        <div className=" font-Inter  md:text-7xl text-[30px]   leading-snug text-[#fff]  md:ms-10 ms-5">
                            {title}
                        </div>
                        <div className=" font-Inter  md:text-7xl text-[30px]   leading-snug text-[#fff]  md:ms-10 ms-5 my-4">
                            {subTitle}
                        </div>
                    </div>

                </div>
            </div>

            <div className='w-full bg-[#fff] p-7 '>

                <div className='ms-20'>
                    <nav className="flex bg-[#fff]" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                            <li className="inline-flex items-center">
                                <Link href="/"
                                      className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-[#D62923]  ">
                                    <svg className="w-3 h-3 me-2.5" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg"
                                         fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                                    </svg>
                                    Home
                                </Link>
                            </li>
                            <li aria-current="page">

                                <Link href={`/${route}`}
                                      className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-[#D62923]  ">
                                    <div className="flex items-center">
                                        <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true"
                                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                  stroke-width="2" d="m1 9 4-4-4-4"/>
                                        </svg>


                                          {route}
                                    </div>
                                </Link>

                            </li>
                            

                            <li aria-current="page">
                                <div className="flex items-center">
                                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                              stroke-width="2" d="m1 9 4-4-4-4"/>
                                    </svg>
                                    <span
                                        className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">{route2}</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>


            </div>
        </>
    );
}

export default Banner;
