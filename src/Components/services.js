import React from 'react';
import {useRef, useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import '../App.scss';

import print from '../assets/icons/titres/print-gold.png';
import web from '../assets/icons/titres/web-gold.png';
import icon1 from '../assets/icons/services/ordi1-or.png';
import icon2 from '../assets/icons/services/ordi-infini-or.png';
import icon3 from '../assets/icons/services/ordi-euro-or.png';
import icon4 from '../assets/icons/services/tel-or.png';
import icon5 from '../assets/icons/services/media-or.png';
import icon6 from '../assets/icons/services/rs-or.png';
import icon7 from '../assets/icons/services/texte-or.png';
import icon8 from '../assets/icons/services/copyright-or.png';
import icon9 from '../assets/icons/services/formes-or.png';
import icon10 from '../assets/icons/services/fleches-or.png';
import icon11 from '../assets/icons/services/packaging-or.png';
import icon12 from '../assets/icons/services/trefle-or.png';
import icon13 from '../assets/icons/services/pin-or.png';



const Services = ({infos}) => {

  const services = infos.services;
  const logiciels = infos.logiciels;

  // Définir les icônes
  const icons = [
    icon1, icon2, icon3, icon4, icon5, icon6, icon7,
    icon8, icon9, icon10, icon11, icon12, icon13
  ];
  // Combiner les icônes et les services
  const combinedData = services.slice(3).map((service, index) => ({
    title: service,
    image: icons[index]
  }));
  // Les éléments de la section
  const title = services[0];
  const soustitre = services[1];
  const soustitre2 = services[2];

  return (
  <>
  <div  id='services' className='section'>

    <div className='grid-col2'>
      <div className='flex-col'>
        <h2>{title}</h2>
        <h3 style={{width:'70%'}}>{soustitre}</h3>
        {logiciels && (
              <div className='flex-wrap'>
                {logiciels.slice(0, 12).map((logiciel, index) => (
                  <img key={index} src={logiciel}
                  />
                ))}
              </div>
        )}
        <h3 className='syne gold' style={{fontSize:'3rem'}}>web</h3>
      </div>
      <div className='grid-col3'>
      {combinedData.slice(0, 7).map((item, index) => (
              <div className='grid-col3-item' key={index}>
                <img src={item.image} />
                <p>{item.title}</p>
              </div>
      ))}
      </div>
    </div>

    <div className='grid-col2' >
      <div className='flex-col'>
        <h2>{title}</h2>
        <h3 style={{width:'70%'}}>{soustitre2}</h3>
        {logiciels && (
              <div className='flex-wrap'>
                {logiciels.slice(-6).map((logiciel, index) => (
                  <img key={index} src={logiciel} />
                ))}
              </div>
        )}
         <h3 className='syne gold' style={{fontSize:'3rem'}}>print</h3>
      </div>
      <div className='grid-col3'>
      {combinedData.slice(7).map((item, index) => (
              <div className='grid-col3-item' key={index}>
                <img src={item.image} />
                <p>{item.title}</p>
              </div>
      ))}
    </div>
  </div>
  </div>
  </>
);
};


export default Services
