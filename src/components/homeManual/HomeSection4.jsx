import React from "react";
import img1 from "../../../public/homeSec4.png";

const HomeSection4 = () => {
  return (
    <div >
      <div className="bg-[#001D21] text-white hidden lg:block ">
        <div id="top ">
        <h1 className="text-4xl px-8 py-15 font-semibold">
          Consultations that move you forward
        </h1>
        <div className="grid grid-cols-3 gap-x-70 gap-y-30 m-10 mx-32">
          <div className="flex">
            <div className="border-l h-17 border-gray-700 p-2"></div>
            <div>
              <h1 className="text-3xl">1</h1>
              <p className="text-sm tracking-wide">
                Legal paperwork, compliances, agreements
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="border-l h-17 border-gray-700 p-2"></div>
            <div>
              <h1 className="text-3xl">2</h1>
              <p className="text-sm tracking-wide">
                Building an MVP or scaling tech without wasting months
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="border-l h-17 border-gray-700 p-2"></div>
            <div>
              <h1 className="text-3xl">3</h1>
              <p className="text-sm tracking-wide">
                Branding that earns trust, not just looks good
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="border-l h-17 border-gray-700 p-2"></div>
            <div>
              <h1 className="text-3xl">4</h1>
              <p className="text-sm tracking-wide">
                Marketing that brings in real users, not just traffic
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="border-l h-17 border-gray-700 p-2"></div>
            <div>
              <h1 className="text-3xl">5</h1>
              <p className="text-sm tracking-wide">
                Fundraising prep — how to talk to investors like you know your
                stuff
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="border-l h-17 border-gray-700 p-2"></div>
            <div>
              <h1 className="text-3xl">6</h1>
              <p className="text-sm tracking-wide">
                Understanding where your money’s going (and why it matters)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="bottom" className="w-full flex justify-center items-center ">
        <div id="left" className="w-[30%] mx-15">
          <h1 className="text-4xl font-semibold tracking-wide">Modern software, premium service</h1>
          <p className="text-sm text-[#B2BFC1] py-10">
            Solo GPs choose AngelList for all-in-one fund management.
            Institutional funds stick with us for software-enabled service
            that’s second to none.
          </p>
          <button className="bg-[#BDBBFF] text-[#001D21] p-4 px-7 rounded-sm"> Explore demo</button>
        </div>
        <div id="right" className="w-[70%]  ">
          <img src={img1} alt="" className="h-[550px] w-full" />
        </div>
      </div>
      </div>

      <div id="phoneScreen" className="text-white w-full lg:hidden" >
        <div className="flex  items-center gap-3 relative top-0 left-0 bg-[#F4C12D33] h-30 p-4 rounded-t-2xl">
              <h1 className="text-5xl relative left-5">1</h1>
              <p className="text-3xl tracking-wide opacity-27">
                Legal paperwork, compliances, agreements
              </p>
          </div>
          <div className="flex  items-center gap-3 relative top-[-10px] left-0 bg-[#F4C12D66] h-30 p-4 rounded-t-2xl">
              <h1 className="text-5xl relative left-5">2</h1>
              <p className="text-3xl tracking-wide opacity-27">
                Legal paperwork, compliances, agreements
              </p>
          </div>
           <div className="flex  items-center gap-3 relative top-[-20px] left-0 bg-[#F4C12D99] h-30 p-4 rounded-t-2xl">
              <h1 className="text-5xl relative left-5">3</h1>
              <p className="text-3xl tracking-wide opacity-27">
                Legal paperwork, compliances, agreements
              </p>
          </div>
           <div className="flex  items-center gap-3 relative top-[-30px] left-0 bg-[#F4C12DCC] h-30 p-4 rounded-t-2xl">
              <h1 className="text-5xl relative left-5">4</h1>
              <p className="text-3xl tracking-wide opacity-15">
                Legal paperwork, compliances, agreements
              </p>
          </div>
           <div className="flex  items-center gap-3 relative top-[-40px] bg-[#F4C12DE5] h-30 p-4 rounded-t-2xl">
              <h1 className="text-5xl relative left-5">5</h1>
              <p className="text-3xl tracking-wide opacity-12">
                Legal paperwork, compliances, agreements
              </p>
          </div>
          <div className="bg-[#F4C12DE5] rounded-b-2xl">
            <div className="flex  items-center gap-3 relative top-[-50px] bg-[#F4C12DE5] h-30 p-4 rounded-t-2xl">
              <h1 className="text-5xl relative left-5">6</h1>
              <p className="text-3xl tracking-wide opacity-10">
                Legal paperwork, compliances, agreements
              </p>
          </div>
          <div className="flex items-center px-4 gap-3 relative top-[-60px] ">
            <div className="border-l h-17 border-white  "></div>
              <p className="text-3xl tracking-wide ">
                Legal paperwork, compliances, agreements
              </p>
            
          </div>
          
          </div>
         
      </div>
    </div>
  );
};

export default HomeSection4;
