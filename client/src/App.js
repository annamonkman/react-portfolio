import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import About from './components/About'
import Projects from './components/Projects'
import Art from './components/Art'

const App = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )
}

export default App

