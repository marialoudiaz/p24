import React, { useState, useEffect, useRef} from 'react';
import '../App.scss';
import TextTransition, { presets } from 'react-text-transition';
import { useLocation } from 'react-router-dom';
import ContactForm from '../Components/contactForm.js';
import create_brand_identity from '../assets/video/create_brand_identity.mp4';


const Formulaire = ({infos}) => {
  const form = infos.form;
  const display = Array.isArray(infos.deroule) ? infos.deroule[0] : infos.deroule;
  const words = infos.words ? infos.words : 'gogo';
  const blabla = infos.form[7];
  const [index, setIndex] = React.useState(0);

   // Recevoir & envoyer infos
   const location = useLocation();
   const { infosComposants } = location.state;
   const Lang = infosComposants[0].Lang; // info bien recu
  
  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

    

  return(
    <>
       <div className='section' id='contact'>
        <div className='grid-col2'>
    
          {/* PARTIE GAUCHE */}
          <div className='flex-col' id='citation-form'>
              <h3 className='syne'>{form[0]}</h3>
              <h3 className='syne'>{form[1]}</h3>
              <h3 className='syne gold'>{form[2]}</h3>
            <div className='text-block' style={{ borderTop: 'black 1px solid', paddingTop: '1rem', display: display, flexDirection:'column' }}>
              <TextTransition className='textTransition' springConfig={presets.gentle}>{words[index % words.length]}</TextTransition>
            <p>{blabla}</p>
            </div>
          </div>


          {/* PARTIE DROITE */}
          <div className='grid-col2-asym'>
            <div className='formulaire'>
              <ContactForm lang={Lang} />
            </div>
            <div id='muguet'>
              <video id='muguetvideo' autoPlay loop muted playsInline>
                <source src={create_brand_identity} type="video/mp4"/>
              </video>
            </div>
          </div>

        </div>
      </div>
  </>
)
}

export default Formulaire
