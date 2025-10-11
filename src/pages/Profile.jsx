
import ProfileSec1 from '@/components/profilemanual/ProfileSec1'
import Sidebar from '@/components/profilemanual/Sidebar'
import React, { useState } from 'react'

const Profile = () => {
   const [isOpen, setIsOpen] = useState(true);
  return (
  <div className='bg-gray-100'>
    <div className='flex '>
      <div className={`w-[20%] ${isOpen ? 'w-[20%]' : 'w-[0%]'} transition-all duration-300`}>
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
      </div>
     <div className={`w-[80%]  ${isOpen ? 'w-[80%]' : 'w-[350%]' } transition-all duration-300`}>
       <ProfileSec1/>
     </div>
    </div>
  </div>
  )
}

export default Profile

