import React from 'react'
import { Link } from 'react-router-dom'
// import styles from '../styles/navbar.module.css'

const Nav = () => {


  
  return (
    <div className="sticky">
      <div className="nav-container-blue">
        <div className="nav-links-container">
          <div className="nav-link-logo-div">
            <Link className="nav-link-to" to="/">
              Home, 
            </Link>
          </div>
          <div className="nav-link-indv-div">
            <Link className="nav-link-to" to="/about">
              About,
            </Link>
          </div>
          <div className="nav-link-indv-div">
            <Link className="nav-link-to" to="/projects">
              Projects,
            </Link>
          </div>
          <div className="nav-link-indv-div">
            <Link className="nav-link-to" to="/art">
              Art,
            </Link>
          </div>
        </div>
      </div>
      <div className="dot-home">
        <div className="dot1"></div>
        <div className="dot2"></div>
        <div className="dot3"></div>
        <div className="dot4"></div>
        <div className="dot5"></div>
        <div className="dot6"></div>
        <div className="dot7"></div>
        <div className="dot8"></div>
        <div className="dot9"></div>
        <div className="dot10"></div>
        <div className="dot11"></div>
        <div className="dot12"></div>
        <div className="dot13"></div>
        <div className="dot14"></div>
        <div className="dot15"></div>
        <div className="dot16"></div>
        <div className="dot17"></div>
        <div className="dot18"></div>
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

