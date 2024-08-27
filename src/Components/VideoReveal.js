import React, { useRef, useState, useEffect} from 'react';
import '../App.scss';
import Typewriter from 'typewriter-effect';
import Marquee from "react-fast-marquee";
import videoReveal1 from '../assets/video/videos-introductives/D-INDEP-FR.mp4';
import videoReveal2 from '../assets/video/videos-introductives/M-INDEP-FR.mp4';
import videoReveal3 from '../assets/video/videos-introductives/D-STUDIO-FR.mp4';
import videoReveal4 from '../assets/video/videos-introductives/M-STUDIO-FR.mp4';
import videoReveal5 from '../assets/video/videos-introductives/D-INDEP-EN.mp4';
import videoReveal6 from '../assets/video/videos-introductives/M-INDEP-EN.mp4';
import videoReveal7 from '../assets/video/videos-introductives/D-STUDIO-EN.mp4';
import videoReveal8 from '../assets/video/videos-introductives/M-STUDIO-EN.mp4';
import thumbnailSrc from '../assets/projets/thumbnail.png';


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
  const greetings = infos.presentation[0];
  const desktopVideoRef = useRef(null);
  const mobileVideoRef = useRef(null);
  const btnVideoRef = useRef(null);
  // Lancer la video en mode plein écran - videoRef stands for both refs (desktop+mobile)
  const handlePlayVideo = (videoRef) => {
    const videoElement = videoRef.current;
    if (videoElement.requestFullscreen) {
      videoElement.requestFullscreen();
    } else if (videoElement.mozRequestFullScreen) { // Firefox
      videoElement.mozRequestFullScreen();
    } else if (videoElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
      videoElement.webkitRequestFullscreen();
    } else if (videoElement.msRequestFullscreen) { // IE/Edge
      videoElement.msRequestFullscreen();
    }
    // Lecture de la vidéo en plein écran
    videoElement.play();
    // Réassignation de l'ID après la lecture de la vidéo
    btnVideoRef.id = 'discover-hp2';
    // Réassigner l'ID à 'discover-hp' lorsque la vidéo se termine
  videoElement.onended = () => {
    btnVideoRef.id = 'discover-hp';
  };
  };
  // Couper la video
  const resetVideoOnFullscreenExit = (videoRef) => {
    const videoElement = videoRef.current;
    const handleFullscreenChange = () => {
      if (
        !document.fullscreenElement &&
        !document.webkitFullscreenElement &&
        !document.mozFullScreenElement &&
        !document.msFullscreenElement
      ) {
        videoElement.pause();
        videoElement.currentTime = 0;
        videoElement.load()
      }
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);
  };
  useEffect(() => {
    resetVideoOnFullscreenExit(desktopVideoRef);
    resetVideoOnFullscreenExit(mobileVideoRef);
  }, []);
 
  
return (
<>
    <div className='section' style={{marginTop:'10rem', textAlign:'center'}}>
    <div id='typewriter-homepage'>
      <div>
        <Typewriter 
          options={{
          strings: [`${infos.presentation.slice(0,1)}`,`${infos.presentation.slice(1,2)}`],
          autoStart: true,
          loop: true,
          delay: 90,
          pauseFor: 1000,
        }}
      /> </div>
      {infos.presentation.slice(2, 7).map((item, index) => (
        <p key={index} id='p-hp'>{item}</p>
      ))}
      </div>
      <Marquee speed='30' style={{marginTop:'5rem'}}>
      <h2 className='syne-bold'>{infos.expertise+' '}</h2> 
      </Marquee>
    </div>
    
      <div className='background-video-hp'>

        <div className='desktop'  style={{position:'relative'}}>
          <video 
            ref={desktopVideoRef}
            muted 
            playsInline
            poster={thumbnailSrc} // Définit l'image de vignette
            onClick={handlePlayVideo}
            controls={false}
          >
            <source src={ordi} type="video/mp4" />
          </video>
          <div 
            className='btn-black' 
            style={{position:'absolute', top:'50%', left:'50%', transform: 'translate(-50%, -50%)'}} 
            onClick={() => handlePlayVideo(desktopVideoRef)}>
              <p>{infos.discover}</p></div>  
        </div>

        <div  className='mobile' style={{position:'relative'}}>
          <video 
            ref={mobileVideoRef}
            muted 
            playsInline
            poster={thumbnailSrc} // Définit l'image de vignette
            onClick={handlePlayVideo}
            controls={false}
          >
            <source src={tel} type="video/mp4" />
          </video>
          <div 
            className='btn-black' 
            id='discover-hp'
            ref= {btnVideoRef}
            style={{position:'absolute', top:'50%', left:'50%', transform: 'translate(-50%, -50%)'}} 
            onClick={() => handlePlayVideo(mobileVideoRef)}>
              <p>{infos.discover}</p></div>  
        </div>
      </div>
</>
    
  );
};

export default VideoReveal;