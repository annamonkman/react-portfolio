import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import Nav from './components/Nav'
import NavTop from './components/NavTop'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Art from './components/Art'
import Contact from './components/Contact'

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <NavTop />
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
        <Route exact path="/experience">
          <Experience />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/projects">
          <Projects />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App

