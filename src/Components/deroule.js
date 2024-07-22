import React from 'react'
import '../App.scss';

import cadeau from '../assets/icons/projets/cadeau-or.png';
import couple from '../assets/icons/projets/couple-or.png';
import mail from '../assets/icons/projets/mail-or.png';


const Deroule = ({infos}) => {

  const affichageSection = infos.deroule;


  return (
  <>
  <section id='services' className='section' style={{display:affichageSection}}>

    <div className='grid-col2'>

      <div className='flex-col'>
        <h2>{affichageSection[1]}</h2>
        <h3>{affichageSection[2]}</h3>
      </div>

      <div className='flex-col'>

          <div className='grid-col2-asym'>
            <img src={couple} alt="icone à l'encre d'un couple de deux personnes"/>
            <div className='flex-wrap'>
              <h3>{affichageSection[3]}</h3>
              <p>{affichageSection[4]}</p>
            </div>
          </div>

          <div className='tiret-container' style={{display:'flex'}}>
            <div className='tiret'></div><div className='tiret2'></div>
          </div>

          <div className='grid-col2-asym'>
            <img src={mail} alt="icone à l'encre d'une enveloppe avec un coeur"/>
            <div className='flex-wrap'>
              <h3>{affichageSection[5]}</h3>
              <p>{affichageSection[6]}</p>
            </div>
          </div> 

          <div className='tiret-container' style={{display:'flex'}}>
            <div className='tiret'></div><div className='tiret2'></div>
          </div>


          <div className='grid-col2-asym'>
          <img src={cadeau} alt="icone à l'encre d'un cadeau"/>
            <div className='flex-wrap'>
              <h3>{affichageSection[7]}</h3>
              <p>{affichageSection[8]}</p>
            </div>
          </div>


      </div>

    </div>
  </section>
  </>
  )
}

export default Deroule
