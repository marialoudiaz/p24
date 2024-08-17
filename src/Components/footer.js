import '../App.scss';
import { useLocation } from 'react-router-dom';

const Footer = () => {
   // Recevoir & envoyer infos
   const location = useLocation();
   const { infosComposants } = location.state;

  return(
      <>
        <div className='section'>
            <h3 className="citation">
            {infosComposants.}{location}
            </h3>
          </div>
      </>
  )
  };

export default Footer;
