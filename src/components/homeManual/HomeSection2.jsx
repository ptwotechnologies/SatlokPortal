import React from 'react'
import img1 from "../../../public/homeSec2Img1.png"
import img2 from "../../../public/homeSec2Img2.png"
import img3 from "../../../public/homeSec2Img3.png"
import ScrollAreaSec from './ScrollAreaSec'



const HomeSection2 = () => {
  return (
    <div className=' mt-12 lg:mt-25 bg-[#001426] lg:bg-[white] rounded-md' >
        <div id='top' className='flex flex-col lg:flex-row lg:justify-center lg:bg-white bg-[#001426] rounded-2xl
        lg:items-center lg:gap-30 gap-10 p-5  font-medium leading-6 tracking-wider text-white lg:text-[#001032]
        ' >
            <div className='self-start flex lg:flex-col gap-3 justify-center items-center'>
                <div className='w-75 lg:w-45 h-45 bg-[#DEDEDE] rounded-3xl '>

                </div>
                <p className='text-sm text-center hidden lg:block'>Cross-Industry Community</p>
                <p className='text-xs  mr-5 break-words whitespace-normal w-[60%] lg:hidden font-light'> Investors are already waiting for startups like you</p>
            </div>
           <div className='self-end flex lg:flex-col gap-1 lg:gap-3 justify-end items-center'>
             <p className='text-xs  ml-5  break-words whitespace-normal w-[60%] lg:hidden font-light'> Investors are already waiting for startups like you</p>
                <div className='w-75 lg:w-45 h-45 bg-[#DEDEDE] rounded-3xl '>

                </div>
                <p className='text-sm text-center hidden lg:block'>Cross-Industry Community</p>
               
            </div>
            <div className='self-star flex lg:flex-col gap-3 justify-center items-center'>
                <div className='w-75 lg:w-45 h-45 bg-[#DEDEDE] rounded-3xl '>

                </div>
                <p className='text-sm text-center hidden lg:block'>Cross-Industry Community</p>
                <p className='text-xs  mr-5 break-words whitespace-normal w-[60%] lg:hidden font-light'> Investors are already waiting for startups like you</p>
            </div>


            <div className='  lg:flex-col gap-3 justify-center items-center hidden lg:block'>
                <div className='w-75 lg:w-45 h-45 bg-[#DEDEDE] rounded-3xl '>

                </div>
                <p className='text-sm text-center hidden lg:block'>Cross-Industry Community</p>
                <p className='text-xs  mr-5 break-words whitespace-normal w-[60%] lg:hidden'> Investors are already waiting for startups like you</p>
            </div>
           <div className='  lg:flex-col gap-3 justify-center items-center hidden lg:block'>
                <div className='w-75 lg:w-45 h-45 bg-[#DEDEDE] rounded-3xl '>

                </div>
                <p className='text-sm text-center hidden lg:block'>Cross-Industry Community</p>
                <p className='text-xs  mr-5 break-words whitespace-normal w-[60%] lg:hidden'> Investors are already waiting for startups like you</p>
            </div>

        </div>




        <div id='bottom' className='bg-[#001426] w-full text-white rounded-4xl mt-13 '>
            <div className='hidden lg:block'>
                <h1 className='text-4xl font-bold p-12'>Who is this portal for?</h1>
             <div className='flex justify-center items-center gap-5 mx-20  ' >
                <div className=' w-[30%]'>
                <hr className='border-t border-gray-500 pb-8 w-[90%] '/>
                <h3 className='text-2xl pb-5'>Startups</h3>
                <img src={img1} alt="" className='rounded-2xl w-[90%] h-[400px]' />
                <p className='pt-4 text-md leading-6 tracking-wider w-[90%] mb-10'>You’re building a startup that solves a real-world problem </p>
             </div>
             <div className=' w-[30%]'>
                <hr className='border-t border-gray-500 pb-8 w-[90%] ' />
                <h3 className='text-2xl pb-5'>Investors</h3>
                <img src={img2} alt="" className='rounded-2xl w-[90%] h-[400px]' />
                <p className='pt-4 text-md leading-6 tracking-wider w-[90%] mb-10'>You want incubated startups curated to your domain </p>
             </div>
             <div className=' w-[30%]'>
                <hr className='border-t border-gray-500 pb-8 w-[90%] '/>
                <h3 className='text-2xl pb-5'>Service Professionals</h3>
                <img src={img3} alt="" className='rounded-2xl w-[90%] h-[400px]' />
                <p className='pt-4 text-md leading-6 tracking-wider w-[90%] mb-17'>You want startups curated to your domain</p>
             </div>
             </div>

            </div>

            <div className='lg:hidden'>
            <ScrollAreaSec/>

            </div>
        </div>
      
    </div>
  )
}

export default HomeSection2
