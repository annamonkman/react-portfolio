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

import knight01 from '../assets/art/knight01.jpg'
import knight02 from '../assets/art/knight02.jpg'
import knight03 from '../assets/art/knight03.jpg'



const Art = () => {

  return (

    <div className="art-wrapper">
        
      <div className="art-proj-wrapper">
        <div className="art-info-wrapper">
          <h3 className="art-title"><span className="dot art-dot"></span>Commission for artist Christopher Bond, 2021</h3>
          <div className="art-description">
            <p>I was asked to model an unmade bed with wetness on the top for a film that Bond is working on.</p>
            <p>quote from Chris--</p>
            <p>Modelled and Rendered with Blender. Wet textures modelled with Quixel Mixer. </p>
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
          <div className="art-description">
            <p>Screenshots from a film I made in my 3rd Year at Goldsmiths, University of London. Shown in my Degree Show in June 2019.</p>
            <p>Made using Blender. Most Assets made by me with a few purchased online.</p>
          </div>
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
          <h3 className="art-title"><span className="dot art-dot"></span>The Knight, 2017</h3>
          <div className="art-description">
            <p>Screenshots from a film I made in my 1st Year at Goldsmiths, University of London.</p>
            <p>Found images collaged together in Adobe Photoshop. Edited with Premiere and After Effects. Greenscreen footage shot by me. With thanks to Will as teh knight. </p>
          </div>
        </div>
        <div className="art-gallery-wrapper">
          <img className="art-img" src={knight01} alt="screenshot from film 'The Knight'"/>
          <img className="art-img" src={knight02} alt="screenshot from film 'The Knight'"/>
          <img className="art-img" src={knight03} alt="screenshot from film 'The Knight'"/>
        </div>
      </div>


    </div>
      

  )
}

export default Art
