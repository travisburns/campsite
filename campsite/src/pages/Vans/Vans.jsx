import React from 'react'
import '../../index.css'
import { Link, useSearchParams } from 'react-router-dom'
import VanDetail from './VanDetail'

const Vans = () => {
   const [searchParams, setSearchParams] = useSearchParams()
   const [vans, setVans] = React.useState([])

   //grab the type searchParams
    const typeFilter = searchParams.get("type")
    console.log(typeFilter)


    React.useEffect(()=> {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const vanElements = vans.map(van => (
       <div key={van.id} className='van-tile'>
        <Link to={`/vans/${van.id}`} >  
            <img src={van.imageUrl} />
            <div className= "van-info">
                <h3>{van.name}</h3>
                <p>${van.price}<span>/day</span></p>
            </div>
            <i className={`van-type ${van.type} selected`}> {van.type}</i>
            </Link>
        </div>
        
    ))


  return (
   <>
   <div className='van-life-container'>
    <h1>Explore our van options</h1>
   <div className='van-list'>
   {vanElements}
   </div>
   
   </div>
   
   </>
  )
}

export default Vans
