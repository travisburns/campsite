import React from 'react'
import { useOutletContext } from 'react-router-dom'
const HostVanPricing = () => {
  const {currentVan} = useOutletContext()
  return (
    <div>
      Pricing
    </div>
  )
}

export default HostVanPricing
