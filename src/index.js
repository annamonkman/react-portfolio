import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.scss'
// import './styles/navbar.module.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
