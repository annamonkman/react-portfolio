import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
  
  return (
    <div className="nav-container">
      <div className="nav-links-container">
        <div className="nav-link-indv-div">
          <Link to="/">
            Home
          </Link>
        </div>
        <div className="nav-link-div">
          <Link to="/about">
            About
          </Link>
        </div>
        <div className="nav-link-div">
          <Link to="/projects">
            Projects
          </Link>
        </div>
        <div className="nav-link-div">
          <Link to="/art">
            Art
          </Link>
        </div>
        <div className="nav-link-div">
          <Link to="/contact">
            Contact
          </Link>
        </div>
      </div>
      
      
    </div>
  )
}

export default Nav
