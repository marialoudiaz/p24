import React, { useState, useEffect} from 'react';
import '../App.scss';
import fleche from '../assets/icons/interface/fleche.png'


function Carousel({ dataArray,customStyle}) {

 //L'index de l'image active  
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  // Fonction pour changer l'image active
  const changeActiveImage = ()=>{
    setActiveIndex((prevIndex) => (prevIndex + 3) % dataArray.length); // avancer dans l'index (index précédent +1 /longueur total array(3))
  };
    // Si en mode mobile, afficher tous les éléments
    const activeItems = isMobile ? dataArray : dataArray.slice(activeIndex, activeIndex + 3);
    if (!isMobile && activeItems.length < 3) {
      activeItems.push(...dataArray.slice(0, 3 - activeItems.length));
    }
  // Fonction pour vérifier la taille de l'écran
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  return (
    <>
      <div className="grid-col4" style={customStyle}>
        {activeItems.map((item, index) => (
          <div key={index} className="grid-col3-item" id="carousel-item">
            <img src={item.image} alt={item.alt} />
            <h3>{item.titre}</h3>
            <p>{item.text}</p>
          </div>
        ))}
        {!isMobile && (
          <div className="carousel-buttons">
            <button id="btn-fleche" onClick={changeActiveImage}>
              <img id="fleche" src={fleche} alt="icône de flèche" />
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Carousel;
