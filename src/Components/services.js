import React from 'react';
import {useRef, useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import '../App.scss';

import Carousel from '../Components/carousel';
import showcase from '../assets/icons/services/showcase.png';
import multipages from '../assets/icons/services/multipages.png';
import photo from '../assets/icons/services/photo.png';
import socials from '../assets/icons/services/socials.png';
import blog from '../assets/icons/services/blog.png';
import identity from '../assets/icons/services/identity.png';
import logo from '../assets/icons/services/logo.png';
import signage from '../assets/icons/services/signage.png';
import packaging from '../assets/icons/services/packaging.png';
import illustration from '../assets/icons/services/illustration.png';



const Services = ({infos}) => {

  const services = infos.services;
  const logiciels = infos.logiciels;
  const location = useLocation();
  const { infosComposants } = location.state;
  
  // Les éléments de la section
  const title = services[0];
  const soustitre = services[1];
  const soustitre2 = services[2];
  // Définir les icônes
  const icons = [
    showcase, multipages, photo, socials, blog,
    identity, logo, signage, packaging, illustration
  ];
  const dataArray = [
    {
      index: 0,
      image: icon1,
      alt: "cercle avec un trait noir au centre à l'encre de chine",
      titre: `${infosComposants[0].services[3]}`,
    },
    {
      index: 1,
      image: icon2,
      alt: "cercle avec un trait noir au centre à l'encre de chine",
      titre: `${infosComposants[0].services[4]}`,
    },
    {
      index: 2,
      image: icon5,
      alt: "cercle avec un trait noir au centre à l'encre de chine",
      titre: `${infosComposants[0].services[5]}`,
    },
    {
      index: 3,
      image: icon6,
      alt: "cercle avec un trait noir au centre à l'encre de chine",
      titre: `${infosComposants[0].services[6]}`,
    },
    {
      index: 4,
      image: icon7,
      alt: "cercle avec un trait noir au centre à l'encre de chine",
      titre: `${infosComposants[0].services[7]}`,
    },
    {
      index: 5,
      image: icon8,
      alt: "cercle avec un trait noir au centre à l'encre de chine",
      titre: `${infosComposants[0].services[8]}`,
    },
    {
      index: 6,
      image: icon9,
      alt: "cercle avec un trait noir au centre à l'encre de chine",
      titre: `${infosComposants[0].services[9]}`,
    },
    {
      index: 7,
      image: icon10,
      alt: "cercle avec un trait noir au centre à l'encre de chine",
      titre: `${infosComposants[0].services[10]}`,
    },
    {
      index: 8,
      image: icon11,
      alt: "cercle avec un trait noir au centre à l'encre de chine",
      titre: `${infosComposants[0].services[11]}`,
    },
    {
      index: 9,
      image: icon12,
      alt: "cercle avec un trait noir au centre à l'encre de chine",
      titre: `${infosComposants[0].services[12]}`,
    },
  ];


  return (
  <>
  <div  id='services' className='section'>

    <div className='grid-col2'>
{/*CAROUSEL DE LOGICIELS*/}
      <div className='flex-col'>
        <h2>{title}</h2>
        <h3 style={{width:'70%'}}>{soustitre}</h3>
        {logiciels && (
              <div className='flex-wrap'>
                {logiciels.slice(0, 11).map((logiciel, index) => (
                  <img key={index} src={logiciel}
                  />
                ))}
              </div>
        )}
        <h3 className='syne gold' style={{fontSize:'3rem'}}>web</h3>
      </div>

{/*CAROUSEL DE SERVICES*/}
  <Carousel dataArray={dataArray.slice(0,5)} customStyle={{marginTop:0 }}/>
      {/* <div className='grid-col3'>
      {combinedData.slice(0, 5).map((item, index) => (
          <div className='grid-col3-item' key={index}>
            <img src={item.image} />
              <p>{item.title}</p>
          </div>
      ))}
      </div> */}
    </div>



    <div className='grid-col2'>
{/*CAROUSEL DE LOGICIELS*/}
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

{/*CAROUSEL DE SERVICES*/}
  <Carousel dataArray={dataArray.slice(5,12)} customStyle={{marginTop:0 }}/>
      {/* <div className='grid-col3'>
      {combinedData.slice(5, 12).map((item, index) => (
        <div className='grid-col3-item' key={index}>
          <div>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        </div>
      ))}
    </div> */}
  </div>
  </div>
  </>
);
};


export default Services
