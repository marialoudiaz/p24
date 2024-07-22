import React, { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import logofull from '../assets/logo/logo-full.png';

const Header = ({infos}) => {

  const navigate = useNavigate();
  
    // Log pour débogage
    const logStorageState = () => {
      const storedInfos = localStorage.getItem('infosComposants');
      console.log('LocalStorage:', localStorage);
      console.log('Stored Infos (stringified):', storedInfos);
  
      if (storedInfos) {
        try {
          const parsedInfos = JSON.parse(storedInfos);
          console.log('Stored Infos (parsed):', parsedInfos);
          console.log('First Info:', parsedInfos[0]);
          console.log('First Info ID:', parsedInfos[0]?.ids);
        } catch (error) {
          console.error('Error parsing storedInfos:', error);
        }
      } else {
        console.error('No data found in localStorage for key "infosComposants".');
      }
    };
  
    logStorageState(); // Appelez cela pour vérifier l'état actuel du localStorage
  
    const handleClick = () => {
      const storedInfos = JSON.parse(localStorage.getItem('infosComposants'));
  
      if (storedInfos && Array.isArray(storedInfos) && storedInfos.length > 0 && storedInfos[0]?.ids) {
        navigate(`/homepage/${storedInfos[0].ids}`, { state: { infosComposants: storedInfos } });
      } else {
        console.error('Stored info or ID is undefined');
      }
    };
  


  return (
    <div className="header-container">
      <div id="header-container-logo" onClick={handleClick}>
        <img className='logo' src={logofull} alt='logo'/>
      </div>
    </div>
  );
};

export default Header;