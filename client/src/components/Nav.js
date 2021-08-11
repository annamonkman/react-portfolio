import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
  
  return (
    <div className="nav-container">
      <Link to="/">
        Home
      </Link>
      <Link to="/about">
        About
      </Link>
      <Link to="/projects">
        Projects
      </Link>
      <Link to="/art">
        Art
      </Link>
      <Link to="/contact">
        Contact
      </Link>
    </div>
  )
}

export default Nav
