import React from 'react'

import proj1mov from '../assets/proj1mov.mp4'
import proj2mov from '../assets/proj2mov.mp4'
import proj3mov from '../assets/proj3mov.mp4'
import proj4mov from '../assets/proj4mov.mp4'
import riverislandapp from '../assets/riverislandapp02.mp4'

import { FiExternalLink } from 'react-icons/fi'
import { MdSubdirectoryArrowRight } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'

const Projects = () => {

  return (
    <div className="page-wrapper">

      <div className="project-indv-wrapper">
        <video className="project-video" src={riverislandapp} muted loop playsinline autoPlay></video>
        <div className="project-info">
          <div className="proj-info-left">
            <h3 className="project-title"><span className="dot"></span>Practise fashion App</h3>
          </div>
          <div className="proj-links">
            <p>Individual | 2.5 Days</p>
          </div>
          <div className="proj-info-right">
            <div className="proj-description">
              <h4 className="proj-mini-heading"><MdSubdirectoryArrowRight size={18} color="black"/>description</h4>
              <p>Small React app built for mobile phone screens using a fashion API. With search functionality and lazy loading images (react-lazyload package).</p>
            </div>
            <div className="proj-tech">
              <h4 className="proj-mini-heading"><MdSubdirectoryArrowRight size={18} color="black"/>tech</h4>
              <ul>
                <li>React (Hooks)</li>
                <li>JavaScript</li>
                <li>styled-components</li>
                <li>Axios</li>
                <li>Insomnia</li>
                <li>Figma</li>
                <li>fashion API</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="projects-intro">
        <p>Here are the four projects I completed as part of the Software Engineering Immersive Course at General Assembly.</p>
        <p>The Software Engineering Immersive is a 3 month course focused on front-end, backend and full stack web development, in particular JavaScript and React. I attended daily lectures, stand-ups and completed homework assignments in the evening. I worked in a variety of ways: in groups, individually and pair-coding.</p>
      </div>

      <div className="project-indv-wrapper">
        <video className="project-video" src={proj4mov} muted loop playsinline autoPlay></video>
        <div className="project-info">
          <div className="proj-info-left">
            <h3 className="project-title"><span className="dot"></span>Carousel Collective</h3>
            <div className="proj-links">
              <p>Individual | 7 Days</p>
              <p><a className="readme-link" href="https://github.com/annamonkman/sei-project-four" target="_blank" rel='noreferrer'>ReadMe</a> <FaGithub size={15} color="black"/><a className="readme-link" href="https://carousel-collective.herokuapp.com/" target="_blank" rel='noreferrer'> | View Site</a> <FiExternalLink size={15} color="black"/></p>
            </div>
          </div>
          <div className="proj-info-right">
            <div className="proj-description">
              <h4 className="proj-mini-heading"><MdSubdirectoryArrowRight size={18} color="black"/>description</h4>
              <p>For the final project I was keen to work on my own to test my knowledge and challenge myself to work through errors and unfamiliar territory. ‘Carousel Collective’ is an app for a prospective fashion rental company. I used Django with Python for the backend and React (Hooks) on the front end to allow users to register, log-in, browse items and add them to a basket or wishlist.</p>
            </div>
            <div className="proj-tech">
              <h4 className="proj-mini-heading"><MdSubdirectoryArrowRight size={18} color="black"/>tech</h4>
              <ul>
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
      </div>

      <div className="project-indv-wrapper">
        <video className="project-video" src={proj3mov} muted loop playsinline autoPlay></video>
        <div className="project-info">
          <div className="proj-info-left">
            <h3 className="project-title"><span className="dot"></span>Festivalist</h3>
            <div className="proj-links">
              <p>Group (4 People) | 8 Days</p>
              <p><a className="readme-link" href="https://github.com/annamonkman/sei-project-three" target="_blank" rel='noreferrer'>ReadMe</a> <FaGithub size={15} color="black"/><a className="readme-link" href="https://festivalist.netlify.app/" target="_blank" rel='noreferrer'> | View Site</a> <FiExternalLink size={15} color="black"/></p>
            </div>
          </div>
          <div className="proj-info-right">
            <div className="proj-description">
              <h4 className="proj-mini-heading"><MdSubdirectoryArrowRight size={18} color="black"/>description</h4>
              <p>Myself and a group of 3 others designed and built a MERN stack app that allows the user to search for international festivals, login, save festivals and view information about the festivals and artists performing. I was largely responsible for the index page - listing the festivals and the ability to filter them based on country, price, and artist. I also contributed to building the backend, seeding the data, logo design and CSS. This project was good practise in using Git successfully as a team.</p>
            </div>
            <div className="proj-tech">
              <h4 className="proj-mini-heading"><MdSubdirectoryArrowRight size={18} color="black"/>tech</h4>
              <ul>
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
      </div>

      <div className="project-indv-wrapper">
        <video className="project-video" src={proj2mov} muted loop playsinline autoPlay></video>
        <div className="project-info">
          <div className="proj-info-left">
            <h3 className="project-title"><span className="dot"></span>Star Trumps</h3>
            <div className="proj-links">
              <p>Pair-Programming | 2 Days</p>
              <p><a className="readme-link" href="https://github.com/annamonkman/sei-project-two" target="_blank" rel='noreferrer'>ReadMe</a> <FaGithub size={15} color="black"/><a className="readme-link" href="https://star-trumps.netlify.app/" target="_blank" rel='noreferrer'> | View Site</a> <FiExternalLink size={15} color="black"/></p>
            </div>
          </div>
          <div className="proj-info-right">
            <div className="proj-description">
              <h4 className="proj-mini-heading"><MdSubdirectoryArrowRight size={18} color="black"/>description</h4>
              <p>‘Star Trumps’ is a game in which the player can view a ‘Top Trumps’ card and click on a category to beat the opponent card. This was a time sensitive project so my partner and I pair coded most of the functionality together. We used a Star Wars API for the Star Ships information, then compared the data for win, lose and draw logic.</p>
            </div>
            <div className="proj-tech">
              <h4 className="proj-mini-heading"><MdSubdirectoryArrowRight size={18} color="black"/>tech</h4>
              <ul>
                <li>React (Hooks)</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Insomnia</li>
                <li>Third-party APIs</li>
                <li>Axios</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="project-indv-wrapper">
        <video className="project-video" src={proj1mov} muted loop playsinline autoPlay></video>
        <div className="project-info">
          <div className="proj-info-left">
            <h3 className="project-title"><span className="dot"></span>Frogger</h3>
            <div className="proj-links">
              <p>Individual | 7 Days</p>
              <p><a className="readme-link" href="https://github.com/annamonkman/sei-project-one" target="_blank" rel='noreferrer'>ReadMe</a> <FaGithub size={15} color="black"/><a className="readme-link" href="https://annamonkman.github.io/sei-project-one/" target="_blank" rel='noreferrer'> | View Site</a> <FiExternalLink size={15} color="black"/></p>
            </div>
          </div>
          <div className="proj-info-right">
            <div className="proj-description">
              <h4 className="proj-mini-heading"><MdSubdirectoryArrowRight size={18} color="black"/>description</h4>
              <p>This project was my first experience of coding an entire project with JavaScript from planning a wireframe to online deployment. I built a game of ‘frogger’ (but with a snail) based on a JavaScript grid, using vanilla JavaScript, HTML and CSS. I also designed the imagery myself using Procreate on an iPad.</p>
            </div>
            <div className="proj-tech">
              <h4 className="proj-mini-heading"><MdSubdirectoryArrowRight size={18} color="black"/>tech</h4>
              <ul>
                <li>Vanilla JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Adobe Photoshop</li>
              </ul>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Projects
