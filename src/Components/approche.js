import '../App.scss';
import { useLocation } from 'react-router-dom';

import portrait from '../assets/img/portrait-mai24.jpg';
import medaillon from '../assets/logo/medaillon.png'

import oeil from '../assets/icons/approche/oeil-or.png';
import cercle from '../assets/icons/approche/cercle-or.png';
import harmonie from '../assets/icons/approche/harmonie-or.png';
import nature from '../assets/icons/approche/nature-or.png';
import trait from '../assets/icons/approche/trait-or.png';
import trombone from '../assets/icons/approche/trombone-or.png';
import Carousel from '../Components/carousel';

import Typewriter from 'typewriter-effect';





const Approche = () => {

    // récupérer les infos
    const location = useLocation();
    const { infosComposants } = location.state; 
    // le portrait
    const portrait = infosComposants[0].approche[14];

    // Les éléments de la section
    const approche = infosComposants[0].approche[0];
    const citation = infosComposants[0].approche[1];
     // Les élements du carousel
     const dataArray = [
      {
        index: 0,
        image: cercle,
        alt: "cercle avec un trait noir au centre à l'encre de chine",
        titre: `${infosComposants[0].approche[2]}`,
        text: `${infosComposants[0].approche[3]}`,
      },
      {
        index: 1,
        image: oeil,
        alt: "oeil à l'encre de chine",
        titre: `${infosComposants[0].approche[4]}`,
        text: `${infosComposants[0].approche[5]}`,
      },
      {
        index: 2,
        image: harmonie,
        alt: "symbole symétrique à l'encre de chine",
        titre: `${infosComposants[0].approche[6]}`,
        text: `${infosComposants[0].approche[7]}`,
      },
      {
        index: 3,
        image: nature,
        alt: "plante minimaliste à l'encre de chine",
        titre: `${infosComposants[0].approche[8]}`,
        text: `${infosComposants[0].approche[9]}`,
      },
      {
        index: 4,
        image: trombone,
        alt: "trombone stylisé à l'encre de chine",
        titre: `${infosComposants[0].approche[10]}`,
        text: `${infosComposants[0].approche[11]}`,
      },
      {
        index: 5,
        image: trait,
        alt: "trait doré à l'encre de chine",
        titre: `${infosComposants[0].approche[12]}`,
        text: `${infosComposants[0].approche[13]}`,
      },
    ];

  return(
      <>
      <div classname='section' style={{marginTop:'15rem'}}>
        <div className='grid-col2'>
          <img className='grid-col2-img' src={portrait} alt='autoportrait souriant en noir et blanc'/>
          <div className='flex-col' style={{justifyContent:'center'}}>
            <div className='flex-col-center'>
              <img src={medaillon} alt='le logo sous forme de médaillon' style={{width:'6rem'}}/>
              <h2>{approche}</h2>
              <h3>
              <Typewriter
                  options={{
                  strings: [`${citation}`],
                  autoStart: true,
                  loop: true,
                  }}
              />
              </h3>
              <Carousel dataArray={dataArray} />
            </div>
          </div>
        </div>
      </div>
      </>
  )
  };

export default Approche;
// fill='transparent'