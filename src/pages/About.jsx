import React from 'react'
import AboutSec1 from '../components/aboutManual/AboutSec1'
import AboutSec2 from '../components/aboutManual/AboutSec2'
import AboutSec3 from '../components/aboutManual/AboutSec3'
import AboutSec4 from '../components/aboutManual/AboutSec4'
import AboutSec5 from '../components/aboutManual/AboutSec5'
import AboutSec6 from '../components/aboutManual/AboutSec6'

const About = () => {
  return (
    
    <div>
      <div >
     <AboutSec1/>
    </div>
    <div >
      <AboutSec2/>
    </div>
    <div >
      <AboutSec3/>
    </div>
    <div  >
      <AboutSec4/>
    </div>
    <div >
      <AboutSec5/>
    </div>
    <div className='hidden lg:block'>
      <AboutSec6/>
    </div>
    </div>
  )
}

export default About
