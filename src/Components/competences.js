import React, { useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import '../App.scss';
import Marquee from "react-fast-marquee";

function Competences() {

  const location = useLocation();
  const { infosComposants } = location.state; 
  const info = {infosComposants};
  
  // Détecter la langue & éléments à afficher
  const Lang = info.infosComposants[0].Lang;
  const textsArray = ['autoentrepreneur.ses','idéalistes','créatif.ves','rêveur.ses','passionné.es','autoentrepreneur.ses','idéalistes','créatif.ves','rêveur.ses','passionné.es'];
  const textsArrayEN = ['freelancers', 'idealists', 'creatives', 'dreamers', 'passionate individuals','freelancers', 'idealists', 'creatives', 'dreamers', 'passionate individuals'];
  const words=['identité de marque','site web', 'application mobile','illustration','typographie'];
  const wordsEN=["Brand identity", "Website", "Mobile application","Illustration", "Typography"];
  const displayTexts = Lang.includes('EN') ? textsArrayEN : textsArray;
  const displayWords = Lang.includes('EN') ? wordsEN : words;
  const whom = Lang.includes('EN') ? 'for the' : 'pour les';
  const [buttonText, setButtonText] = useState(displayTexts[0]); // Texte initial du bouton
  const [wordIndex, setWordIndex] = useState(0);


 // Mettre à jour le texte du bouton et les mots affichés toutes les 5 secondes
  useEffect(() => {
    const textChangeInterval = setInterval(() => {
      setButtonText((prevButtonText) => {
        const currentIndex = displayTexts.indexOf(prevButtonText);
        const nextIndex = (currentIndex + 1) % displayTexts.length;
        return displayTexts[nextIndex];
      });
      setWordIndex((prevIndex) => (prevIndex + 1) % displayWords.length);
    }, 2000);

    return () => {
      clearInterval(textChangeInterval);
    };
  }, [displayTexts, displayWords]);


  return (
    <>
      <section className='section' id='competences'>
        <div>
          <div style={{position:'relative'}}>
            <div className='col-titre'>
              <h1>{whom}</h1>
              <div className='rolling-btn'>{buttonText}</div>
            </div>
            
            <Marquee className="scrolling-banner" style={{width: '115vw', transform: 'rotate(.99turn)'}}>
              <div className="text-container">
                {displayWords.map((word, index) => (
                  <div className="text" key={index}>
                    {word}
                  </div>
                ))}
              </div>
            </Marquee>
            
            <Marquee className="scrolling-banner2" style={{width: '115vw', transform: 'rotate(0.01turn)'}}>
                  <div className="text-container">
                    {displayWords.map((word, index) => (
                      <div className="text" key={index}>
                        {word}
                      </div>
                    ))}
              </div>
            </Marquee>

          </div>
        </div>
      </section>
    </>
  )

}

export default Competences