import React from 'react'
import { Fade } from 'react-reveal'
// import Reveal from 'react-reveal/Reveal'

import { FaHtml5 } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { FaJs } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { FaSass } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa'
import { FaPython } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'
import { SiDjango } from 'react-icons/si'
import { SiPostgresql } from 'react-icons/si'
import { FaYarn } from 'react-icons/fa'
import { FaNpm } from 'react-icons/fa'
import { DiGit } from 'react-icons/di'
import { FaGithub } from 'react-icons/fa'
import { SiVisualstudiocode } from 'react-icons/si'
import { SiNetlify } from 'react-icons/si'
import { SiHeroku } from 'react-icons/si'
import { DiPhotoshop } from 'react-icons/di'
import { SiAdobepremiere } from 'react-icons/si'
import { SiBlender } from 'react-icons/si'
import { SiUnrealengine } from 'react-icons/si'
import { FaFigma } from 'react-icons/fa'



const About = () => {
  return (
    <div>
      <div className="about-wrapper">

        
        <div className="about-section-wrapper">
          <div className="about-sections-title">bio:</div>
          <div className="bio">
            <div className="bio-p-1">
              <Fade left>
                <p>I am Anna, a junior web developer who is passionate about forward thinking design and technology. </p>
              </Fade>
            </div>
            <div className="bio-p-2">
              <Fade left>
                <p>I have recently completed a Software Engineering Bootcamp at General Assembly on which I explored front and back-end technologies including HTML, CSS, JavaScript, React Hooks, MongoDB and Django.</p>
              </Fade>
            </div>
            <div className="bio-p-3">
              <Fade left>
                <p>My journey to code came after completing my Fine Art Degree in 2019. I had enjoyed experimenting with digital software such as Adobe Premiere, Photoshop and Blender to make films, and I wanted to expand my technical skills in another area. I completed a short web development course with Code First Girls and was inspired by the possibilities that were opened up with coding. </p>
              </Fade>
            </div>
            <div className="bio-p-4">
              <Fade left>
                <p>I am now open for opportunities as a front-end or full-stack web developer in a team or as an individual.</p>
              </Fade>
            </div>
          </div>
        </div>
      
        <div className="about-section-wrapper">
          <div className="about-sections-title">skills:</div>
          <div className="skills">
            <div className="frontend-wrapper">
              <div className="skill-indv-wrapper">
                <FaHtml5 size={55} color="white" className="icon"/>
                <div className="skill-indv-text">HTML5</div>
              </div>
              <div className="skill-indv-wrapper">
                <FaCss3Alt size={55} color="white" className="icon"/>
                <div className="skill-indv-text">CSS</div>
              </div>
              <div className="skill-indv-wrapper">
                <FaJs size={55} color="white" className="icon"/>
                <div className="skill-indv-text">JavaScript</div>
              </div>
              <div className="skill-indv-wrapper">
                <FaSass size={55} color="white" className="icon"/>
                <div className="skill-indv-text">SASS</div>
              </div>
              <div className="skill-indv-wrapper">
                <FaReact size={55} color="white" className="icon"/>
                <div className="skill-indv-text">React (Hooks)</div>
              </div>
              <div className="skill-indv-wrapper">
                <FaNodeJs size={55} color="white" className="icon"/>
                <div className="skill-indv-text">Node.JS</div>
              </div>
              <div className="skill-indv-wrapper">
                <SiMongodb size={55} color="white" className="icon"/> 
                <div className="skill-indv-text">MongoDB</div>
              </div>
              <div className="skill-indv-wrapper">
                <FaPython size={55} color="white" className="icon"/>
                <div className="skill-indv-text">Python</div>
              </div>
              <div className="skill-indv-wrapper">
                <SiDjango size={55} color="white" className="icon"/>
                <div className="skill-indv-text">Django</div>
              </div>
              <div className="skill-indv-wrapper">
                <SiPostgresql size={55} color="white" className="icon"/>
                <div className="skill-indv-text">PostgreSQL</div>
              </div>
              <div className="skill-indv-wrapper">
                <FaYarn size={55} color="white" className="icon"/>
                <div className="skill-indv-text">Yarn</div>
              </div>
              <div className="skill-indv-wrapper">
                <FaNpm size={55} color="white" className="icon"/>
                <div className="skill-indv-text">Npm</div>
              </div>
              <div className="skill-indv-wrapper">
                <DiGit size={55} color="white" className="icon"/>
                <div className="skill-indv-text">Git</div>
              </div>
              <div className="skill-indv-wrapper">
                <FaGithub size={55} color="white" className="icon"/>
                <div className="skill-indv-text">GitHub</div>
              </div>
              <div className="skill-indv-wrapper">
                <SiVisualstudiocode size={55} color="white" className="icon"/>
                <div className="skill-indv-text">VS Code</div>
              </div>
              <div className="skill-indv-wrapper">
                <SiNetlify size={55} color="white" className="icon"/>
                <div className="skill-indv-text">Netlify</div>
              </div>
              <div className="skill-indv-wrapper">
                <SiHeroku size={55} color="white" className="icon"/>
                <div className="skill-indv-text">Heroku</div>
              </div>
            </div>
            <div className="frontend-wrapper">
              <div className="skill-indv-wrapper">
                <DiPhotoshop size={55} color="white" className="icon"/>
                <div className="skill-indv-text">Adobe Photoshop</div>
              </div>
              <div className="skill-indv-wrapper">
                <SiAdobepremiere size={55} color="white" className="icon"/>
                <div className="skill-indv-text">Adobe Premiere</div>
              </div>
              <div className="skill-indv-wrapper">
                <SiBlender size={55} color="white" className="icon"/>
                <div className="skill-indv-text">Blender</div>
              </div>
              <div className="skill-indv-wrapper">
                <SiUnrealengine size={55} color="white" className="icon"/>
                <div className="skill-indv-text">Unreal Engine</div>
              </div>
              <div className="skill-indv-wrapper">
                <FaFigma size={55} color="white" className="icon"/>
                <div className="skill-indv-text">Figma</div>
              </div>
            </div>
          </div>
        </div>


        
        
        <div className="about-section-wrapper">
          <div className="about-sections-title">
            experience:
            <p className="exp-more-info">Please find more information about each role on my <a className="contact-link" href="https://www.linkedin.com/in/anna-monkman/" target="_blank" rel='noreferrer'>LinkedIn.</a></p>
          </div>
          <div className="exp-edu">
            <div className="exp-edu-indv">
              <Fade left>
                <div className="exp-detail">Runner</div><div className="exp-detail">One of Us, London</div><div className="exp-detail">Feb 2020 - Aug 2020</div>
              </Fade>
            </div>
            <div className="exp-edu-indv">
              <Fade left>
                <div className="exp-detail">Work Placement</div><div className="exp-detail">Furtherfield Gallery, London</div><div className="exp-detail">May 2019 - Oct 2019</div>
              </Fade>
            </div>
            <div className="exp-edu-indv">
              <Fade left>
                <div className="exp-detail">Art Trainee</div><div className="exp-detail">Bold Tendencies, London</div><div className="exp-detail">Jul 2018 - Aug 2018</div>
              </Fade>
            </div>
          </div>
        </div>
        <div className="about-section-wrapper">
          <div className="about-sections-title">education:</div>
          <div className="exp-edu">
            <div className="exp-edu-indv">
              <Fade left>
                <div className="exp-detail">Software Engineering Immersive</div><div className="exp-detail">General Assembly, London/Remote</div><div className="exp-detail">Feb 2021 - Apr 2021</div>
              </Fade>
            </div>
            <div className="exp-edu-indv">
              <Fade left>
                <div className="exp-detail">Introduction to Web Development</div><div className="exp-detail">Code First Girls, London</div><div className="exp-detail">Jan 2020 - March 2020 PT</div>
              </Fade>
            </div>
            <div className="exp-edu-indv">
              <Fade left>
                <div className="exp-detail">BA Fine Art</div><div className="exp-detail">Goldsmiths, University of London</div><div className="exp-detail">Sept 2016 - June 2019 (First Class Honors)</div>
              </Fade>
            </div>
            <div className="exp-edu-indv">
              <Fade left>
                <div className="exp-detail">Foundation Diploma in Art & Design</div><div className="exp-detail">Kingston School of Art</div><div className="exp-detail">Sept 2015 - June 2016 (Distinction)</div>
              </Fade>
            </div>
          </div>
        </div>

        
        <div className="interests-credits-wrapper">
          <div className="interests-wrapper">
            <div className="about-sections-title">Awards:</div>
            <p>Special Judge&apos;s Prize - Wells Art International Contemporary Award - 2016 </p>
          </div>
          <div className="interests-wrapper">
            <div className="about-sections-title">Interests:</div>
            <p>My interests include fashion, photography, design, cooking, contemporary art, film, and the crossovers of all of these. </p>
          </div>

          <div className="interests-wrapper">
            <div className="about-sections-title">Credits:</div>
            <p>Site designed and developed by Anna Monkman.</p>
          </div>

          <div className="interests-wrapper">
            <div className="about-sections-title">Contact:</div>
            <a className="contact-link" href = "mailto: annamonkman@me.com">Email: annamonkman@me.com</a>
            <a className="contact-link" href="https://www.linkedin.com/in/anna-monkman/" target="_blank" rel='noreferrer'>LinkedIn</a>
            <a className="contact-link" href="https://github.com/annamonkman" target="_blank" rel='noreferrer'>Github</a>
          </div>
        </div>
        


        
        

      </div>
    </div>
  )
}

export default About
