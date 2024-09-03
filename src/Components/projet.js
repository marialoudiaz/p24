import React from 'react';
import {useRef, useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import '../App.scss';
import Header from '../Components/header.js';
// CAROUSEL
import prev from '../assets/icons/interface/icon-eye-1-b.png';
import next from '../assets/icons/interface/icon-eye-2-b.png';
import { FiArrowDownRight } from "react-icons/fi";

function Projet() {

  // récupérer les infos
  const location = useLocation();
  const { projectDescription, Lang } = location.state || {};
  //l'URL
  const url = projectDescription.videoDesktop;
  // Index pour fonctions map en fonction langue choisie
    // Déterminer les indices en fonction de la langue
    const langIndex = Lang === 'FR' ? 0 : 1;
  // Fonction pour vérifier si c'est une URL HTTPS
  const isHTTPSURL = (url) => {
    return url.startsWith('htt');
  };

  // Référence à la section que vous souhaitez cibler pour le scroll
  const sectionRef = useRef(null);
  useEffect(() => {
    // Scroller vers la section lors du chargement de la page
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'auto' });
    }
  }, []); // Le tableau de dépendances est vide pour déclencher seulement au chargement



  // Cliquer sur découvrir
    //// Le bouton oeil pour découvrir
    const [imageSource, setImageSource] = useState(prev);
    //// Hover icon oeil
    const handleHover = () => {setImageSource(next);};
    const handleHoverOut = () => {setImageSource(prev);};
    const imgStyle={
      display: 'flex',
      fleWrap: 'nowrap',
      margin: '.2rem 0rem 0rem .3rem', 
      width: '50px',
      height:'auto',
      transition: 'transform 2s ease', // Adjust the duration and easing as needed
    }
    // Ouvrir le lien
    const handleDiscoverClick = () => {
      const url = projectDescription.onClick; // Suppose que 'onClick' contient directement l'URL
      window.open(url, '_blank'); // '_blank' ouvre le lien dans une nouvelle fenêtre ou onglet
    };


return (
  <>
  <div className='scrollable-container'>

    <Header />
      {/* VIDEO OPENING -- full width > moitié au scroll */}
      <div className='film' ref={sectionRef}>

        <div className='background-video' id='bg-video-projet'>
          {isHTTPSURL(projectDescription.videoDesktop) ? (
              <iframe 
                src={projectDescription.videoDesktop}
                width="2000px" 
                height="500px"   
                allowfullscreen="true" 
                allowFullScreen="true"
                className='desktop'
                >
              </iframe>
              
            ) 
            : 
            (
            <video className='desktop' autoPlay loop muted playsInline>
              <source src={projectDescription.videoDesktop} type="video/mp4" />
            </video>
          )}
          {isHTTPSURL(projectDescription.videoMobile) ? (
            <iframe 
            src={projectDescription.videoMobile} 
            width="768px" 
            height="100px"   
            allowfullscreen="true" 
            allowFullScreen="true"
            className='mobile'
            > 
          </iframe>   
          ) : (
            <video className='mobile' autoPlay loop muted playsInline>
              <source src={projectDescription.videoMobile} type="video/mp4" />
            </video>
          )}
        </div>
        <div className='background-video-title'>
          <div>
                <h3>{projectDescription.baseline[langIndex]}</h3>
                <h2>{projectDescription.title}</h2>
          </div>
          <div>
            <FiArrowDownRight color='white'/>
            <FiArrowDownRight color='white'/>
            <FiArrowDownRight color='white'/>
            <p>{projectDescription.discover[langIndex]}</p>
          </div>
        </div>
      </div>  

      <div  className='section' id='projet' style={{marginBottom: '5rem', marginTop: '15rem'}}>

       {/* DIV INFOS*/}
       <div className='projet-infos'>
          <div>
            <p>Client</p>
            <p>{projectDescription.client}</p>
          </div>
          <div>
            <p>Expertises</p>
            {projectDescription.categories[langIndex].map((categorie, index) => (
              <p style={{fontWeight:'600'}} key={index}>{categorie}</p>
            ))}
          </div>

          {projectDescription.onClick&&
          <div>
            <>{Lang === 'FR' ? <p style={{fontWeight:'300'}}>Découvrir le site</p> : <p style={{fontWeight:'300'}}>Discover the website</p>}</>
            <div id='carousel-btn-projet' 
                  onMouseOver={handleHover} 
                  onMouseOut={handleHoverOut} 
                  onClick={handleDiscoverClick}
            >
              <img src={imageSource} 
                   alt='an icon of an eye to see the project description when clicked' 
                  style={imgStyle}
              />
                <p>{Lang === 'FR' ? <p>Lien</p> : <p>Link</p>}</p>
            </div>
            

          </div>
          }

          <div>
            <p>Date</p>
            <p>{projectDescription.infos[langIndex][0]}</p>
          </div>

       </div>
       {/* DIV BESOINS */}
       <div className='projet-infos-besoins'>
            {Lang === 'FR' ? <h2>Besoins</h2> : <h2>Needs</h2>}
              <p>{projectDescription.besoins[langIndex][0]}</p>
       </div>


  {/* DIV SECTIONS */}
         {/* SECTION 2 - EXPLICATION PROJET */}
        {projectDescription.sections && projectDescription.sections.length > 0 && (
          projectDescription.sections.map((section, index) => (
         <>
         {/* TITRE DE LA PREMIÈRE SECTION */}
          <div className='projet-infos-titre'>
            <h2>{section.subtitle[langIndex]}</h2>
            <p>{section.text[langIndex]}</p>
          </div>
          {/* IMAGE OU VIDEO DE PREMIERE SECTION */}
          <div className='projet-infos-img'>
            {section.imageEN && Lang !== 'FR' ?
             
              <img src={section.imageEN} alt="Section visual in English" />
              :
              <img src={section.image} alt="Section visual" />
            }
              
            {section.video && (
              <div className='grid-col2-video-section'>
                <video src={section.video} autoPlay loop muted playsInline>
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>
        </>
        ))
        )}
          {/* SECTION 3 - IMAGES SUPPLÉMENTAIRES */}
          <div className='grid-col2'>
            {projectDescription.sectionsImg && projectDescription.sectionsImg.length > 0 && (
              (Lang === 'FR' ? projectDescription.sectionsImg[1] : projectDescription.sectionsImg[0]).map((sectionImg, index) => (
                <img 
                  key={index} 
                  src={sectionImg} 
                  className={`section-image ${index === 2 ? 'div3' : ''}`} 
                  alt={`Section ${index + 1}`} 
                  style={{width:'100%', height:'100%', objectFit: 'cover', objectPosition:'center', borderRadius:'20px'}} 
                />
              ))
            )}
          </div>

      </div>
      </div>
    </>
  );
}

export default Projet