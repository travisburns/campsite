import React, {useState, useEffect} from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'



const HostVanDetail = () => {
    const {id} = useParams()
  const [currentVan, setCurrentVan] = React.useState(null)
    

    React.useEffect(() => {
        fetch(`/api/host/vans/${id}`)
        .then(res => res.json())
        .then(data =>setCurrentVan(data.vans))
    }, [])
  
  if (!currentVan) {
    return <h1>Loading...</h1>
  }



  
    return (
        <section>
            <Link
                to=".."
                relative='path'
                className='back-button'
                >&larr; <span>Back to all vans</span></Link>
            <div className='host-van-detail-layout-container'>
      <div className='host-van-detail'>
      <img src={currentVan.imageUrl} />
      <div className='host-van-detail-info-text'>
      <h2>{currentVan.name}</h2>
      <p>{currentVan.price}</p>
      <p>{currentVan.type}</p>
      </div>
    </div>
    <Outlet />
    </div>
        </section>

    
  )
}

export default HostVanDetail
