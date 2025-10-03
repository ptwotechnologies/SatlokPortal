
import JoinSec3 from '@/components/joinUsManual/JoinSec3'
import JoinSec4 from '@/components/joinUsManual/JoinSec4'
import JoinUsSec1 from '@/components/joinUsManual/JoinUsSec1'
import JoinUsSec2 from '@/components/joinUsManual/JoinUsSec2'
import JoinUsSec5 from '@/components/joinUsManual/JoinUsSec5'
import JoinUsSec6 from '@/components/joinUsManual/JoinUsSec6'
import JoinUsSec7 from '@/components/joinUsManual/JoinUsSec7'
import JoinUsSec8 from '@/components/joinUsManual/JoinUsSec8'
import JoinUsSec9 from '@/components/joinUsManual/JoinUsSec9'
import React from 'react'

const JoinUs = () => {
  return (
    <div>
      <div>
        <JoinUsSec1/>
      </div>
      <div>
        <JoinUsSec2/>
      </div>
      <div>
        <JoinSec3/>
      </div>
      <div>
        <JoinSec4/>
      </div>
      <div>
        <JoinUsSec5/>
      </div>
      <div>
        <JoinUsSec6/>
      </div>
      <div className='hidden lg:block'>
        <JoinUsSec7/>
      </div>
      <div>
        <JoinUsSec8/>
      </div>
      <div>
        <JoinUsSec9/>
      </div>
    </div>
  )
}

export default JoinUs
