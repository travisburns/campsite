import { useState } from 'react'

import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Link} from "react-router-dom"
import Vans, { loader as vansLoader } from './pages/Vans/Vans'
import './server'
import VanDetail, {loader as vanDetailLoader} from './pages/Vans/VanDetail'
import Layout from './components/Layout'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import HostLayout from './components/HostLayout'
import HostVans, {loader as hostVansLoader} from './pages/Host/HostVans'
import HostVanDetail, {loader as hostVanDetailLoader} from './pages/Host/HostVanDetail'
import HostVanPricing from './pages/Host/HostVanPricing'
import HostVanPhotos from './pages/Host/HostVanPhotos'
import HostVanInfo from './pages/Host/HostVanInfo'
import NotFound from './pages/NotFound'
import Error from './components/Error'
import Login, {loader as loginLoader} from './pages/Login'
import {requireAuth} from "./utils"






const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
  <Route index element={<Home />} />
  <Route path="about" element={<About />} />
  <Route
    path="login"
    element={<Login />}
    loader={loginLoader}
  />
  <Route
    path="vans"
    element={<Vans />}
    errorElement={<Error />}
    loader={vansLoader}
  />
  <Route 
    path="vans/:id" 
    element={<VanDetail />} 
    loader={vanDetailLoader}
  />

  <Route path="host" element={<HostLayout />}>
    <Route
      index
      element={<Dashboard />}
      loader={async () => {
       return await requireAuth()
      
      }}
    />
    <Route
      path="income"
      element={<Income />}
      loader={async () => await requireAuth()}
    />
    <Route
      path="reviews"
      element={<Reviews />}
      loader={async () => await requireAuth()}
    />
    <Route
      path="vans"
      element={<HostVans />}
      loader={hostVansLoader}
    />
    <Route
      path="vans/:id"
      element={<HostVanDetail />}
      loader={hostVanDetailLoader}
    >
      <Route
        index
        element={<HostVanInfo />}
        loader={async () => await requireAuth()}
      />
      <Route
        path="pricing"
        element={<HostVanPricing />}
        loader={async () => await requireAuth()}
      />
      <Route
        path="photos"
        element={<HostVanPhotos />}
        loader={async () => await requireAuth()}
      />
    </Route>
  </Route>
  <Route path="*" element={<NotFound />} />
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
