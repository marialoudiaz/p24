import React from 'react';
import {useRef, useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import '../App.scss';
import Header from '../Components/header.js';
import medaillon from '../assets/logo/medaillon.png';
// CAROUSEL
import prev from '../assets/icons/interface/icon-eye-1.png';
import next from '../assets/icons/interface/icon-eye-2.png';


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
      transition: 'transform 2s ease', // Adjust the duration and easing as needed
    }
    // Ouvrir le lien
    const handleDiscoverClick = () => {
      const [url, target] = projectDescription.onClick;
      window.open(url, target);
    };


return (
  <>
  <div className='scrollable-container'>

    <Header />

      {/* VIDEO OPENING -- full width > moitié au scroll */}
      <div className='film'>
        <div className='background-video'>
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
      </div>  

      <div  className='section' id='projet' style={{marginBottom: '5rem', marginTop: '5rem'}}>
        
        {/* SECTION 1 - FICHE INFOS */}
        <div className='grid-col2-projet'>

          <div className='grid-col2-img' style={{height:'auto'}}>
            <img src={projectDescription.image} alt="image-clef du projet" style={{backgroundPosition:'center'}}/>
          </div>

          <div className='flex-col' style={{ justifyContent: 'center', alignItems:'center', textAlign:'center'}}>
            <img src={medaillon} style={{ maxWidth: '10%', alignSelf: 'center' }} alt="Medaillon"/>
            <h2>{projectDescription.title}</h2>

            {/* FONCTION MAP POUR INFOS */}
            <div className='flex-wrap' style={{width:'auto', justifyContent:'center'}}>
              {projectDescription.infos[langIndex].map((info, index) => (
                <b key={index}><p>{info}</p></b>
              ))}
            </div>

            {/* FONCTION MAP POUR CATEGORIES */}
            <div className='flex-wrap' style={{width:'auto', justifyContent:'center'}}>
              {projectDescription.categories[langIndex].map((categorie, index) => (
                <p className='pill' key={index}>{categorie}</p>
              ))}
            </div>

            {/* DÉCOUVRIR LE SITE */}
            {projectDescription.onClick&&
            <div className='flex-wrap' style={{width:'auto'}}>
              <div id='carousel-btn-projet'>
                <img src={imageSource} 
                  alt='an icon of an eye to see the project description when clicked' 
                  onMouseOver={handleHover} 
                  onMouseOut={handleHoverOut} 
                  onClick={handleDiscoverClick}
                  style={imgStyle}
                />
              </div>
              <div >
              {Lang === 'FR' ? <p>Découvrir le site</p> : <p>Discover the website</p>}
              </div>
            </div>
            }

            {/* BESOINS */}
            <div className='flex-col'>
            {Lang === 'FR' ? <h3>Besoins</h3> : <h3>Needs</h3>}
              <p>{projectDescription.besoins[langIndex][0]}</p>
            </div>
          </div>
        </div>

         {/* SECTION 2 - EXPLICATION PROJET */}
         {projectDescription.sections && projectDescription.sections.length > 0 && (
            projectDescription.sections.map((section, index) => (
              <div className='grid-col2-projet' key={index}>
                <div className='flex-col' style={{ justifyContent: 'center', alignItems:'center', textAlign:'center'}}>
                  {/* Chapitre 1 */}
                  <h3>{section.subtitle[langIndex]}</h3>
                  <div className='flex-wrap' style={{justifyContent:'center'}}>
                   {section.categories && section.categories[langIndex].map((category, catIndex) => (
                      <p className='pill' key={catIndex}>{category}</p>
                    ))}
                  </div>
                  <p>{section.text[langIndex]}</p>
                </div>
                {/* IMAGE OU VIDEO */}
                {section.image && (
                  <div className='grid-col2-img-section' style={{height:'auto'}}>
                    <img src={section.image} alt="Section visual" />
                  </div>
                )}
                {section.video && (
                  <div className='grid-col2-video-section'>
                    <video src={section.video} autoPlay loop muted playsInline>
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
              </div>
            ))
          )}

          {/* SECTION 3 - IMAGES SUPPLÉMENTAIRES */}
          <div className='grid-col2'>
            {projectDescription.sectionsImg && projectDescription.sectionsImg.length > 0 && (
              projectDescription.sectionsImg.map((sectionImg, index) => (
                    <img key={index} src={sectionImg} alt={`Section ${index + 1}`} style={{width:'100%', height:'100%', objectFit: 'cover', objectPosition:'center' 
                    }} />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projet