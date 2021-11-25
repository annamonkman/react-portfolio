import React from 'react'

import bed07 from '../assets/art/bed07.png'
import bed08 from '../assets/art/bed08.png'
import bed09 from '../assets/art/bed09.png'
import bed10 from '../assets/art/bed10.png'
import bed12 from '../assets/art/bed12.png'

import desk01 from '../assets/art/desk01.jpg'
// import desk02 from '../assets/art/desk02.jpg'
import desk03 from '../assets/art/desk03.jpg'
// import desk04 from '../assets/art/desk04.jpg'
import desk05 from '../assets/art/desk05.jpg'
import desk07 from '../assets/art/desk07.jpg'
import desk08 from '../assets/art/desk08.jpg'
import desk09 from '../assets/art/desk09.jpg'

import ds01 from '../assets/art/ds01.jpg'
import ds02 from '../assets/art/ds02.jpg'
import ds03 from '../assets/art/ds03.jpg'
import ds04 from '../assets/art/ds04.jpg'
import ds05 from '../assets/art/ds05.jpg'
// import ds06 from '../assets/art/ds06.jpg'
// import ds07 from '../assets/art/ds07.jpg'

import knight01 from '../assets/art/knight01.jpg'
import knight02 from '../assets/art/knight02.jpg'
import knight03 from '../assets/art/knight03.jpg'

import line01 from '../assets/art/line01.jpg'
import line02 from '../assets/art/line02.jpg'
import line03 from '../assets/art/line03.jpg'
import line04 from '../assets/art/line04.jpg'

import wac01 from '../assets/art/wac01.jpg'
import wac02 from '../assets/art/wac02.jpg'
// import wac03 from '../assets/art/wac03.jpg'




const Art = () => {

  return (

    <div className="art-wrapper">
        
      <div className="art-proj-wrapper">
        <div className="art-info-wrapper">
          <h3 className="art-title"><span className="dot art-dot"></span>Commission for artist Christopher Bond, 2020</h3>
          <div className="art-description">
            <p>Render for upcoming performance by Christopher Bond in 2022, in which two overlapping super 8 stills from a brief split second in a David Wojnarowicz film have been rendered as an singular object – a sodden bed. This is reference to a text in the collected writings by the Ian White, ‘Here is Infomation. Mobilise’</p>
          </div>
          <div className="art-tech">
            <p>Modelled and Rendered using Blender 2.9.</p>
            <p>Wet textures modelled with Quixel Mixer. </p>
          </div>
        </div>
        <div className="art-gallery-wrapper">
          <img className="art-img" src={bed12} alt="image of 3D model of Wet Bed side view"/>
          <img className="art-img" src={bed09} alt="image of 3D model of Wet Bed from top"/>
          <img className="art-img" src={bed10} alt="image of 3D model of Wet Bed from side"/>
          <img className="art-img" src={bed08} alt="image of 3D model of Wet Bed bird's eye view"/>
          <img className="art-img" src={bed07} alt="image of 3D model of Wet Bed bird's eye view closeup"/>   
        </div>  
      </div>

      <div className="art-proj-wrapper">
        <div className="art-info-wrapper">
          <h3 className="art-title"><span className="dot art-dot"></span>The Desk, 2019</h3>
          <a className="vimeo-link" href="https://vimeo.com/377504425" target="_blank" rel="noreferrer">Vimeo &gt;</a>
          <div className="art-description"><p>Screenshots from a film I made in my 3rd Year at Goldsmiths, University of London. Shown in my Degree Show in June 2019.</p></div>
          <div className="art-tech"><p>Made using Blender. Most Assets made by Anna Monkman with a few purchased online.</p></div>
        </div>
        <div className="art-gallery-wrapper">
          <img className="art-img" src={desk03} alt="screenshot from film 'The Desk' opening title"/>
          <img className="art-img" src={desk08} alt="screenshot from film 'The Desk' biscuit"/>
          <img className="art-img" src={desk09} alt="screenshot from film 'The Desk' pencils"/>
          <img className="art-img" src={desk07} alt="screenshot from film 'The Desk' bird's eye view of desk"/>
          <img className="art-img" src={desk05} alt="screenshot from film 'The Desk'"/>
          <img className="art-img" src={desk01} alt="screenshot from film 'The Desk'"/>
          {/* <img className="art-img" src={desk02} alt="screenshot from film 'The Desk'"/> */}
          {/* <img className="art-img" src={desk04} alt="screenshot from film 'The Desk'"/> */}
        </div>    
      </div>

      <div className="art-proj-wrapper">
        <div className="art-info-wrapper">
          <h3 className="art-title"><span className="dot art-dot"></span>Degree Show Installation, 2019</h3>
          <a className="vimeo-link" href="https://vimeo.com/382315360" target="_blank" rel="noreferrer">Vimeo &gt;</a>
          <div className="art-description">
            <p>The installation of my film &apos;The Desk&apos; for my BA Fine Art Degree Show in June 2019.</p>
            <p>My work was installed in Laurie Grove Baths, Goldsmiths College, University of London. </p>
          </div>
          <div className="art-tech"><p>Temporary Paper ceiling and upholstered metal bench made by Anna Monkman with help from Corrine Chan. </p></div>
        </div>
        <div className="art-gallery-wrapper">
          <img className="art-img" src={ds01} alt="image of degree show installation of the Desk 2019"/>
          <img className="art-img" src={ds02} alt="image of degree show installation of the Desk 2019"/>
          <img className="art-img" src={ds03} alt="iimage of degree show installation of the Desk 2019"/>
          <img className="art-img" src={ds05} alt="image of degree show installation of the Desk 2019"/>
          <img className="art-img" src={ds04} alt="image of degree show installation of the Desk 2019"/>
          {/* <img className="art-img" src={ds06} alt="image of degree show installation of the Desk 2019"/> 
          <img className="art-img" src={ds07} alt="image of degree show installation of the Desk 2019"/>   */}
        </div> 
      </div>

      <div className="art-proj-wrapper">
        <div className="art-info-wrapper">
          <h3 className="art-title"><span className="dot art-dot"></span>The Line, 2018</h3>
          <a className="vimeo-link" href="https://vimeo.com/259862330" target="_blank" rel="noreferrer">Vimeo &gt;</a>
          <div className="art-description"><p>Screenshots from two versions of a film reflecting on the Greenwich Meridian Line and temporality. Text inspired by the late 18th-century language used in Thomas Pynchon&apos;s book Mason and Dixon. </p></div>
          <div className="art-tech"><p>Edited using Adobe Premiere. Cinematography, costume and script by Anna Monkman.</p></div>
        </div>
        <div className="art-gallery-wrapper">
          <img className="art-img" src={line04} alt="screenshot from film 'The Line'"/>
          <img className="art-img" src={line01} alt="screenshot from film 'The Line'"/>
          <img className="art-img" src={line03} alt="screenshot from film 'The Line'"/>
          <img className="art-img" src={line02} alt="screenshot from film 'The Line'"/>
        </div>
      </div>

      <div className="art-proj-wrapper">
        <div className="art-info-wrapper">
          <h3 className="art-title"><span className="dot art-dot"></span>The Knight, 2017</h3>
          <a className="vimeo-link" href="https://vimeo.com/377506548" target="_blank" rel="noreferrer">Vimeo &gt;</a>
          <div className="art-description"><p>Screenshots from a film I made in my 1st Year at Goldsmiths, University of London.</p></div>
          <div className="art-tech"><p>Found images collaged together in Adobe Photoshop. Edited with Adobe Premiere and After Effects. Greenscreen footage shot by Anna Monkman. With thanks to Will Herbert as the knight. </p></div>
        </div>
        <div className="art-gallery-wrapper">
          <img className="art-img" src={knight01} alt="screenshot from film 'The Knight'"/>
          <img className="art-img" src={knight02} alt="screenshot from film 'The Knight'"/>
          <img className="art-img" src={knight03} alt="screenshot from film 'The Knight'"/>
        </div>
      </div>

      <div className="art-proj-wrapper">
        <div className="art-info-wrapper">
          <h3 className="art-title"><span className="dot art-dot"></span>Boy, 2016</h3>
          <a className="vimeo-link" href="https://vimeo.com/382305597" target="_blank" rel="noreferrer">Vimeo &gt;</a>
          <div className="art-description"><p>Two oil paitings and looped film based on a found photograph of a boy from late 19th or early 20th century. </p></div>
          <div className="art-tech"><p>This work was awarded the Special Judge&apos;s Prize at Wells Art International Contemporary Competition, 2016.  </p></div>
        </div>
        <div className="art-gallery-wrapper">
          <img className="art-img" src={wac02} alt="photograph of installation"/>
          <img className="art-img" src={wac01} alt="photograph of installation"/>
        </div>
      </div>


    </div>

  )
}

export default Art
