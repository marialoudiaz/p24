import React, { useEffect, useRef } from 'react';
import logo from '../assets/logo/ani.mp4'

const VideoPreloader = ({ onVideoEnd }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      onVideoEnd();
    }, 5000); // 5 secondes

    return () => clearTimeout(timer);
  }, [onVideoEnd]);

  return (
    <div className="film">
      <div className='background-video-hp'>
         <video ref={videoRef} autoPlay muted loop>
        <source src={logo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
     
    </div>
  );
};

export default VideoPreloader;
