import React from 'react'

import proj1mov from '../assets/proj1mov.mov'

const Projects = () => {
  return (
    <div className="page-wrapper">
      <div className="projects-intro">
        <p>Here are the four projects I completed as part of the Software Engineering Immersive Course at General Assembly. I will update with new projects as I complete them.</p>
        <p>The Software Engineering Immersive is a 3 month course focused on front-end, backend and full stack web development, in particular JavaScript and React. I attended daily lectures, stand-ups and completed homework assignments in the evening. I worked in a variety of ways: in groups, individually and pair-coding.</p>
      </div>


      <div className="project-indv-wrapper p4">
        <div className="project-indv-title">
          <h3><span className="dot"></span>Project 4:   Carousel Collective</h3>
        </div>
        <video className="project-video" src={proj1mov} muted loop playsinline autoPlay></video>
        <div className="project-indv-info">
          <div className="project-img-footer">
            <div className="project-links"><a>Visit Site &gt;</a><a>ReadMe &gt;</a></div>
          </div>
          <div className="project-description-tech-wrapper">
            <div className="project-description">
              <p>For the final project I was keen to work on my own to test my knowledge and challenge myself to work through errors and unfamiliar territory. ‘Carousel Collective’ is an app for a prospective fashion rental company. I used Django with Python for the backend and React (Hooks) on the front end to allow users to register, log-in, browse items and add them to a basket or wishlist.</p>
            </div>
            <ul className="project-timeframe">
              <li>Individual</li>
              <li>7 Days</li>
            </ul>
            <ul className="project-tech">
              <li>React (Hooks)</li>
              <li>JavaScript</li>
              <li>CSS</li>
              <li>Django REST Framework</li>
              <li>Python</li>
              <li>Insomnia</li>
              <li>TablePlus</li>
              <li>PostgreSQL</li>
              <li>JWT</li>
              <li>Axios</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="project-indv-wrapper p3">
        <div className="project-indv-title">
          <h3><span className="dot"></span>Project 3:   Festivalist</h3>
        </div>
        <div className="project-img"></div>
        <div className="project-indv-info">
          <div className="project-img-footer">
            <div className="project-links"><a>Visit Site &gt;</a><a>ReadMe &gt;</a></div>
          </div>
          <div className="project-description-tech-wrapper">
            <div className="project-description">
              <p>Myself and a group of 3 others designed and built a MERN stack app that allows the user to search for international festivals, login, save festivals and view information about the festivals and artists performing. I was largely responsible for the index page - listing the festivals and the ability to filter them based on country, price, and artist. I also contributed to building the backend, seeding the data, logo design and CSS. This project was good practise in using Git successfully as a team.</p>
            </div>
            <ul className="project-timeframe">
              <li>Group (4 people)</li>
              <li>8 Days</li>
            </ul>
            <ul className="project-tech">
              <li>React (Hooks)</li>
              <li>JavaScript</li>
              <li>Semantic UI</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>Node.js</li>
              <li>Axios</li>
              <li>JWT</li>
              <li>Express</li>
              <li>Bcrypt</li>
              <li>Heroku</li>
              <li>Insomnia</li>
              <li>TablePlus</li>
              <li>Git</li>
              <li>Mapbox</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="project-indv-wrapper p2">
        <div className="project-indv-title">
          <h3><span className="dot"></span>Project 2:   StarTrumps</h3>
        </div>
        <div className="project-img"></div>
        <div className="project-indv-info">
          <div className="project-img-footer">
            <div className="project-links"><a>Visit Site &gt;</a><a>ReadMe &gt;</a></div>
          </div>
          <div className="project-description-tech-wrapper">
            <div className="project-description">
              <p>‘Star Trumps’ is a game in which the player can view a ‘Top Trumps’ card and click on a category to beat the opponent card. This was a time sensitive project so my partner and I pair coded most of the functionality together. We used a Star Wars API for the Star Ships information, then compared the data for win, lose and draw logic.</p>
            </div>
            <ul className="project-timeframe">
              <li>Pair-Programming</li>
              <li>2 Days</li>
            </ul>
            <ul className="project-tech">
              <li>React (Hooks)</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Insomnia</li>
              <li>third-party APIs</li>
              <li>Axios</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="project-indv-wrapper p1">
        <div className="project-indv-title">
          <h3><span className="dot"></span>Project 1:   Frogger</h3>
        </div>
        <div className="project-img"></div>
        <div className="project-indv-info">
          <div className="project-img-footer">
            <div className="project-links"><a>Visit Site &gt;</a><a>ReadMe &gt;</a></div>
          </div>
          <div className="project-description-tech-wrapper">
            <div className="project-description">
              <p>This project was my first experience of coding an entire project with JavaScript from planning a wireframe to online deployment. I built a game of ‘frogger’ (but with a snail) based on a JavaScript grid, using vanilla JavaScript, HTML and CSS. I also designed the imagery myself using Procreate on an iPad.</p>
            </div>
            <ul className="project-timeframe">
              <li>Individual</li>
              <li>7 Days</li>
            </ul>
            <ul className="project-tech">
              <li>Vanilla JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Projects
