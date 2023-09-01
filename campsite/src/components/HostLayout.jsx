import React from 'react'
import { Link } from 'react-router-dom'
import Dashboard from '../pages/Host/Dashboard'
import Income from '../pages/Host/Income'
import Reviews from '../pages/Host/Reviews'

const HostLayout = () => {
  return (
  
      <nav>
        <Link to="/host">Dashboard </Link>
        <Link to="/host/income">Income </Link>
        <Link to="/host/reviews">Reviews </Link>
      </nav>

  )
}

export default HostLayout
