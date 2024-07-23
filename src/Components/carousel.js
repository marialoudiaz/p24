import React, { useState} from 'react';
import '../App.scss';
import fleche from '../assets/icons/interface/fleche.png'


function Carousel({ dataArray }) {

 //L'index de l'image active  
  const [activeIndex, setActiveIndex] = useState(0);
  // Fonction pour changer l'image active
  const changeActiveImage = ()=>{
    setActiveIndex((prevIndex) => (prevIndex + 3) % dataArray.length); // avancer dans l'index (index précédent +1 /longueur total array(3))
  };
  const activeItems = dataArray.slice(activeIndex, activeIndex+3);
  if (activeItems.length < 3){
    activeItems.push(...dataArray.slice(0,3 - activeItems.length));
  }

  return (
    <>
      <div className="grid-col4">
        {activeItems.map((item, index) => (
          <div key={index} className="grid-col3-item" id='carousel-item'>
            <img src={item.image} alt={item.alt} />
            <h3 style={{fontWeight:'bold'}}>{item.titre}</h3>
            <p>{item.text}</p>
          </div>
        ))}
         <div className='carousel-buttons'>
              <button id='btn-fleche' onClick={changeActiveImage}><img id='fleche' src={fleche} alt='icône de flèche'/></button>
        </div>
      </div>
       
    </>
   
  );
}

export default Carousel;
