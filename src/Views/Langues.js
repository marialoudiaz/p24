import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import video from '../assets/projets/chargement.mp4';
import '../App.scss';
import 'animate.css';
/*MEDIAS*/
import portrait1 from '../assets/img/portrait-mai24.jpg';
import portrait2 from '../assets/img/portrait-mai24.jpg';
import a1 from '../assets/icons/softs/1.png';
import a2 from '../assets/icons/softs/2.png';
import a3 from '../assets/icons/softs/3.png';
import a4 from '../assets/icons/softs/4.png';
import a5 from '../assets/icons/softs/5.png';
import a6 from '../assets/icons/softs/6.png';
import a7 from '../assets/icons/softs/7.png';
import a8 from '../assets/icons/softs/8.png';
import a9 from '../assets/icons/softs/9.png';
import a10 from '../assets/icons/softs/10.png';
import a11 from '../assets/icons/softs/11.png';
import a12 from '../assets/icons/softs/12.png';
import a13 from '../assets/icons/softs/13.png';
import a14 from '../assets/icons/softs/14.png';
import a15 from '../assets/icons/softs/15.png';
import a16 from '../assets/icons/softs/16.png';
import a17 from '../assets/icons/softs/17.png';
import a18 from '../assets/icons/softs/18.png';


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
            <p onClick={() => selectMenu('fr')} className='animate__animated animate__slideInUp'>Français</p>
            <p onClick={() => selectMenu('en')} className='animate__animated animate__slideInUp'>English</p>
            </div>
          </div>
        </div>
        <video className='background-video2' autoPlay muted playsInline>
          <source src={video} type='video/mp4'/>
        </video> 
      </div>
    </>
  );

    
};
export default Chargement;
