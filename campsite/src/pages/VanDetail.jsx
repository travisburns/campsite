import React from 'react'
import {useParams} from "react-router-dom"



const VanDetail = () => {
    const params = useParams()
    console.log(params)
  return (
    <h1>
      Van detail Page goes here
    </h1>
  )
}

export default VanDetail
