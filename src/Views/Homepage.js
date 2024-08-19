import React, { Suspense, lazy, useRef, useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import '../App.scss';

const Header = lazy(() => import('../Components//header.js'));
const VideoReveal = lazy(() => import('../Components/VideoReveal.js'));
const Services = lazy(() => import('../Components/services'));
const Approche = lazy(() => import('../Components/approche.js'));
const Projets = lazy(() => import('../Components/projets.js'));
const Deroule = lazy(() => import('../Components/deroule.js'));
const Formulaire = lazy(() => import('../Components/formulaire'));
const Citation = lazy(() => import( '../Components/citation.js'));
const Monogramme = lazy(() => import( '../Components/monogramme.js'));
const Footer = lazy(() => import( '../Components/footer.js'));


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
    <Projets />
    <Deroule infos={infos}/>
    <Citation />
    <Formulaire infos={infos}/>
    <Monogramme />
    <Footer />
  </div>

  </>
)
}
export default App;
