import PricingSec1 from '@/components/pricingManual/PricingSec1'
import PricingSec2 from '@/components/pricingManual/PricingSec2'
import PricingSec3 from '@/components/pricingManual/PricingSec3'
import PricingSec4 from '@/components/pricingManual/PricingSec4'

import React from 'react'

const Pricing = () => {
  return (
    <div>
     <div>
        <PricingSec1/>
     </div>
     <div>
        <PricingSec2/>
     </div>
     <div>
      <PricingSec3/>
     </div>
     <div>
      <PricingSec4/>
     </div>
    </div>
  )
}

export default Pricing
