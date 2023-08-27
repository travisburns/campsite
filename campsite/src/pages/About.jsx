import React from 'react'
import { Link } from 'react-router-dom'
import bgImg from '../assets/about-hero.png'
const About = () => {
  return (
    <div className='about-page-container'>
      <img src={bgImg} className='about-hero-image' />
      <div className='about-page-content'>
        <h1>Don't Squeeze in a sedan when you could relax in a van.</h1>
        <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your trip is without a hitch. (Hitch costs extra)</p>
        <p>Our team is full of vanlife enthusiasts who know first hand the world on 4 wheels.</p>
      </div>
      <div className='about-page-cta'>
        <h2>Your desitination is waiting. <br /> Your van is ready</h2>
        <Link className='link-button' to="/vans">Explore our Vans!</Link>
      </div>
    </div>
  )
}

export default About
