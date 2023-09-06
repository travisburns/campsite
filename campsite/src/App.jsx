import { useState } from 'react'

import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Link} from "react-router-dom"
import Vans, { loader as vansLoader } from './pages/Vans/Vans'
import './server'
import VanDetail from './pages/Vans/VanDetail'
import Layout from './components/Layout'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import HostLayout from './components/HostLayout'
import HostVans from './pages/Host/HostVans'
import HostVanDetail from './pages/Host/HostVanDetail'
import HostVanPricing from './pages/Host/HostVanPricing'
import HostVanPhotos from './pages/Host/HostVanPhotos'
import HostVanInfo from './pages/Host/HostVanInfo'
import NotFound from './pages/NotFound'


const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout /> }>
  <Route index element={<Home />} />
  <Route path='/about' element={<About />} />
  <Route path='/vans' element={<Vans />} loader ={vansLoader}/>
  <Route path='/vans/:id' element={<VanDetail />} />


  <Route path='host' element={<HostLayout />} >
  <Route index element={<Dashboard />} />
  <Route path='income' element={<Income />} />
  <Route path='reviews' element={<Reviews /> } />
  <Route path='vans' element={<HostVans /> } />
  <Route path='vans/:id' element={<HostVanDetail /> }>
  <Route index element={<HostVanInfo /> } />
  <Route path='pricing' element={<HostVanPricing />} />
  <Route path='photos' element={<HostVanPhotos />} />
  </Route>
  </Route>
  <Route path='*' element={<NotFound />}/>
  </Route>


))


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router}/>
        
    </>
  )
}

export default App
