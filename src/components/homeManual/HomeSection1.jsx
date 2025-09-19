import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import img1 from "../../../public/homeSec1.png";


const HomeSection1 = () => {
  return (
    <>
    <div className= "bg-[#001426] lg:bg-white w-full pt-20 lg:pt-38  px-7 rounded-b-4xl" >
      <div
        className="text-sm text-white flex justify-start items-center gap-2 p-2 md:px-4 w-[65%] sm:w-[55%] md:w-[40%] lg:w-[32%] xl:w-[20%] rounded-3xl mt-20 
        bg-gradient-to-r from-[#001426] lg:from-70% via-blue-[#001426] at-130% to-[#F4C12D] 
        "
      >
        <p>We've built a platform for startups</p>
        <IoIosArrowRoundForward size={25} className="hidden md:block" />
      </div>

      <div className="w-full flex flex-col lg:flex-row lg:justify-between items-center mt-3  ">
        <div id="left" className="w-full lg:w-[50%] lg:bg-white  ">
          <div>
            <h1 className="font-bold text-5xl lg:text-6xl lg:text-[#001032] text-white leading-17 tracking-wide lg:leading-snug lg:tracking-normal">
              Everything you need to Scale your startup
            </h1>

            <p className="w-[89%] md:w-[53%] mt-5 text-white lg:text-[#001032] leading-10 tracking-wider  ">
              Get expert-backed support, investor visibility, low-cost services
              and organic audience <br />
              access — all in one system
            </p>

            <button className="mt-11 lg:bg-[#002A30] bg-white text-[#12355C] lg:text-white font-medium p-5 px-15 text-xl rounded-sm">
              Get Started
            </button>
          </div>

          <hr className="lg:hidden mt-25 w-[80%] m-auto border-t border-gray-500" />
          <div className="hidden lg:block">
            <div
              className="text-sm mx-auto lg:mx-0 text-white flex justify-start items-center gap-2 p-2 md:px-4 w-[65%] md:w-[55%] lg:w-[50%] xl:w-[40%] rounded-3xl mt-20 lg:mt-40
        bg-gradient-to-r from-[#001426] lg:from-70% via-blue-[#001426] at-130% to-[#F4C12D]"
            >
              <p>We've built a platform for startups</p>
              <IoIosArrowRoundForward size={25} className="hidden md:block" />
            </div>
          </div>

          <div className="lg:hidden px-6 w-full">
            <div
              className="text-md mx-auto text-white  p-3  w-full md:w-[70%] rounded-4xl mt-20 mb-20
        bg-gradient-to-r from-[#001426] from-40% via-blue-[#001426] at-130% to-[#F4C12D]"
            >
              <p className="text-center">Built for startups ready to grow smarter</p>
             
            </div>
          </div>

          <div className="hidden lg:block text-lg">
            <div className="flex justify-start items-center gap-3 mt-10">
              <div className="w-8 h-8 bg-[#001032]"></div>
              <p className="leading-8 tracking-wider">
                {" "}
                Investors are already waiting for startups like you
              </p>
            </div>
            <div className="flex justify-start items-center gap-3 mt-10">
              <div className="w-8 h-8 bg-[#001032]"></div>
              <p className="leading-8 tracking-wider">
                {" "}
                Investors are already waiting for startups like you
              </p>
            </div>
            <div className="flex justify-start items-center gap-3 mt-10">
              <div className="w-8 h-8 bg-[#001032]"></div>
              <p className="leading-8 tracking-wider">
                Free guidance from experts to become investor-ready
              </p>
            </div>
            <div className="flex justify-start items-center gap-3 mt-10 ">
              <div className="w-8 h-8 bg-[#001032] "></div>
              <p className="leading-8 tracking-wider">
                You can tap into real audience without running a single ad
              </p>
            </div>
          </div>
        </div>

        <div
          id="right"
          className="w-full lg:w-[50%] lg:bg-white rounded-md lg:rounded-sm mt-auto flex justify-center items-center   ">
          <img src={img1} alt="" className="rounded-sm object-fill h-[870px]  hidden lg:block"  />
          <div className="lg:hidden  relative h-100 w-full ">
            <img src={img1} alt="" className="rounded-4xl relative top-0 left-0 w-full h-[350px] object-cover z-10 border border-[#001032]" />
             <img src={img1} alt="" className="rounded-4xl relative top-[-270px] left-0 w-full h-[350px] object-cover z-5 border border-[#001032]" />
             <img src={img1} alt="" className="rounded-4xl relative top-[-540px] left-0 w-full h-[350px] object-cover z-3 border border-[#001032]" />
             <img src={img1} alt="" className="rounded-4xl relative top-[-810px] left-0 w-full h-[350px] object-cover border border-[#001032]" />
              
  
               </div>
        </div>
      </div>
          <div className="hidden lg:block">
            <div className="flex justify-center items-center gap-3 bg-[#002A30] ml-auto text-white w-[50%] mt-4 p-1 rounded-sm ">
        <button>See How It Works</button>
        <IoIosArrowRoundForward size={25} />
          </div>
          </div>
    </div>
     <div className="flex justify-center items-center gap-2 border-2 border-[#002A30]  w-[50%] 
     mt-60 mx-auto p-3 px-4 text-[#001032] text-2xl rounded-sm font-semibold lg:hidden">
        <button>Know more</button>
        <IoIosArrowRoundForward size={25} className="mt-1" />
          </div>
          </>
  );
};

export default HomeSection1;
