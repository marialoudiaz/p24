import React, { useState, useEffect } from 'react';
import '../App.scss';
import { useLocation } from 'react-router-dom';
import { shuffle } from 'txt-shuffle';

const Citation = () => {
  const location = useLocation();
  const { infosComposants } = location.state;
  const citation = infosComposants[0].citation;

  const [shuffledText, setShuffledText] = useState(citation);

  useEffect(() => {
    let isMounted = true;

    const runShuffle = () => {
      const txtShuffle = shuffle({
        text: citation,
        fps: 3, // Frame per second
        onUpdate: (output) => {
          if (isMounted) setShuffledText(output); // Mise à jour du texte affiché
        },
        onComplete: () => { //callback function = return output string (créer une boucle)
          if (isMounted) {
            setTimeout(() => {
              runShuffle(); // Relance la fonction après 5 secondes de pause
            }, 5000); // 5000 millisecondes = 5 secondes
          }
        }
      });
    };

    runShuffle(); // Démarre le shuffle

    return () => {
      isMounted = false; // Nettoyage lors de la désactivation du composant
    };
  }, [citation]);

  return (
    <div className='section'>
      <h3 className="citation">
        {shuffledText}
      </h3>
    </div>
  );
};

export default Citation;
