import React from 'react'
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import img1 from "../../../public/homeSec2Img1.png"
import { Link } from "react-router-dom"
import { IoArrowForwardCircleSharp } from "react-icons/io5";

const ScrollAreaSec = () => {
  return (
    <div>
        <ScrollArea className="w-full rounded-sm ">
                  <div className="flex w-max justify-center items-center">
                     <div className='flex justify-start items-center  px-3' >
                        <div className=' w-[15%] '>
                        <hr className='border-t border-gray-500 pb-8 w-[80%] '/>
                        <h3 className='text-md pb-2'>NGO/NPO</h3>
                        <img src={img1} alt="" className='rounded-sm w-[85%] h-[200px]' />
                         <Link to="/"><IoArrowForwardCircleSharp size={20} className='relative bottom-6 left-24  text-[#B5B6BA] border-2 border-white rounded-full' /></Link>
                        <p className='pt-4 text-sm leading-6 tracking-wider w-[90%] mb-10 font-extralight'>You’re building a startup that solves a real-world problem </p>
                       
                     </div>
                      <div className=' w-[15%]'>
                        <hr className='border-t border-gray-500 pb-8 w-[80%] '/>
                        <h3 className='text-md pb-2'>Coporates</h3>
                        <img src={img1} alt="" className='rounded-sm w-[85%] h-[200px]' />
                         <Link to="/"><IoArrowForwardCircleSharp size={20} className='relative bottom-6 left-24  text-[#B5B6BA] border-2 border-white rounded-full' /></Link>
                        <p className='pt-4 text-sm leading-6 tracking-wider w-[90%] mb-10 font-extralight'>You want incubated startups curated to your domain</p>
                     </div>
                      <div className=' w-[15%]'>
                        <hr className='border-t border-gray-500 pb-8 w-[80%] '/>
                        <h3 className='text-md pb-2'>Service Professionals</h3>
                        <img src={img1} alt="" className='rounded-sm w-[85%] h-[200px]' />
                         <Link to="/"><IoArrowForwardCircleSharp size={20} className='relative bottom-6 left-24  text-[#B5B6BA] border-2 border-white rounded-full' /></Link>
                        <p className='pt-4 text-sm leading-6 tracking-wider w-[90%] mb-10 font-extralight'>You want incubated startups curated to your domain</p>
                     </div>
                     </div>
       
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
    </div>
  )
}

export default ScrollAreaSec
