import React from 'react'
import StartupSec1 from '../components/startupManual/StartupSec1'
import StartupSec2 from '../components/startupManual/StartupSec2'
import StartupSec3 from '../components/startupManual/StartupSec3'
import StartupSec4 from '../components/startupManual/StartupSec4'
import StartupSec5 from '../components/startupManual/StartupSec5'
import StartupSec6 from '../components/startupManual/StartupSec6'
import StartupSec7 from '../components/startupManual/StartupSec7'
import StartupSec8 from '../components/startupManual/StartupSec8'
import StartupSec9 from '../components/startupManual/StartupSec9'
import StartupSec10 from '../components/startupManual/StartupSec10'

const Startup = () => {
  return (
    <div>
      <div>
        <StartupSec1/>
      </div>
      <div>
        <StartupSec2/>
      </div>
      <div>
        <StartupSec3/>
      </div>
      <div className='hidden lg:block'>
        <StartupSec4/>
      </div>
      <div>
        <StartupSec5/>
      </div>
      <div>
        <StartupSec6/>
      </div>
      <div>
        <StartupSec7/>
      </div>
      <div className='hidden lg:block'>
        <StartupSec8/>
      </div>
      <div>
        <StartupSec9/>
      </div>
      <div>
        <StartupSec10/>
      </div>
    </div>
  )
}

export default Startup
