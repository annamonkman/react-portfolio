import React from 'react'
import { Link } from 'react-router-dom'

// import PropTypes from 'prop-types'
// import { withRouter } from 'react-router'

const Nav = () => {

  
  return (

    <div className="nav-container">
      <div className="nav-links-container">
        <div className="nav-link-indv-div">
          <Link to="/">
            Home,
          </Link>
        </div>
        <div className="nav-link-indv-div">
          <Link to="/about">
            About,
          </Link>
        </div>
        <div className="nav-link-indv-div">
          <Link to="/projects">
            Projects,
          </Link>
        </div>
        <div className="nav-link-indv-div">
          <Link to="/art">
            Art,
          </Link>
        </div>
      </div>
      
      
    </div>
  )
}

export default Nav
