import React from 'react'
import { Fade } from 'react-reveal'
// import Reveal from 'react-reveal/Reveal'

const About = () => {
  return (
    <div>
      <div className="about-wrapper">

        
        <div className="bio-wrapper">
          <div className="about-sections-title">bio:</div>
          <div className="bio">
            <div className="bio-p-1">
              <Fade left>
                <p>I am Anna, a junior web developer who is passionate about forward thinking design and technology. </p>
              </Fade>
            </div>
            <div className="bio-p-2">
              <Fade left>
                <p>I have recently completed a Software Engineering Bootcamp at General Assembly on which I explored front and back-end technologies such as HTML, CSS, JavaScript, React Hooks, MongoDB and Django.</p>
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
      
        <div className="skills-wrapper">
          <div className="about-sections-title">skills:</div>
          <div className="skills">
            <div className="frontend-wrapper">
              <div className="skill-indv-wrapper">
                <div className="skill-indv-img html"></div>
                <div className="skill-indv-title">HTML5</div>
              </div>
              <div className="skill-indv-wrapper">
                <div className="skill-indv-img css"></div>
                <div className="skill-indv-title">CSS</div>
              </div>
              <div className="skill-indv-wrapper">
                <div className="skill-indv-img js"></div>
                <div className="skill-indv-title">JavaScript</div>
              </div>
              <div className="skill-indv-wrapper">
                <div className="skill-indv-img sass"></div>
                <div className="skill-indv-title">SASS</div>
              </div>
              <div className="skill-indv-wrapper">
                <div className="skill-indv-img react"></div>
                <div className="skill-indv-title">React (Hooks)</div>
              </div>
              <div className="skill-indv-wrapper">
                <div className="skill-indv-img node"></div>
                <div className="skill-indv-title">Node.JS</div>
              </div>
              <div className="skill-indv-wrapper">
                <div className="skill-indv-img mongodb"></div>
                <div className="skill-indv-title">MongoDB/Mongoose</div>
              </div>
              <div className="skill-indv-wrapper">
                <div className="skill-indv-img express"></div>
                <div className="skill-indv-title">Express</div>
              </div>
              <div className="skill-indv-wrapper">
                <div className="skill-indv-img python"></div>
                <div className="skill-indv-title">Python</div>
              </div>
              <div className="skill-indv-wrapper">
                <div className="skill-indv-img django"></div>
                <div className="skill-indv-title">Django</div>
              </div>
              <div className="skill-indv-wrapper">
                <div className="skill-indv-img postgresql"></div>
                <div className="skill-indv-title">PostgreSQL</div>
              </div>
              <div className="skill-indv-wrapper">
                <div className="skill-indv-img insomnia"></div>
                <div className="skill-indv-title">Insomnia</div>
              </div>
              <div className="skill-indv-wrapper">
                <div className="skill-indv-img restful"></div>
                <div className="skill-indv-title">RESTful APIs</div>
              </div>
              <div className="skill-indv-wrapper">
                <div className="skill-indv-img yarn"></div>
                <div className="skill-indv-title">Yarn</div>
              </div>
              <div className="skill-indv-wrapper">
                <div className="skill-indv-img npm"></div>
                <div className="skill-indv-title">Npm</div>
              </div>
              <div className="skill-indv-wrapper">
                <div className="skill-indv-img git"></div>
                <div className="skill-indv-title">Git</div>
              </div>
              <div className="skill-indv-wrapper">
                <div className="skill-indv-img github"></div>
                <div className="skill-indv-title">GitHub</div>
              </div>
              <div className="skill-indv-wrapper">
                <div className="skill-indv-img vscode"></div>
                <div className="skill-indv-title">VS Code</div>
              </div>
              <div className="skill-indv-wrapper">
                <div className="skill-indv-img netlify"></div>
                <div className="skill-indv-title">Netlify</div>
              </div>
              <div className="skill-indv-wrapper">
                <div className="skill-indv-img heroku"></div>
                <div className="skill-indv-title">Heroku</div>
              </div>
            </div>
            <div className="frontend-wrapper">
              <div className="skill-indv-wrapper">
                <i className="skill-indv-img photoshop"></i>
                <div className="skill-indv-title">Adobe Photoshop</div>
              </div>
              <div className="skill-indv-wrapper">
                <i className="skill-indv-img premiere"></i>
                <div className="skill-indv-title">Adobe Premiere</div>
              </div>
              <div className="skill-indv-wrapper">
                <i className="skill-indv-img blender"></i>
                <div className="skill-indv-title">Blender</div>
              </div>
              <div className="skill-indv-wrapper">
                <div className="skill-indv-img ue"></div>
                <div className="skill-indv-title">Unreal Engine</div>
              </div>
              <div className="skill-indv-wrapper">
                <div className="skill-indv-img figma"></div>
                <div className="skill-indv-title">Figma</div>
              </div>
            </div>
          </div>
        </div>


        
        
        <div className="exp-edu-wrapper">
          <div className="about-sections-title">
            experience:
            <p className="exp-more-info">Please find more information about each role on LinkedIn.</p>
          </div>
          <div className="exp-edu">
            <div className="exp-edu-list">
              <div className="exp-edu-indv">
                <Fade left>
                  <div className="exp-detail">Supermarket Assistant</div><div className="exp-detail">Waitrose, Godalming</div><div className="exp-detail">PT Nov 2020 - Current</div>
                </Fade>
              </div>
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
            </div>
          </div>
        </div>
        <div className="exp-edu-wrapper">
          <div className="about-sections-title">education:</div>
          <div className="exp-edu">
            <div className="exp-edu-list">
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
                  <div className="exp-detail">Foundation Diploma in Art & Design</div><div className="exp-detail">Kingston, School of Art</div><div className="exp-detail">Sept 2015 - June 2016</div>
                </Fade>
              </div>
            </div>
          </div>
        </div>

        
        <div className="interests-credits-wrapper">
          <div className="interests-wrapper">
            <div className="about-sections-title">Interests:</div>
            <p>My interests include fashion, photography, design, cooking, contemporary art, film, and the crossovers of all of these. </p>
          </div>

          <div className="interests-wrapper">
            <div className="about-sections-title">Credits:</div>
            <p>Site designed and developed by Anna Monkman.</p>
            <p>using typefaces segment by .. and ...</p>
          </div>
        </div>
        

      </div>
    </div>
  )
}

export default About
