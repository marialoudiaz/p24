import '../App.scss';
import { useNavigate } from 'react-router-dom';
import monogramme from '../assets/icons/roue.mp4';


const Monogramme = () => {

  const navigate = useNavigate();
  // Aller à la fin du document
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return(
  <div className='Conteneur'>
      <a onClick={scrollToBottom}>
          <video autoPlay loop muted playsInline>
            <source src={monogramme} type="video/mp4" />
          </video>
      </a>
  </div>
  )
  };
  
export default Monogramme;
