import React from 'react';
import {useRef, useEffect} from 'react';
import { useLocation} from 'react-router-dom';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import Test from '../Components/test.js'
import '../App.scss';

import cadeau from '../assets/icons/projets/cadeau-or.png';
import couple from '../assets/icons/projets/couple-or.png';
import mail from '../assets/icons/projets/mail-or.png';


const Deroule = ({infos}) => {

  const location = useLocation();
  const { infosComposants } = location.state;
  const citation = infosComposants[0].citation;
  const affichageSection = infos.deroule;

  gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);
  const el1 = useRef(null);
  const el2 = useRef(null);
  const el3 = useRef(null);

  useEffect(() => {
    const elements = [el1.current, el2.current, el3.current];
    elements.forEach((el, index) => {
      gsap.fromTo(el, 
        { opacity: 0, y: 50 }, // bas vers haut
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: "power2.out", 
          scrollTrigger: {
            trigger: el,
            start: "top 90%", // déclenchement quand l'élément est 80% visible
            toggleActions: "play none none none"
          }
        }
    );
  });
},[]);

  return (
  <>
  <section className='section' style={{display:affichageSection}}>

    <div className='grid-col2'>

      <div className='flex-col'>
        <h2>{affichageSection[1]}</h2>
        <p>{affichageSection[2]}</p>
      </div>

      <div className='flex-col' id='deroule'>

          <div id='deroule-item' className='grid-col2-asym' ref={el1}>
            <img src={couple} alt="icone à l'encre d'un couple de deux personnes"/>
            <div className='flex-wrap'>
              <h3 style={{fontWeight:'600'}}>{affichageSection[3]}</h3>
              <p>{affichageSection[4]}</p>
            </div>
          </div>

          <div className='tiret-container' style={{display:'flex'}}>
            <div className='tiret'></div><div className='tiret2'></div>
          </div>

          <div id='deroule-item' className='grid-col2-asym' ref={el2}>
            <img src={mail} alt="icone à l'encre d'une enveloppe avec un coeur"/>
            <div className='flex-wrap'>
              <h3 style={{fontWeight:'600'}}>{affichageSection[5]}</h3>
              <p>{affichageSection[6]}</p>
            </div>
          </div> 

          <div className='tiret-container' style={{display:'flex'}}>
            <div className='tiret'></div><div className='tiret2'></div>
          </div>


          <div id='deroule-item' className='grid-col2-asym' ref={el3}>
          <img src={cadeau} alt="icone à l'encre d'un cadeau"/>
            <div className='flex-wrap'>
              <h3 style={{fontWeight:'600'}}>{affichageSection[7]}</h3>
              <p>{affichageSection[8]}</p>
            </div>
          </div>

      </div>
    </div>
  </section>
  <div>
        <Test />
  </div>
  
  </>
  )
}

export default Deroule
