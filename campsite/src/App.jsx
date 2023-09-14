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
import Error from './components/Error'
import Login from './pages/Vans/Login'

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout /> } errorElement={<Error />}  >
  <Route index element={<Home />} />
  <Route path='/about' element={<About />} />
  <Route
    path='login'
    element={<Login />} 
    />
  <Route 
    path='/vans' 
    element={<Vans />} 
    errorElement={<Error />}
    loader ={vansLoader}
    
    />
  <Route path='/vans/:id' element={<VanDetail />} loader={async() => { return null}}   />


  <Route path='host' element={<HostLayout />} loader={async() => { return null}} >
  <Route index element={<Dashboard />} loader={async() => { return null}} />
  <Route path='income' element={<Income />} loader={async() => { return null}} />
  <Route path='reviews' element={<Reviews /> } loader={async() => { return null}} />
  <Route path='vans' element={<HostVans /> } loader={async() => { return null}} />
  <Route path='vans/:id' element={<HostVanDetail /> } loader={async() => { return null}} >
  <Route index element={<HostVanInfo /> } loader={async() => { return null}} />
  <Route path='pricing' element={<HostVanPricing />} loader={async() => { return null}} />
  <Route path='photos' element={<HostVanPhotos />} loader={async() => { return null}} />
  </Route>
  </Route>
  <Route path='*' element={<NotFound />} loader={async() => { return null}} />
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
