import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    const activeStyles = {
      fontWeight: "bold",
      textDecoration: "underline",
      color: "#161616"
    }



  return (
    <header>
     <Link className='site-logo' to="/">#VanLife</Link>
    <nav>
        <NavLink
          to="/host"
          className={({isActive}) => isActive ? "active-link" : null }
          >
            Host
          </NavLink>

        <NavLink 
            to="/about" 
          className={({isActive}) => isActive ? "active-link" : null }
            >
            About
         </NavLink>

        <NavLink 
            to="/vans"
        className={({isActive}) => isActive ? "active-link" : null }
            >
              Vans
        </NavLink>
        <Link
          to="login" className="login-link">
            <img 
            src="../assets/images/avatar-action.png"
            className='login-icon'
        />

        </Link>
       
        
    </nav>
    </header>
  )
}

export default Header
