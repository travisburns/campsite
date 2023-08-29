import { useState } from 'react'

import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Vans from './pages/Vans'
import "./pages/server"






function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <header>
      <Link to='/'>#VANLIFE</Link>
        <nav>
          <Link to='/about'>About</Link>
        </nav>
      </header>
      <Link to="/">Home </Link>
      <Link to="/about">About </Link>
      <Link to="/vans">Vans</Link>
    <Routes>
      
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/vans' element={<Vans />} />
    </Routes>
     
  
  </BrowserRouter>
        
    </>
  )
}

export default App
