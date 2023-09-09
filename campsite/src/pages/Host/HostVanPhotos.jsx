import React from 'react'
import { useOutletContext } from 'react-router-dom'
const HostVanPhotos = () => {
  const {currentVan} = useOutletContext()
  return (
    <div>
     Photos
    </div>
  )
}

export default HostVanPhotos
