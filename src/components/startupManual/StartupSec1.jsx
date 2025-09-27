import React from 'react'
import img from "/homeSec1.png";

const StartupSec1 = () => {
  return (
    <div className='pt-64 lg:pt-20 w-full lg:px-6 px-4 py-2 flex flex-col  justify-center items-center gap-5 h-[900px] lg:h-auto rounded-b-2xl lg:rounded-none
              bg-gradient-to-b from-[#001032] from-40% via-blue-[#001032] at-130% to-[#003198] lg:bg-none text-white '>
          <h6 className='lg:hidden mx-auto'>For Startup</h6>
         <div id='left' className='w-full text-center lg:text-start  lg:my-5 lg:text-[#001032]   lg:pt-3 '>
          <h1 className=' text-5xl lg:text-4xl lg:font-bold font-semibold lg:leading-11 leading-15 tracking-wide lg:w-[80%] lg:hidden'>Grow Your Business by Partnering with India’s Fastest-Growing Startup Ecosystem</h1>
            <button className='lg:hidden  mt-7 lg:bg-[#001032] lg:text-white bg-white text-[#001032] p-4 px-13 rounded-sm text-lg'>Get Listed</button>
         </div>
    
         <div id='right' className='w-full my-5 lg:w-[80%]  '>
           <div className='h-[330px] lg:h-[400px] bg-[#D8D8D8] lg:rounded-sm rounded-2xl lg:flex lg:justify-center lg:items-end'>
            <img src={img} alt="Image" className='object-cover h-full w-full lg:hidden rounded-2xl'/>
             <button className='hidden lg:block mb-3 lg:bg-[#001032] lg:text-white bg-white text-[#001032] p-3 px-15 rounded-sm text-lg'>Get Listed</button>
           </div>
         </div>
         <div className='hidden lg:block text-center  w-[60%]'>
            <h1 className='  text-center text-4xl font-bold  leading-11  tracking-wide  text-[#001032]'>Grow Your Business by Partnering with India’s Fastest-Growing Startup Ecosystem</h1>
         </div>
        </div>
  )
}

export default StartupSec1
