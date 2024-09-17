import React from 'react';
import {useRef, useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import '../App.scss';

import Carousel from '../Components/carousel';
import icon1 from '../assets/icons/services/ordi1-or.png';
import icon2 from '../assets/icons/services/ordi-infini-or.png';
import icon5 from '../assets/icons/services/media-or.png';
import icon6 from '../assets/icons/services/rs-or.png';
import icon7 from '../assets/icons/services/texte-or.png';
import icon8 from '../assets/icons/services/copyright-or.png';
import icon9 from '../assets/icons/services/formes-or.png';
import icon10 from '../assets/icons/services/fleches-or.png';
import icon11 from '../assets/icons/services/packaging-or.png';
import icon12 from '../assets/icons/services/trefle-or.png';



const Services = ({infos}) => {

  const services = infos.services;
  const logiciels = infos.logiciels;
  const location = useLocation();
  const { infosComposants } = location.state;

  // // Combiner les icônes et les services
  // const combinedData = services.slice(3).map((service, index) => ({
  //   title: service,
  //   image: icons[index]
  // }));

  // Les éléments de la section
  const title = services[0];
  const soustitre = services[1];
  const soustitre2 = services[2];
  // Définir les icônes
  const icons = [
    icon1, icon2, icon5, icon6, icon7,
    icon8, icon9, icon10, icon11, icon12
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
