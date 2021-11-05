import React from 'react'
import homeimage02 from '../assets/homeimage02.png'
// import homeimage07 from '../assets/homeimage07.png'

const Home = () => {


  return (
    <div className="home-container">
      <img className="home-image" src={homeimage02} alt="home image"></img>
      <div className="home-info">
        <p>Anna Monkman</p>
        <p>London & Surrey based Junior Webdev</p>
      </div>
    </div>
  )
}

export default Home
