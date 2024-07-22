import React, { useRef, useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import '../App.scss';
import videoReveal1 from '../assets/video/videos-introductives/D-INDEP-FR.mp4';
import videoReveal2 from '../assets/video/videos-introductives/M-INDEP-FR.mp4';
import videoReveal3 from '../assets/video/videos-introductives/D-STUDIO-FR.mp4';
import videoReveal4 from '../assets/video/videos-introductives/M-STUDIO-FR.mp4';
import videoReveal5 from '../assets/video/videos-introductives/D-INDEP-EN.mp4';
import videoReveal6 from '../assets/video/videos-introductives/M-INDEP-EN.mp4';
import videoReveal7 from '../assets/video/videos-introductives/D-STUDIO-EN.mp4';
import videoReveal8 from '../assets/video/videos-introductives/M-STUDIO-EN.mp4';
import logo from '../assets/logo/medaillon.png';
import text from '../assets/logo/nom+titre.png'; 



const VideoReveal = ({infos}) => {
  // Map des noms de vidéos aux imports correspondants
  const videoMap = {
    'videoReveal1': videoReveal1,
    'videoReveal2': videoReveal2,
    'videoReveal3': videoReveal3,
    'videoReveal4': videoReveal4,
    'videoReveal5': videoReveal5,
    'videoReveal6': videoReveal6,
    'videoReveal7': videoReveal7,
    'videoReveal8': videoReveal8
  };
  // Assignez les vidéos dynamiquement
  const ordi = videoMap[infos.videoOrdi] || videoReveal1; // Valeur par défaut au cas où videoOrdi n'est pas dans le map
  const tel = videoMap[infos.videoTel] || videoReveal2; // Valeur par défaut au cas où videoTel n'est pas dans le map

return (
<>
    <div className='film'>
      <div className='background-video'>
        <video className='desktop' autoPlay loop muted>
          <source src={ordi} type="video/mp4" />
        </video>
        <video className='mobile' autoPlay loop muted>
          <source src={tel} type="video/mp4" />
        </video>
      </div>
    </div> 
</>
    
  );
};

export default VideoReveal;