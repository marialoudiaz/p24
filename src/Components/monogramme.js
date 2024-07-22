import '../App.scss';
import Logo from '../assets/logo/medaillon.png';
import { useNavigate } from 'react-router-dom';


const Monogramme = () => {

  const contact=['contact·'];
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
      <svg
       width="100%" 
       height="100%"
       viewBox="0 0 100 100"
       xmlns="http://www.w3.org/2000/svg"
       className='rotate-svg'
      >
        <path
          id="circlePath"
          d="M 10, 50 a 40,40 0 1,1 80,0 40,40 0 1,1 -80,0"
          fill='transparent'
        />
        <text>
          <textPath href="#circlePath">{new Array(4).fill(contact).join('')}</textPath>
        </text>
      </svg>
      <div className='logo-roue'>
       <img src={Logo} alt='logo'/>
      </div>
      </a>
      
  </div>

  )
  
  };

export default Monogramme;
// fill='transparent'