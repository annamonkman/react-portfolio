import React from 'react'
import foliohome02 from '../assets/foliohome02.png'

const Home = () => {


  return (
    <div className="home-container">
      <img className="home-image" src={foliohome02} alt="home image"></img>
      <div className="home-info">
        <p>Anna Monkman.</p>
        <p>London & Surrey based Junior Web Developer.</p>
      </div>
    </div>
  )
}

export default Home
