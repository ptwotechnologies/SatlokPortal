import React from 'react'
import { IoMdMenu } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import  requestLogo  from "/requestlogo.png";
import  connectLogo from "/connectlogo.png";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { IoIosHelpCircle } from "react-icons/io";
import { PiSignOut } from "react-icons/pi";
import loginLogo from "/loginlogo.png"
import { Link } from 'react-router-dom';

const Sidebar = ({isOpen, setIsOpen}) => {
 

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };


    
  return (
  <div className='overflow-hidden   sticky top-0' >
     <div className='flex   rounded-xl bg-white h-screen'>
      <div id='leftsidebar' className='bg-[#001426]  p-4 m-2 rounded-md '>
       <div className='py-6'>
             <IoMdMenu className='text-white' size={27} onClick={handleToggle}/>
       </div>
       <div className=''>
         <CgProfile className='text-gray-500 my-3' size={27} onClick={handleToggle} />
         <img src={requestLogo} alt=" Logo " className='w-7 my-3' onClick={handleToggle}/>
         <img src={connectLogo} alt="logo" className='w-7 my-3' onClick={handleToggle} />
         <IoNotificationsOutline className='text-gray-500 my-3' size={27} onClick={handleToggle}/>
       </div>
       <div className='text-gray-300 absolute bottom-10'>
        <IoSettings size={27} className='my-3' onClick={handleToggle}/>
        <IoIosHelpCircle size={27} className='my-3' onClick={handleToggle} />
        <PiSignOut size={27} className='my-3' onClick={handleToggle}/>
       </div>
     </div>

     {isOpen && (
      <div id='rightsidebar ' className={`m-2 rounded-md overflow-hidden ${isOpen ? 'w-full': 'w-0'} transition-all duration-300`}>
      <div className='relative top-[-28px] right-5'>
             <img src={loginLogo} alt="logo" className='w-45 ' />
       </div>
       <div className=' relative bottom-10 2xl:bottom-20 xl:bottom-18 lg:bottom-7 text-[#001426]'>
        <ul>
          <Link to="/profile"><li className=' my-3 text-lg font-medium bg-[#001426] text-white px-4 rounded-md'>Profile</li></Link>
          <Link to="/profile"><li className=' my-3 text-lg font-medium  px-4 rounded-md'>Requests</li></Link>
          <Link to="/profile"><li className='my-3 text-lg font-medium px-4 rounded-md'>Connect</li></Link>
          <Link to="/profile"><li className=' my-3 text-lg font-medium  px-4 rounded-md'>Notification</li></Link>
        </ul>
        
       </div>
       <div className='absolute bottom-10'>
       <ul>
          <Link to="/profile"><li className=' my-3 text-lg font-medium  px-4 rounded-md'>Settings</li></Link>
          <Link to="/profile"><li className=' my-3 text-lg font-medium px-4 rounded-md'>Help</li></Link>
          <Link to="/profile"><li className='  text-lg font-medium px-4 rounded-md'>Sign out</li></Link>
        </ul>
       </div>
     </div>
     )}
     </div>
  </div>
  )
}

export default Sidebar

