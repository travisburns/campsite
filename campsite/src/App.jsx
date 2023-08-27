import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
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
    <Routes>
      
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    </Routes>
     
  
  </BrowserRouter>
        
    </>
  )
}

export default App
