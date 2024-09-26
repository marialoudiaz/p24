import React from 'react';
import { useNavigate } from 'react-router-dom';
import branding_specialist_melbourne from '../assets/projets/branding_specialist_melbourne.mp4';
import '../App.scss';
import 'animate.css';

const Chargement = () =>{

  const navigate = useNavigate();

// Envoyer les informations correspondantes aux composants
  const selectMenu = (lang) => {
  // envoyer l'array correspondante
  const infos = lang;
  navigate('/menu', { state: { infos } });
};
  
  return (
    <>
      <div className='film2'>
        <div className='gridHover'>
          <div className='gridHoverTitle'>
            <div className='grid-col2'>
            <p onClick={() => selectMenu('fr')} className='syne'>Français</p>
            <p onClick={() => selectMenu('en')} className='syne'>English</p>
            </div>
          </div>
        </div>
        <video className='background-video2' autoPlay muted playsInline>
          <source src={branding_specialist_melbourne} alt='video of an etheral waiting room with white sofas and a luxurious vegetation' type='video/mp4'/>
        </video> 
      </div>
    </>
  );

    
};
export default Chargement;
