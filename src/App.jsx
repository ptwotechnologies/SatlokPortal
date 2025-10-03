import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import {  Route, Routes } from 'react-router-dom'
import ServiceProfessional from './pages/ServiceProfessional'
import Startup from './pages/Startup'
import Investor from './pages/Investor'
import Pricing from './pages/Pricing'
import ChannelPartner from './pages/ChannelPartner'
import ContactUs from './pages/ContactUs'
import JoinUs from './pages/JoinUs'
import Login from './pages/Login'
import SelectPortal from './pages/SelectPortal'
import RegisterPortal from './pages/RegisterPortal'


function App() {
 

  return (
    
      <div className='bg-white w-full h-screen  '>
      {/* <Navbar/> */}
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
         <Route path="/serviceprofessional" element={<ServiceProfessional/>} />
         <Route path="/startup" element={ <Startup/>} />
         <Route path="/investor" element={  <Investor/>} />
         <Route path="/pricing" element={ <Pricing/>} />
          <Route path="/channelpartner" element={ <ChannelPartner/>} />
          <Route path="/contact" element={ <ContactUs/>} />
           <Route path="/joinUs" element={ <JoinUs/>} />
            <Route path="/login" element={ <Login/>} />
            <Route path="/selectPortal" element={ <SelectPortal/>} />
            <Route path="/registerPortal" element={ <RegisterPortal/>} />
            
      </Routes>
    </div>
   
  )
}

export default App
