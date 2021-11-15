import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { AiOutlineMenu } from 'react-icons/ai'
// import { FaTimes } from 'react-icons/fa'
// import { Squash as Hamburger } from 'hamburger-react'


// import styled from 'styled-components'

// import styles from '../styles/navbar.module.css'

const Nav = () => {

  //asigning location variable
  const location = useLocation()

  //destructuring pathname from location

  const { pathname } = location

  //JavaScript split method to get the name of the path in array
  const splitLocation = pathname.split('/')


  const [toggleMenu, setToggleMenu] = useState(false)
  // const [toggleBars, setToggleBars] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  // const [isOpen, setOpen] = useState()

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth)
    }
    window.addEventListener('resize', changeWidth)
    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [])
  
  return (
    <div className="nav-container">
      <div className="nav-links-container">
        {(toggleMenu || screenWidth > 700) && (
          <>
            <div className={splitLocation[1] === '' ? 'active' : ''}>
              <Link className="nav-link home-link" to="/">
                Home, 
              </Link>
            </div>
            <div className={splitLocation[1] === 'about' ? 'active' : ''}>
              <Link className="nav-link" to="/about">
                About,
              </Link>
            </div>
            <div className={splitLocation[1] === 'projects' ? 'active' : ''}>
              <Link className="nav-link" to="/projects">
                Dev Projects,
              </Link>
            </div>
            <div className={splitLocation[1] === 'art' ? 'active' : ''}>
              <Link className="nav-link" to="/art">
                Film & 3D,
              </Link>
            </div>
          </>
          
        )}
        <AiOutlineMenu size={25} className="bars" onClick={toggleNav}/>
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

