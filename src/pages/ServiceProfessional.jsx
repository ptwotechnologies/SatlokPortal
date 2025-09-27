import React from 'react'
import ServiceSec1 from '../components/serviceProfessionalManual/ServiceSec1'
import ServiceSec2 from '../components/serviceProfessionalManual/ServiceSec2'
import ServiceSec3 from '../components/serviceProfessionalManual/ServiceSec3'
import ServiceSec4 from '../components/serviceProfessionalManual/ServiceSec4'
import ServiceSec5 from '../components/serviceProfessionalManual/ServiceSec5'
import ServiceSec6 from '../components/serviceProfessionalManual/ServiceSec6'
import ServiceSec7 from '../components/serviceProfessionalManual/ServiceSec7'
import ServiceSec8 from '../components/serviceProfessionalManual/ServiceSec8'
import ServiceSec9 from '../components/serviceProfessionalManual/ServiceSec9'
import ServiceSec10 from '../components/serviceProfessionalManual/ServiceSec10'

const ServiceProfessional = () => {
  return (
    <div>
      <div>
        <ServiceSec1/>
      </div>
      <div >
        <ServiceSec2 />
      </div>
      <div>
        <ServiceSec3/>
      </div>
      <div className='hidden lg:block'>
        <ServiceSec4/>
      </div>
      <div>
        <ServiceSec5/>
      </div>
      <div >
        <ServiceSec6/>
      </div>
      <div >
        <ServiceSec7/>
      </div>
      <div className='hidden lg:block'>
        <ServiceSec8/>
      </div>
       <div >
        <ServiceSec10/>
      </div>
      <div >
        <ServiceSec9/>
      </div>
     
    </div>
  )
}

export default ServiceProfessional
