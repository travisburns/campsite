import { useState } from 'react'

import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Vans from './pages/Vans/Vans'
import './server'
import VanDetail from './pages/Vans/VanDetail'
import Layout from './components/Layout'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import HostLayout from './components/HostLayout'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
    
      <Route element={<Layout /> }>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/vans' element={<Vans />} />
      <Route path='/vans/:id' element={<VanDetail />} />


      <Route path='host' element={<HostLayout />} >
      <Route path='income' element={<Income />} />
      <Route path='reviews' element={<Reviews /> } />
      </Route>

      </Route>
    </Routes>
    </BrowserRouter>
        
    </>
  )
}

export default App
