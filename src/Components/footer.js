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
            <p className="footer-p">{infos.location[0]} {infos.location[1]}</p>
          </div>
        </div>
      </>
  )
  };

export default Footer;
