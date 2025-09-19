import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import {  Route, Routes } from 'react-router-dom'


function App() {
 

  return (
    <div className='bg-white w-full h-screen  '>
      <Navbar/>
      
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
      </Routes>
    </div>
  )
}

export default App
