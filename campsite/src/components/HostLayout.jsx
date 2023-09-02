import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Dashboard from '../pages/Host/Dashboard'
import Income from '../pages/Host/Income'
import Reviews from '../pages/Host/Reviews'

const activeStyles = {
  fontWeight: "bold",
  textDecoration: "underline",
  color: "#161616",
}


const HostLayout = () => {
  return (
  <>
      <nav className='host-nav'>
        <NavLink 
        to="/host"
        end={true}
        style={({isActive}) => {isActive ? activeStyles : null}}
        >Dashboard 
        </NavLink>
        <NavLink 
        to="/host/income"
          style={({isActive}) => {isActive ? activeStyles : null}}
          >Income 
          </NavLink>
        <NavLink 
        to="/host/reviews"
          style={({isActive}) => {isActive ? activeStyles : null}}
        >
          Reviews 
          </NavLink>
      </nav>
      <Outlet />
</>
  )
}

export default HostLayout
