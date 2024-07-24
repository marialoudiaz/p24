import React from 'react';
import {useRef, useState, useEffect} from 'react';
import { useLocation, useParams } from 'react-router-dom';
import '../App.scss';

import Header from '../Components//header.js';
import VideoReveal from '../Components/VideoReveal.js';
import Services from '../Components/services';
import Approche from '../Components/approche.js';
import Competences from '../Components/competences';
import Projets from '../Components/projets.js';
import Deroule from '../Components/deroule.js';
import Formulaire from '../Components/formulaire';
import Monogramme from '../Components/monogramme.js';


const App = () => {

  //Récupération des infos
    const location = useLocation();
    localStorage.setItem('infosComposants', JSON.stringify(location.state?.infosComposants));
    const infosComposants = location.state?.infosComposants || JSON.parse(localStorage.getItem('infosComposants')) || [];
  
    // Si l'array n'est pas reçu, afficher un message
  if (infosComposants.length === 0) {
    return <div>Pas d'informations disponibles.</div>;
  }

  const infos = infosComposants[0];

  return (
  <>
  <div className='scrollable-container'>
    <Header infos={infos}/>
    <VideoReveal infos={infos}/>
    <Services infos={infos}/>
    <Approche infos={infos}/>
    {/* <Competences /> */}
    <Projets />
    <Deroule infos={infos}/>
    <Formulaire infos={infos}/>
    <Monogramme />
  </div>

  </>
)
}
export default App;
