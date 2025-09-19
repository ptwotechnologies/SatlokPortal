import React from 'react'
import logo from "../../public/logo2.png"
import NavbarSheet from '../components/manual/NavbarSheet'
import NavbarDesk from '../components/manual/NavbarDesk'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full h-[15%] lg:h-[20%] flex justify-between items-center px-5 bg-[#001426] lg:bg-white fixed top-0 z-50'>
      <div>
        <Link to="/" ><img src={logo} alt="Logo"   className='w-25  ' /></Link>    
      </div>
      

      <div className=" hidden lg:block"  >
        <NavbarDesk/>
      </div>
      
      <div>
        <NavbarSheet/>
      </div>
    </div>
  )
}

export default Navbar

