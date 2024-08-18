import '../App.scss';
import { useLocation } from 'react-router-dom';


const Footer = () => {
   // Recevoir & envoyer infos
   const location = useLocation();
   const { infosComposants } = location.state;
   const infos = infosComposants[0];
   console.log('infos', infosComposants[0])

  return(
      <>
        <div className='footer'>
          <div>
            <svg style={{marginRight:'15px'}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill='#e5e5e'><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>
             {/* <p style={{fontSize:'1rem'}} className='display'>DISPONIBLE POUR DE NOUVEAUX PROJETS</p> */}
              <p className="syne-bold">
                {infos.location[0]} {infos.location[1]} 🇦🇺
              </p>
          </div>
            
          </div>
      </>
  )
  };

export default Footer;
