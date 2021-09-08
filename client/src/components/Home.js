import React from 'react'

const Home = () => {


  return (
    <div className="home-container">

      <div className="home-info">
        <div className="home-info-text">
          <p>I am Anna Monkman, a junior web developer based in London and Surrey. Welcome to my portfolio site.</p>
          {/* <p className="home-instructions">Navigate the site with the links at the top.</p> */}
          <p className="home-instructions">Find me on these platforms:</p>
        </div>
        <div className="home-info-links">
          <div className="home-link-indv"><div className="link-icon">&gt;&gt;</div><a href="https://www.linkedin.com/in/anna-monkman/" target="_blank" rel='noreferrer'>LinkedIn</a></div>
          <div className="home-link-indv"><div className="link-icon">&gt;&gt;</div><a href="mailto:annamonkman@me.com">Email</a></div>
          <div className="home-link-indv"><div className="link-icon">&gt;&gt;</div><a href="https://github.com/annamonkman" target="_blank" rel='noreferrer'>Github</a></div>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  )
}

export default Home
