import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  
  return (
    <div>
      <div className="nav-container-blue">
        <div className="nav-links-container">
          <div className="nav-link-logo-div">
            <Link to="/">
              AM
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
    </div>
    
  )

}

export default Nav

// if location === home blue
// if location === about orange
// if location === projects grey
// if location === art red
// use location prop that is added to your componeny by connecting  the component to the router via `withRouter`. from there you can apply a conditional style based on which route path you are in. 

