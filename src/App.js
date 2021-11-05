import React, { useEffect } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import About from './components/About'
import Projects from './components/Projects'
import Art from './components/Art'




const App = () => {

  const location = useLocation()
  console.log('LOCATION', useLocation())

  useEffect(() => {
    const currentPath = location.pathname
    console.log('current path', currentPath)
    const searchParams = new URLSearchParams(location.search)
    console.log('search params', searchParams)
  }, [location])

  // useEffect(()=> {
  //   { 
  //     if (location.pathname === '/art'){
  //     // Change background color
  //     }
  //   }
  // }, [location])


  return (

    <div style={
      { backgroundColor: location.pathname === '/art' ? '#151515' : 'transparent' }
      // { backgroundImage: location.pathname === '/art' ? 'none' : 'url("../assets/papertex.png")' }
    }>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/art">
          <Art />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/projects">
          <Projects />
        </Route>
      </Switch>
    </div>

  )

}

export default App

