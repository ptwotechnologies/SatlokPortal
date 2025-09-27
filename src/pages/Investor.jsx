import React from 'react'
import InvestorSec1 from '../components/investorManual/InvestorSec1'
import InvestorSec2 from '../components/investorManual/InvestorSec2'
import InvestorSec3 from '../components/investorManual/InvestorSec3'
import InvestorSec4 from '../components/investorManual/InvestorSec4'
import InvestorSec5 from '../components/investorManual/InvestorSec5'
import InvestorSec6 from '../components/investorManual/InvestorSec6'
import InvestorSec7 from '../components/investorManual/InvestorSec7'
import InvestorSec8 from '@/components/investorManual/InvestorSec8'
import InvestorSec9 from '@/components/investorManual/InvestorSec9'
import InvestorSec10 from '@/components/investorManual/InvestorSec10'

const Investor = () => {
  return (
    <div>
      <div>
        <InvestorSec1/>
      </div>
      <div>
        <InvestorSec2/>
      </div>
      <div>
        <InvestorSec3/>
      </div>
      <div className='hidden lg:block'>
        <InvestorSec4/>
      </div>
      <div>
        <InvestorSec5/>
      </div>
      <div>
        <InvestorSec6/>
      </div>
      <div>
        <InvestorSec7/>
      </div>
      <div className='hidden lg:block'>
        <InvestorSec8/>
      </div>
      <div>
        <InvestorSec9/>
      </div>
      <div>
        <InvestorSec10/>
      </div>
    </div>
  )
}

export default Investor

